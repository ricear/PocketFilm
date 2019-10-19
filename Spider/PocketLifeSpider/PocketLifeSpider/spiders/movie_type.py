# -*- coding: utf-8 -*-
import time

import scrapy

# 影视类型爬虫
from PocketLifeSpider.items import MovieTypeItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

# 影视类型爬虫
class MovieTypeSpider(scrapy.Spider):

    name = 'movie_type'
    allowed_domains = ['www.xunleiyy.com/type/id1.html']
    start_urls = ['https://www.xunleiyy.com/type/id1.html']
    type = 'movie_type'

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.MovieTypeSpiderPipeline': 300,
        }
    }

    def parse(self, response):
        # 判断当前数据是否爬取
        if check_spider_history(self.type, response.url) == True:
            pass
        # 开始时间
        start = time.time()
        # 电影类别数
        total_type = 0
        # 电影类别名称数
        total_names = 0
        for each in response.xpath("//div[@class='s_index']/dl"):
            type = each.xpath("./dt/text()").extract()[0][2:]
            print('正在抓取 ' + type)
            collection = 'movie_type'
            db_utils = MongoDbUtils(collection)
            dic = {'type': type}
            data = db_utils.find(dic)
            names_temp = []
            for item in data:
                names_temp.append(item)
            movie_type_item = MovieTypeItem()
            movie_type_item['type'] = type
            names = []
            for each2 in each.xpath("./dd/a"):
                name = each2.xpath('./text()').extract()[0]
                if (len(names_temp) > 0) and (name in names_temp[0]['names']):
                    print(name + ' 已抓取')
                    continue
                names.append(name)
                total_names += 1
            if names != []:
                movie_type_item['names'] = names
                total_type += 1
                yield movie_type_item
        # 写入爬取数据
        write_spider_history(self.type, response.url)
        # 结束时间
        end = time.time()
        process_time = end - start
        print('共爬取 ' + str(total_type) + ' 种类别，共 ' + str(total_names) + ' 种数据，用时 ' + str(process_time) + 's')

