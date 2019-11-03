# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class OkSpider(scrapy.Spider):
    name = 'ok'
    allowed_domains = ['www.okzy.co']
    start_urls = []
    domain = 'http://www.okzy.co'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    page_size = 50
    total_page = 0
    total = 0
    total_valid = 0
    index = 0

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
            super(OkSpider, self).__init__(name, **kwargs)
            self.orign_url = self.domain + '/?m=vod-index-pg-'
            self.start_urls = [self.orign_url + '1.html']
            # 获取电影总数
            if (target == None):
                total = 0
                orign_html = get_one_page(self.start_urls[0])
                orign_html = etree.HTML(orign_html)
                # /html/body/div[1]/ul/li[3]/div/ul[2]/li/strong
                self.total = (int)(get_str_from_xpath(orign_html.xpath('//div[@class="topright"]/ul[2]/li/strong/text()')))
                self.start_page = 2
                self.total_page = self.total // self.page_size
                if self.total % self.page_size != 0:
                    self.total_page = self.total_page + 1
                for page_index in reverse_arr(range(self.start_page, self.total_page + 1)):
                    self.start_urls.append(self.orign_url + str(page_index) + '.html')
            elif (target == 'latest'):
                start_page = 2
                self.total_page = 1
                self.total = self.page_size * self.total_page
                for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                    self.start_urls.append(self.orign_url + str(page_index) + '.html')

    def parse(self, response):

        # 开始时间
        start = time.time()
        # 获取 web 驱动
        driver = get_driver()
        # 获取所有电影的 id，用于判断电影是否已经爬取
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        dict = [{'sources': {'$elemMatch': {'$ne': []}}}, {'id': 1}]
        data = db_utils.find(dict)
        movie_ids = []
        for movie_id in data:
            movie_ids.append(movie_id['id'])

        url = response.url
        print('当前页面：' + url)
        curr_page = url.split('/?m=vod-index-pg-')[1].split('.html')[0]

        # url：电影详情页
        count = -1
        for each in reverse_arr(response.xpath('//div[@class="xing_vb"]/ul')):


            if count == 0 or count == 51:
                continue
            try:
                url2 = each.xpath("./li/span[2]/a/@href").extract()[0]
            except:
                continue
            movie_id = url2.split('id-')[1].split('.html')[0]
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            html = get_one_page(self.domain + url2)
            try:
                html = etree.HTML(html)
            except:
                # 记录跳过的视频信息
                flag = 1
                history_type = 'ok'
                history_url = self.domain + url2
                history_text = '跳过'
                if (check_spider_history(history_type, history_url, history_text) == False):
                    write_spider_history(history_type, history_url, history_text)
                continue
            # /html/body/div[5]/div[1]/div/div
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/h2
            # /html/body/div[5]/div[1]/div/div/div[2]/div[2]/ul/li[1]/span
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/span
            each = html.xpath('//div[@class="vodBox"]')[0]
            movie_item = MovieItem()
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./div/img/@src'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./div[2]/div[1]/h2/text()'))
            movie_item['update_status'] = get_str_from_xpath(each.xpath('./div[2]/div[1]/span/text()'))
            movie_item['score'] = get_str_from_xpath(each.xpath('./div[2]/div[1]/label/text()'))
            nickname = get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[1]/span/text()'))
            if (nickname == ''):
                nickname = movie_item['name']
            movie_item['nickname'] = nickname
            tmp_directors = get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[2]/span/text()'))
            directors = tmp_directors.split(',')
            if ('/' in tmp_directors):
                directors = tmp_directors.split('/')
            movie_item['directors'] = directors
            tmp_actors = get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[3]/span/text()'))
            actors = tmp_actors.split(',')
            if ('/' in tmp_actors):
                actors = tmp_directors.split('/')
            elif (' ' in tmp_actors):
                actors = tmp_directors.split(' ')
            elif (',' in tmp_actors):
                actors = tmp_directors.split(',')
            movie_item['actors'] = actors
            type2 = get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[4]/span/text()'))
            type = get_type_from_type2(type2)
            if (is_exclude_type2(type2) == True):
                continue
            if (type == '综艺' or type == '动漫'):
                if (type2.endswith('片') == False):
                    type2 = type2 + '片'
            movie_item['type2'] = reverse_type2(type2)
            movie_item['type'] = type
            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[5]/span/text()')))
            movie_item['language'] = get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[6]/span/text()'))
            movie_item['release_date'] = reverse_release_date(get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[7]/span/text()')))
            movie_item['duration'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[8]/span/text()'))
            movie_item['update_time'] = reverse_update_time(get_str_from_xpath(each.xpath('./div[2]/div[2]/ul/li[9]/span/text()')))
            movie_item['description'] = get_str_from_xpath(html.xpath('//div[@class="vodplayinfo"]')[1].xpath('./text()'))
            sources = []
            count = 1
            index = 1
            for each in html.xpath('//div[@class="vodplayinfo"]')[2].xpath('./div/div'):
                if (len(html.xpath('//div[@class="vodplayinfo"]')[2].xpath('./div/div')) > 1):
                    print(self.domain + url2)
                source = {'name': '', 'types': []}
                source['name'] = get_str_from_xpath(each.xpath('./h3/span/text()'))
                types = []
                for each2 in each.xpath('./ul/li'):
                    type = {'name': '', 'url': ''}
                    type['name'] = get_str_from_xpath(each2.xpath('./text()')).split('$')[0]
                    type['url'] = get_str_from_xpath(each2.xpath('./input/@value'))
                    print('正在爬取 ' + curr_page + '/' + (str)(self.total_page) + ' ' + (str)(self.index) + '/' + (str)(
                        self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                    count = count + 1
                index = index + 1
                source['types'] = types
                sources.append(source)
                # 跳过播放列表为空的视频并记录
                flag = 0
                if (len(types) == 0):
                    continue
            movie_item['sources'] = sources
            if (movie_item['update_status']) == '':
                movie_item['update_status'] = sources[0]['types'][0]['name']
            # 视频已爬取且未更新
            if (is_need_source(movie_item, 'movie') == False):
                print(movie_id + ' 已爬取')
                continue
            yield movie_item
            self.total_valid = self.total_valid + 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total_valid) + ' 条数据，用时 ' + str(process_time) + 's')
