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
        pattern = '[\s\S]*?<ul class="categorys-items">([\s\S]*? )</ul>[\s\S]*?'
        count = 1
        for ul in parse_one_page(html, pattern):
            if count > 1:
                break
            pattern2 = '[\s\S]*?<a href="([\s\S]*?)">[\s\S]*?</a>'
            tmp_types = []
            for a in parse_one_page(ul, pattern2):
                html = get_one_page(a, encode='gbk')
                html2 = etree.HTML(html)
                if len(html2.xpath('/html/body/div/div[5]/div[1]/a')) == 2:
                    # 当前小品没有第二种类型
                    pattern = '[\s\S]*?<div class="location">[\s\S]*?</a>[\s\S]*?<a[\s\S]*?>([\s\S]*?)</a>[\s\S]*?'
                if len(html2.xpath('/html/body/div/div[5]/div[1]/a')) == 3:
                    # 当前小品有第二种类型
                    pattern = '[\s\S]*?<div class="location">[\s\S]*?</a>[\s\S]*?<a[\s\S]*?>([\s\S]*?)</a>[\s\S]*?<a[\s\S]*?>([\s\S]*?)</a>[\s\S]*?'
                # 获取当前小品的类型
                type = ''
                type2 = ''
                for a in parse_one_page(html, pattern):
                    type = ''
                    type2 = ''
                    if len(html2.xpath('/html/body/div/div[5]/div[1]/a')) == 2:
                        # 当前小品没有第二种类型
                        type = a
                        type2 = ''
                    if len(html2.xpath('/html/body/div/div[5]/div[1]/a')) == 3:
                        # 当前小品有第二种类型
                        type = a[0]
                        type2 = a[1]
                    tmp_type = {'type': type, 'type2': type2}
                    tmp_types.append(tmp_type)
                    print('正在解析 -> ' + type + ' ' + type2)
            count += 1

        # 获取小品第一种类型的集合
        tmp_piece_types = []
        for tmp_type in tmp_types:
            tmp_piece_type = {'name': tmp_type['type']}
            if tmp_piece_types.__contains__(tmp_piece_type) == False:
                tmp_piece_types.append(tmp_piece_type)
        print('小品第一种类型的集合获取成功')
        # 获取小品类型对象的集合
        piece_types = []
        for tmp_piece_type in tmp_piece_types:
            types = []
            for tmp_type in tmp_types:
                if tmp_type['type'] == tmp_piece_type['name']:
                    types.append(tmp_type['type2'])
            piece_type = {'name': tmp_piece_type['name'], 'types': types}
            piece_types.append(piece_type)
        db_util.insert(piece_types)
        print('获取小品类型对象的集合获取成功')
        # 写入爬取数据
        write_spider_history(self.type, response.url)
