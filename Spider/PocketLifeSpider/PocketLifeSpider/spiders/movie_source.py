# -*- coding: utf-8 -*-
import re
import sys
import time

import requests
import scrapy

# 根据 url 获取一个页面的信息
from lxml import etree

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

# 影视资源爬虫
class MovieSourceSpider(scrapy.Spider):
    name = 'movie_source'
    allowed_domains = ['https://www.xunleiyy.com/type']
    domain = 'https://www.xunleiyy.com'
    search_domain = 'https://www.xunleiyy.com/search.php'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
        super(MovieSourceSpider, self).__init__(name, **kwargs)
        if keyword is not None:
            # 搜索指定影视
            self.keyword = keyword
            first_search_url = self.search_domain + '?page=1&searchword=' + keyword
            self.start_urls.append(first_search_url)
            # 用于计算电影总数
            pattern4 = '[\s\S]*?<span>共([\s\S]*?)条数据[\s\S]*?'

            # 获取电影总数
            total = 0
            orign_html = get_one_page(self.start_urls[0])
            while orign_html is None:
                orign_html = get_one_page(self.start_urls[0])
            for total_count in parse_one_page(orign_html, pattern4):
                total = int(total_count)

            start_page = 2
            page_size = 20
            total_page = total // page_size
            if total_page % page_size != 0:
                total_page = total_page + 1
            for page_index in range(start_page, total_page + 1):
                self.start_urls.append(self.search_domain + '?page=' + page_index + '&searchword=' + keyword)
        else:
            # 搜索全部影视
            self.orign_url = self.domain + '/type/id' + str(target)
            self.start_urls = [self.orign_url + '.html']
            # 用于计算电影总数
            pattern4 = '[\s\S]*?<span>共([\s\S]*?)条数据[\s\S]*?'

            # 获取电影总数
            total = 0
            orign_html = get_one_page(self.start_urls[0])
            for total_count in parse_one_page(orign_html, pattern4):
                total = int(total_count)

            start_page = 2
            page_size = 20
            total_page = total // page_size
            if total_page % page_size != 0:
                total_page = total_page + 1
            for page_index in range(start_page, total_page + 1):
                self.start_urls.append(self.orign_url + '-' + str(page_index) + '.html')

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.MovieSourceSpiderPipeline': 300,
        }
    }

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
            movie_ids.append(movie_id['id'][0])

        url = response.url
        print('当前页面：' + url)

        # url：电影详情页
        url2 = 'https://www.xunleiyy.com/movie/'
        index = 5
        if self.keyword is not None:
            index = 4
        for each in response.xpath("/html/body/div[" + (str)(index) + "]/ul/li"):
            movie_id = each.xpath("./div[1]/a[1]/@href").extract()[0][7:-5]
            # 如果当前电影信息应爬取，则跳过当前电影
            if movie_id in movie_ids:
                print(movie_id + ' 已爬取')
                continue
            else:
                # id, src, name, update_time, actors, type, score, release_date, description
                # 解析视频源
                html = get_one_page(url2 + movie_id + '.html')
                while html is None:
                    html = get_one_page(url2 + movie_id + '.html')
                html = etree.HTML(html)
                movie_item = MovieItem()
                movie_item['id'] = movie_id
                # 获取影视播放资源
                sources = []
                for each2 in html.xpath("//div[@class='p_list']"):
                    # 去除不是影视源的部分
                    if len(each2.xpath("./div[@class='p_list_02']")) == 0:
                        continue
                    name = each2.xpath("./div[1]/h3/text()")[0]
                    types = []
                    for each3 in each2.xpath("./div[2]/li"):
                        url_temp = each3.xpath("./a/@href")[0]
                        name2 = each3.xpath("./a/text()")[0]
                        html = get_one_page(self.domain + url_temp)
                        url = driver.execute_script('return parent.now')
                        type = {
                            'name': name2,
                            'url': url
                        }
                        print('正在爬取 -> ' + movie_id + ' ' + name + ' ' + name2)
                        types.append(type)
                    source = {
                        'name': name,
                        'types': types
                    }
                    sources.append(source)
                movie_item['sources'] = sources
                yield movie_item
            self.total += 1
            # 结束时间
            end = time.time()
            process_time = end - start
            print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')

        # 释放资源
        driver.close()
        # 写入爬取数据
        write_spider_history(self.type, response.url)