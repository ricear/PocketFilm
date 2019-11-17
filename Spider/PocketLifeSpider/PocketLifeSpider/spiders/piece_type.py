# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class PieceTypeSpider(scrapy.Spider):
    name = 'piece_type'
    allowed_domains = ['www.xiaopin5.com']
    start_urls = ['http://www.xiaopin5.com/']
    origin_url = 'http://www.xiaopin5.com/'
    type = 'piece_type'

    def parse(self, response):
        # 判断当前数据是否爬取
        if check_spider_history(self.type, response.url) == True:
            pass
        collection = 'piece_type'
        db_util = MongoDbUtils(collection)
        url = response.url

        # 获取每类小品的根地址
        html = get_one_page(url, encode='gbk')
        html = etree.HTML(html)
        count = 1
        for li in html.xpath('/html/body/div[1]/div[3]/div[2]/ul[1]/li'):
            type = get_str_from_xpath(li.xpath('./a/text()')).replace(' ', '').split(':')[0]
            for a in html.xpath('/html/body/div[1]/div[3]/div[2]/ul[2]/li['+(str)(count)+']/a'):
                type2 = get_str_from_xpath(a.xpath('./text()'))
                if (exclude_piece_type2(type2) == True):
                    continue
                if (type2 == ''):
                    type2 = get_str_from_xpath(a.xpath('./span/strong/text()'))
                print(type + ' ' + type2)
                modify_piece_type(type, type2)
            count = count + 1
        # 获取小品第一种类型的集合
        print('获取小品类型对象的集合获取成功')
