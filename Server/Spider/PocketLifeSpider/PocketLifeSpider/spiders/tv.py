# -*- coding: utf-8 -*-
import time

import scrapy
from lxml import etree
from selenium import webdriver

from PocketLifeSpider.items import *
from PocketLifeSpider.util.CommonUtils import *

# 电视爬虫
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


# 删除电视资源
def remove_tv(name):
    collection = 'tv'
    db_utils = MongoDbUtils(collection)
    dict = {'name': name}
    db_utils.delete(dict)


class TvSpider(scrapy.Spider):
    name = 'tv'
    allowed_domains = ['www.haoqu.net']
    orign_url = 'http://www.haoqu.net'
    list_origin_url = orign_url + '/zhibo'
    start_urls = []
    search_domain = 'http://www.icantv.cn/search.php'
    # 搜索关键词
    keyword = None
    type = 'tv'
    # 电影总数
    total = 0

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
        super(TvSpider, self).__init__(name, **kwargs)

        # 获取分类电视地址
        html = get_one_page(self.list_origin_url)
        html = etree.HTML(html)
        for each in html.xpath("//*[@id='bd']/div[1]/div[2]/dl[1]/dd[1]/ul/li"):
            url = self.orign_url + get_str_from_xpath(each.xpath('./a/@href'))
            self.start_urls.append(url)
        self.start_urls.append(self.orign_url + '/2/')
        self.start_urls.append(self.orign_url + '/4/')
        self.start_urls.append(self.orign_url + '/5/')

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.TvSpiderPipeline': 300,
        }
    }

    def parse(self, response):

        # 开始时间
        start = time.time()

        # 获取所有电影的 id，用于判断电影是否已经爬取
        collection = 'tv'
        db_utils = MongoDbUtils(collection)
        dict = [{}, {'name': 1}]
        data = db_utils.find(dict)
        tv_names = []
        for tv_name in data:
            tv_names.append(tv_name['name'])
        url = response.url
        html = get_one_page(url, encode="gb2312")
        html = etree.HTML(html)

        #   解析电视列表
        if (url == self.orign_url + '/4/'):
            #   港澳台
            for each in html.xpath("//*[@id='bd']/div[3]/div[1]/div/div/div/div"):
                type = get_str_from_xpath(each.xpath('./h3/text()')) + '台'
                for each2 in each.xpath("./ul/li"):
                    tv_item = TvItem()
                    tv_item['src'] = get_str_from_xpath(each2.xpath('./a/img/@src'))
                    tv_item['name'] = get_str_from_xpath(each2.xpath('./a/span/strong/text()'))
                    url = self.orign_url + get_str_from_xpath(each2.xpath("./a/@href"))

                    # 解析电视详情
                    html = get_one_page(url, encode="gb2312")
                    html = etree.HTML(html)
                    tv_item['type'] = reverse_tv_type(type)
                    dic = {'name': tv_item['name']}
                    if db_utils.find(dic).count() > 0:
                        print(tv_item['name'] + ' 已抓取')
                        continue
                    tv_item['introduction'] = '\n'.join(
                        html.xpath('//*[@id="bd"]/div[3]/div[1]/div/div[2]/div[2]/div/p/text()'))
                    sources = []
                    tmp_tv_source_index = 1
                    for tmp_tv_source in html.xpath('//*[@id="bd"]/div[3]/div[1]/div/div[1]/div/div[1]/ul/li'):
                        type_id = get_str_from_xpath(tmp_tv_source.xpath('./@data-player'))
                        tmp_tv_source_name = get_str_from_xpath(tmp_tv_source.xpath('./span/text()'))
                        url = 'http://www.haoqu.net/e/extend/tv.php?id=' + type_id
                        html = get_one_page(url, encode='gbk')
                        pattern = '[\s\S]*?signal =([\s\S]*?);'
                        for str in parse_one_page(html, pattern):
                            source_url = str.split("'")[1].split('$')[1]
                        source = {'name': tmp_tv_source_name, 'url': source_url}
                        sources.append(source)
                        print('正在抓取 -> ' + tv_item['name'] + ' ' + source['name'] + ' ' + source['url'])
                        tmp_tv_source_index = tmp_tv_source_index + 1
                    # 过滤掉没有资源的电视数据
                    if (sources == []):
                        continue
                    tv_item['sources'] = sources
                    yield tv_item
                    self.total += 1
        else:
            #   不是港澳台
            for each2 in html.xpath("//*[@id='bd']/div[3]/div[1]/div/div/div/div/ul/li"):
                tv_item = TvItem()
                tv_item['src'] = get_str_from_xpath(each2.xpath('./a/img/@src'))
                tv_item['name'] = get_str_from_xpath(each2.xpath('./a/span/strong/text()'))
                url = self.orign_url + get_str_from_xpath(each2.xpath("./a/@href"))
                print(url)

                # 解析电视详情
                html = get_one_page(url, encode="gb2312")
                try:
                    html = etree.HTML(html)
                except:
                    # 记录跳过的视频信息
                    history_type = 'tv'
                    history_url = url
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                type = get_str_from_xpath(html.xpath('//*[@id="bd"]/div[1]/div/a[2]/text()'))
                if ('省级' in type): type = get_str_from_xpath(html.xpath('//*[@id="bd"]/div[1]/div/a[3]/text()')) + '台'
                tv_item['type'] = reverse_tv_type(type)
                dic = {'name': tv_item['name']}
                if db_utils.find(dic).count() > 0:
                    print(tv_item['name'] + ' 已抓取')
                    continue
                tv_item['introduction'] = '\n'.join(
                    html.xpath('//*[@id="bd"]/div[3]/div[1]/div/div[2]/div[2]/div/p/text()'))
                sources = []
                tmp_tv_source_index = 1
                for tmp_tv_source in html.xpath('//*[@id="bd"]/div[3]/div[1]/div/div[1]/div/div[1]/ul/li'):
                    type_id = get_str_from_xpath(tmp_tv_source.xpath('./@data-player'))
                    tmp_tv_source_name = get_str_from_xpath(tmp_tv_source.xpath('./span/text()'))
                    url = 'http://www.haoqu.net/e/extend/tv.php?id=' + type_id
                    html = get_one_page(url, encode='gbk')
                    pattern = '[\s\S]*?signal =([\s\S]*?);'
                    for str in parse_one_page(html, pattern):
                        source_url = str.split("'")[1].split('$')[1]
                    source = {'name': tmp_tv_source_name, 'url': source_url}
                    sources.append(source)
                    print('正在抓取 -> ' + tv_item['name'] + ' ' + source['name'] + ' ' + source['url'])
                    tmp_tv_source_index = tmp_tv_source_index + 1
                # 过滤掉没有资源的电视数据
                if (sources == []):
                    continue
                tv_item['sources'] = sources
                yield tv_item
                self.total += 1

        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')
