# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class GqytvSpider(scrapy.Spider):
    name = 'gqytv'
    allowed_domains = ['www.gqytv.com']
    start_urls = []
    domain = 'https://www.gqytv.com'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0
    page_size = 36
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
        super(GqytvSpider, self).__init__(name, **kwargs)
        url = self.domain + '/search.php?page=1&searchtype=5'
        print(url)
        self.start_urls.append(url)
        if (target == 'all'):
            # 获取电影总数
            orign_html = get_one_page(url)
            orign_html = etree.HTML(orign_html)
            start_page = 2
            self.total_page = (int)(get_str_from_xpath(orign_html.xpath('//ul[@class="stui-page text-center clearfix"]/li[last()]/a/@href')).split('&&')[0].split('page=')[1])
            for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                self.start_urls.append(self.domain + '/search.php?page='+(str)(page_index)+'&searchtype=5')
        elif (target == 'latest'):
            # 获取电影总数
            start_page = 2
            self.total_page = 1
            self.total = self.page_size * self.total_page
            if self.total % self.page_size != 0:
                self.total_page = self.total_page + 1
            for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                self.start_urls.append(self.domain + '/search.php?page=' + (str)(page_index) + '&searchtype=5')

    def parse(self, response):

        # 开始时间
        start = time.time()
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
        curr_page = url.split('?page=')[1].split('&')[0]

        # url：电影详情页
        count = -1
        for each in reverse_arr(response.xpath('//ul[@class="stui-vodlist clearfix"]/li')):
            self.index = self.index + 1
            count = count + 1
            movie_item = MovieItem()
            url2 = self.domain + each.xpath("./a").attrib['href']
            print(url2)
            movie_id = url2.split('.html')[0].split('num')[1]
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            # https://www.88ys.com/guochanju/202002/79916.html
            html = get_one_page(url2)
            html = etree.HTML(html)
            # /html/body/div[5]/div[1]/div/div
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/h2
            # /html/body/div[5]/div[1]/div/div/div[2]/div[2]/ul/li[1]/span
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/span
            each = html.xpath('//div[@class="stui-content col-pd clearfix"]')[0]
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./div/a/img/@data-original'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./div[2]/h3/text()'))
            movie_item['score'] = get_random_str()
            movie_item['nickname'] = movie_item['name']
            type2 = get_str_from_xpath(each.xpath('./div/p/a/text()'))
            if (is_exclude_type2(type2) == True):
                continue
            type2 = reverse_type2(type2)
            movie_item['type2'] = type2
            movie_item['type'] = get_type_from_type2(type2)
            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div/p/a[2]/text()')))
            movie_item['release_date'] = reverse_release_date(get_str_from_xpath(each.xpath('./div/p/a[3]/text()')))
            directors = each.xpath('./div/p[3]/a/text()')
            if (len(directors) > 0 and '/' in directors[0]):
                directors = directors[0].split('/')
            movie_item['directors'] = directors
            actors = each.xpath('./div/p[2]/a/text()')
            if (len(actors) > 0 and '/' in actors[0]):
                actors = actors[0].split('/')
            movie_item['actors'] = actors
            movie_item['language'] = '内详'
            movie_item['duration'] = ''
            movie_item['update_time'] = '暂无'
            movie_item['description'] = get_str_from_xpath(html.xpath('//div[@class="stui-content__desc"]/text()'))
            count = 1
            sources = []
            for each in html.xpath('//div[@id="playlist"]'):
                source_name = get_str_from_xpath(each.xpath('./div/h3/span/text()'))
                if (source_name == ''):
                    break
                source = {'name': source_name, 'types': []}
                types = []
                for each2 in each.xpath('./div[2]/div/ul/li'):
                    type = {'name': get_str_from_xpath(each2.xpath('./a/text()')), 'url': ''}
                    play_url_html = self.domain + get_str_from_xpath(each2.xpath('./a/@href'))
                    print(play_url_html)
                    try:
                        html2 = get_one_page(play_url_html)
                        html2 = etree.HTML(html2)
                    except:
                        continue
                    play_url_m3u8 = get_str_from_xpath(html2.xpath('//iframe/@src')).split('url=')[1]
                    type['url'] = play_url_m3u8
                    print('正在爬取 ' + curr_page + '/' + (str)(self.total_page) + ' ' + (str)(self.index) + '/' + (str)(
                        self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                source['types'] = types
                sources.append(source)
            movie_item['sources'] = sources
            # 跳过播放列表为空的视频并记录
            if (len(sources) == 0):
                continue
            movie_item['update_status'] = sources[0]['types'][len(sources[0]['types'])-1]['name']
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