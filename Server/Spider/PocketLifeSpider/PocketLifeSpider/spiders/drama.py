# -*- coding: utf-8 -*-
import time
from urllib import parse

import numpy
import redis
import scrapy
from selenium.webdriver.support.wait import WebDriverWait

from PocketLifeSpider.items import DramaItem
from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class DramaSpider(scrapy.Spider):
    name = 'drama'
    allowed_domains = ['www.xiqu5.com']
    start_urls = []
    orign_url = 'http://www.xiqu5.com'
    parse_orign_url = 'https://pocket.mynatapp.cc'
    collection = 'drama'
    dbutils = MongoDbUtils(collection)
    search_domain = 'http://www.xiqu5.com/search.asp'
    # 搜索关键词
    target = None
    type = 'drama'
    # 电影总数
    total = 0

    def __init__(self, target=None, name=None, **kwargs):
        super(DramaSpider, self).__init__(name, **kwargs)
        self.target = target
        html = get_one_page(self.orign_url, 'gb2312')
        html = etree.HTML(html)
        for a in html.xpath('//div[@class="acc2 "]/div/a/@href'):
            a = self.orign_url + (str)(a)
            if '.html' not in a:
                a = a + 'index.html'
            self.start_urls.append(a)

    def parse(self, response):

        # 开始时间
        start = time.time()

        page_size = 24
        html = get_one_page(response.url, 'gb2312')
        html = etree.HTML(html)
        total = (int)(get_str_from_xpath(html.xpath('//*[@id="page"]/text()')).split('共')[1].split('部')[0])
        total_page = total / page_size
        if total % page_size != 0:
            total_page += 1
        if (self.target == 'latest'):
            total_page = 1
        for index in reverse_arr(numpy.arange(1, total_page + 1, 1)):
            try:
                drama_type_url = response.url
                if 'index.html' in response.url:
                    url = drama_type_url
                else:
                    if '.html' not in response.url:
                        url = response.url + 'index.html'
                if index != 1:
                    url = url.split('.html')[0] + (str)((int)(index)) + '.html'
                print(url)
                html = get_one_page(url.split('\n')[0], 'gb2312')
                html = etree.HTML(html)
            except:
                continue
            for div in reverse_arr(html.xpath('//div[@class="content bord mtop"]/ul/li')):
                try:
                    dramaItem = DramaItem()
                    # ('148451', '京剧锁五龙孟广禄主演', '未知', '京剧', '2019/4/25 14:32:11', '京剧锁五龙孟广禄主演详情请观看该戏曲，谢谢光临')
                    id = get_str_from_xpath(div.xpath('./a/@href'))
                    # http://www.xiqu5.com/jj/index2.html
                    drama_url = url.split('.html')[0].split('index')[0] + id
                    dic = {'id': id}
                    find_drama = self.dbutils.find(dic)
                    source_exists = False
                    print(drama_url)
                    if find_drama.count() >= 1:
                        for tmp_drama in find_drama:
                            if len(tmp_drama['sources']) == 0:
                                print(id + ' ->已插入，戏曲源未抓取')
                            else:
                                print(id + ' ->已插入，戏曲源已抓取')
                                source_exists = True
                            break
                    else:
                        dramaItem['id'] = id
                        dramaItem['src'] = get_str_from_xpath(div.xpath('./a/img/@src'))
                        dramaItem['name'] = get_str_from_xpath(div.xpath('./h5/a/@title'))
                        dramaItem['description'] = get_str_from_xpath(div.xpath('./p[1]/text()')).split('：')[1]
                        dramaItem['type'] = get_str_from_xpath(div.xpath('./p[2]/text()')).split('：')[1]
                        dramaItem['update_time'] = get_str_from_xpath(div.xpath('./p[3]/text()')).split('：')[1]
                        dramaItem['introduction'] = get_str_from_xpath(div.xpath('./p[4]/text()')).split('：')[1]
                        type_name = drama_url.split('/')[3]
                    if source_exists == True:
                        continue
                    # 戏曲源没有抓取
                    html = get_one_page(drama_url, 'gb2312')
                    html = etree.HTML(html)
                    # 解析资源种类
                    print('正在解析戏曲信息 -> ' + id)
                    dramaItem['drama_description'] = get_str_from_xpath(html.xpath('//*[@id="alrum"]/div[1]/div[1]/div[2]/span/text()')).split('：')[1]
                    dramaItem['play_time'] = get_str_from_xpath(html.xpath('//*[@id="alrum"]/div[1]/div[1]/div[2]/span[6]/em/text()'))
                    print(id + ' -> 戏曲说明:' + dramaItem['drama_description'] + ' 播放时长:' + dramaItem['play_time'])
                    sources = []
                    # 解析类型种类
                    for source_html in html.xpath('//div[@class="bord demand mtop"]'):
                        source_name = get_str_from_xpath(source_html.xpath('./h3/font/text()'))
                        types = []
                        for type in source_html.xpath('./div[1]/a'):
                            type_html = drama_url + '/' + get_str_from_xpath(type.xpath('./@href'))
                            type_name = get_str_from_xpath(type.xpath('./text()'))
                            html = get_one_page(type_html)
                            html = etree.HTML(html)
                            # 解析播放地址
                            type_id = (str)(html.xpath('//*[@id="alrum"]/div[1]/div[2]/script[1]/text()')[0]).split('"')[1].split('.youku')[0]
                            url2 = 'https://v.youku.com/v_show/id_' + type_id + '.html'
                            type = {'name': type_name, 'url': url2}
                            types.append(type)
                        source = {'name': source_name, 'types': types}
                        sources.append(source)
                    dramaItem['sources'] = sources
                    dramaItem['acquisition_time'] = get_current_time()
                    dramaItem['drama_url'] = drama_url
                    print('正在插入 -> 类型:' + type_name + ' 当前页:' + (str)((int)(index)) + ' 总页数:' + (str)(
                        (int)(total_page)) + ' 戏曲id:' + id + ' 戏曲名称:' + dramaItem['name'])
                    self.dbutils.insert(dict(dramaItem))
                    print(id + ' -> 信息插入完成')
                    self.total += 1
                except:
                    continue
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')