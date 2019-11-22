# -*- coding: utf-8 -*-
import time

import numpy
import scrapy

from PocketLifeSpider.items import DramaItem
from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class DramaTypeSpider(scrapy.Spider):
    name = 'drama_type'
    allowed_domains = ['www.xiqu5.com']
    start_urls = ['http://www.xiqu5.com']
    orign_url = 'http://www.xiqu5.com'
    parse_orign_url = 'http://cz67k3.natappfree.cc'
    type = 'drama_type'

    def parse(self, response):
        # 判断当前数据是否爬取
        if check_spider_history(self.type, response.url) == True:
            pass
        collection = 'drama_type'
        dbutils = MongoDbUtils(collection)
        html = get_one_page(self.orign_url, 'gb2312')
        pattern = '[\s\S]*?<div class="acc2 ">([\s\S]*?)</div>'
        for row in parse_one_page(html, pattern):
            pattern2 = '[\s\S]*?<a href="([\s\S]*?)"[\s\S]*?>([\s\S]*?)</a>[\s\S]*?'
            for col in parse_one_page(row, pattern2):
                # 戏曲分类型地址
                url = self.orign_url + col[0]
                if '.html' not in url:
                    url = url + 'index.html'
                self.start_urls.append(url)
                # 戏曲类型名称
                drama_type_name = col[1]
                if 'font' in col[1]:
                    drama_type_name = col[1].split('>')[1].split('<')[0]
                dic = {'name': drama_type_name}
                if dbutils.find(dic).count() > 0:
                    print(drama_type_name + ' 已爬取')
                    continue
                dic = {'name': drama_type_name}
                dbutils.insert(dic)
                print(drama_type_name + ' -> 插入成功')
        # 写入爬取数据
        write_spider_history(self.type, response.url)