# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class ZuidaSpider(scrapy.Spider):
    name = 'zuida'
    allowed_domains = ['www.zuidazy1.net']
    # start_urls = ['http://www.zuidazy1.net/']
    start_urls = []
    domain = 'http://www.zuidazy1.net'
    search_domain = 'https://www.xunleiyy.com/search.php'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
            super(ZuidaSpider, self).__init__(name, **kwargs)
            self.orign_url = self.domain + '/?m=vod-index-pg-'
            self.start_urls = [self.orign_url + '1.html']
            # 用于计算电影总数
            pattern4 = '[\s\S]*?<li><br/>本站共有影片：<strong>([\s\S]*?)</strong></li>[\s\S]*?'

            # 获取电影总数
            total = 0
            orign_html = get_one_page(self.start_urls[0])
            for total_count in parse_one_page(orign_html, pattern4):
                total = int(total_count)

            start_page = 2
            page_size = 50
            total_page = total // page_size
            if total_page % page_size != 0:
                total_page = total_page + 1
            for page_index in reverse_arr(range(start_page, total_page + 1)):
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

        # url：电影详情页
        index = 5
        count = -1
        if self.keyword is not None:
            index = 4
        for each in reverse_arr(response.xpath("/html/body/div[4]/ul")):
            count += 1
            if count == 0 or count == 51:
                continue
            url2 = each.xpath("./li/span[2]/a/@href").extract()[0]
            movie_id = url2.split('id-')[1].split('.html')[0]
            dic = {'id': movie_id}
            movie_server = db_utils.find(dic)
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            html = get_one_page(self.domain + url2)
            html = etree.HTML(html)
            each = html.xpath('/html/body/div[4]')[0]
            movie_item = MovieItem()
            movie_item['id'] = movie_id
            movie_item['src'] = (str)(each.xpath('./div[1]/div/div/div[1]/img/@src')[0])
            movie_item['name'] = (str)(each.xpath('./div[1]/div/div/div[2]/div[1]/h2/text()')[0])
            movie_item['update_status'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[1]/span/text()'))
            movie_item['score'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[1]/label/text()'))
            movie_item['nickname'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[1]/span/text()'))
            movie_item['directors'] = get_arr_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[2]/span/text()'))
            movie_item['actors'] = get_arr_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[3]/span/text()'))
            movie_item['type2'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[4]/span/text()'))
            type = get_type_from_type2(movie_item['type2'])
            if (is_exclude_type2(type2) == True):
                continue
            movie_item['region'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[5]/span/text()'))
            movie_item['language'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[6]/span/text()'))
            movie_item['release_date'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[7]/span/text()'))
            movie_item['duration'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[8]/span/text()'))
            movie_item['update_time'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[9]/span/text()'))
            movie_item['description'] = get_str_from_xpath(each.xpath('./div[1]/div/div/div[2]/div[2]/ul/li[14]/div/span[2]/text()'))
            sources = []
            for each2 in each.xpath('./div[4]/div[2]/div/div'):
                source = {'name': '', 'types': []}
                source['name'] = (str)(each2.xpath('./h3/span/text()')[0])
                types = []
                for each3 in each2.xpath('./ul/li'):
                    full_name = (str)(each3.xpath('./text()')[0])
                    type = {'name': '', 'url': ''}
                    type['name'] = full_name.split('$')[0]
                    type['url'] = full_name.split('$')[1]
                    print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                source['types'] = types
                sources.append(source)
            movie_item['sources'] = sources
            # 视频已爬取且未更新
            # 视频已爬取且未更新
            if (is_need_source(movie_item, 'movie') == False):
                print(movie_id + ' 已爬取')
                continue
            yield movie_item
            self.total += 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')
