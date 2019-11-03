# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class YongjiuSpider(scrapy.Spider):
    name = 'yongjiu'
    allowed_domains = ['www.yongjiuzy.cc']
    start_urls = []
    domain = 'http://www.yongjiuzy.cc'
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
            super(YongjiuSpider, self).__init__(name, **kwargs)
            self.orign_url = self.domain + '/?m=vod-index-pg-'
            self.start_urls = [self.orign_url + '1.html']
            # 用于计算电影总数
            pattern4 = '[\s\S]*?<li><br/>本站共有影片：<strong>([\s\S]*?)</strong></li>[\s\S]*?'

            # 获取电影总数
            if (target == None):
                orign_html = get_one_page(self.start_urls[0])
                orign_html = etree.HTML(orign_html)
                self.total = (int)(get_str_from_xpath(orign_html.xpath('//div[@class="toplink"]/font/a[1]/font[1]/text()')))
                start_page = 2
                self.total_page = self.total // self.page_size
                if self.total % self.page_size != 0:
                    self.total_page = self.total_page + 1
                for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                    self.start_urls.append(self.orign_url + str(page_index) + '.html')
            elif (target == 'latest'):
                start_page = 2
                self.total_page = 1
                self.total = self.page_size * self.total_page
                for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                    self.start_urls.append(self.orign_url + str(page_index) + '.html')

    def parse(self, response):

        # 判断当前数据是否爬取
        if check_spider_history(self.type, response.url) == True:
            pass
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
        for each in reverse_arr(response.xpath('//*[@id="data_list"]/tr')):
            self.index = self.index + 1
            count = count + 1
            if count == 0 or count == 51:
                continue
            url2 = each.xpath("./td[1]/a/@href").extract()[0]
            movie_id = url2.split('id-')[1].split('.html')[0]
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            html = get_one_page(self.domain + url2)
            html = etree.HTML(html)
            each = html.xpath('//div[@class="contentMain"]')[0]
            movie_item = MovieItem()
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./div/img/@src'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./div[2]/li[1]/text()[2]'))
            movie_item['update_status'] = get_str_from_xpath(each.xpath('./div[2]/li[3]/text()[2]'))
            movie_item['score'] = get_str_from_xpath(each.xpath('./div[2]/li[9]/div[2]/text()[2]'))
            movie_item['nickname'] = get_str_from_xpath(each.xpath('./div[2]/li[2]/text()[2]'))
            movie_item['directors'] = get_str_from_xpath(each.xpath('./div[2]/li[5]/text()[2]')).split(',')
            movie_item['actors'] = get_str_from_xpath(each.xpath('./div[2]/li[4]/text()[2]')).split(',')
            type2 = get_str_from_xpath(each.xpath('./div[2]/li[6]/div[1]/text()[2]'))
            type = get_type_from_type2(type2)
            if (is_exclude_type2(type2) == True):
                continue
            if (type == '综艺' or type == '动漫'):
                if (type2.endswith('片') == False):
                    type2 = type2 + '片'
            movie_item['type2'] = reverse_type2(type2)
            movie_item['type'] = type
            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[2]/li[7]/div[2]/text()[2]')))
            movie_item['language'] = get_str_from_xpath(each.xpath('./div[2]/li[7]/div[1]/text()[2]'))
            movie_item['release_date'] = reverse_release_date(get_str_from_xpath(each.xpath('./div[2]/li[8]/div[2]/text()[2]')))
            movie_item['duration'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[8]/span/text()'))
            movie_item['update_time'] = reverse_update_time(get_str_from_xpath(each.xpath('./div[2]/li[9]/div[1]/text()[2]')))
            movie_item['description'] = get_str_from_xpath(html.xpath('/html/body/div[5]/div/div/p[2]/text()'))
            sources = []
            flag = 0
            count = 1
            for each2 in html.xpath('//div[@class="movievod"]/ul/li'):
                if (len(each2.xpath('./input')) == 0):
                    source = {'name': '', 'types': []}
                    source['name'] = get_str_from_xpath(each2.xpath('./text()'))
                    types = []
                    flag = flag + 1
                    continue
                full_name = get_str_from_xpath(each2.xpath('./input/@value'))
                if (flag % 2 == 0 or '$' not in full_name):
                    source['types'] = types
                    sources.append(source)
                    break
                print(full_name)
                type = {'name': '', 'url': ''}
                type['name'] = full_name.split('$')[0]
                type['url'] = full_name.split('$')[1]
                print('正在爬取 ' + curr_page + '/' + (str)(self.total_page) + ' ' + (str)(self.index) + '/' + (str)(
                    self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                types.append(type)
                count = count + 1
            movie_item['sources'] = sources
            # 跳过播放列表为空的视频并记录
            flag = 0
            if (len(types) == 0):
                continue
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