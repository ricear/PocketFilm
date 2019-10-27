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
        if (target is None):
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

    def parse(self, response):

        # 开始时间
        start = time.time()

        page_size = 24
        html = get_one_page(response.url, 'gb2312')
        pattern3 = '[\s\S]*?<div id="page" class="bord mtop">[\s\S]*?共([\s\S]*?)部[\s\S]*?'
        total = 0
        for total2 in parse_one_page(html, pattern3):
            total = (int)(total2)
        total_page = total / page_size
        if (self.target == 'latest'):
            total_page = 6
        if total % page_size != 0:
            total_page += 1
        if (self.target == 'latest'):
            total_page = 6
        url_list = []
        if (self.target is None):
            for index in numpy.arange(1, total_page + 1, 1):
                drama_type_url = response.url
                if 'index.html' in response.url:
                    url = drama_type_url
                else:
                    if '.html' not in response.url:
                        url = response.url + 'index.html'
                if index != 1:
                    url = url.split('.html')[0] + (str)((int)(index)) + '.html'
                    url_list.append(url)
        elif (self.target == 'history'):
            url_list = get_spider_history(self.type)
        for url in url_list:
            html = get_one_page(url.split('\n')[0], 'gb2312')
            pattern3 = '[\s\S]*?<div class="content bord mtop">[\s\S]*?([\s\S]*?)</div>'
            for div in parse_one_page(html, pattern3):
                pattern4 = '[\s\S]*?<li>[\s\S]*?<a href="([\s\S]*?)"[\s\S]*?src="([\s\S]*?)"[\s\S]*?title="([\s\S]*?)"[\s\S]*?说明：([\s\S]*?)</p>[\s\S]*?频道：([\s\S]*?)</p>[\s\S]*?更新：([\s\S]*?)</p>[\s\S]*?简介：([\s\S]*?)</p>[\s\S]*?</li>'
                for drama in parse_one_page(div, pattern4):
                    dramaItem = DramaItem()
                    # ('148451', '京剧锁五龙孟广禄主演', '未知', '京剧', '2019/4/25 14:32:11', '京剧锁五龙孟广禄主演详情请观看该戏曲，谢谢光临')
                    id = drama[0]
                    # http://www.xiqu5.com/jj/index2.html
                    drama_url = url.split('.html')[0].split('index')[0] + id
                    dic = {'id': id}
                    find_drama = self.dbutils.find(dic)
                    source_exists = False
                    print(url)
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
                        dramaItem['src'] = drama[1]
                        dramaItem['name'] = drama[2]
                        dramaItem['description'] = drama[3]
                        dramaItem['type'] = drama[4]
                        dramaItem['update_time'] = reverse_update_time(drama[5])
                        dramaItem['introduction'] = drama[6]
                        type_name = drama_url.split('/')[3]
                    if source_exists == True:
                        continue
                    # 戏曲源没有抓取
                    html = get_one_page(drama_url, 'gb2312')
                    pattern = '[\s\S]*?戏曲说明：([\s\S]*?)</span>[\s\S]*?播放时长：<em>([\s\S]*?)</em>'
                    # 解析资源种类
                    for drama2 in parse_one_page(html, pattern):
                        print('正在解析戏曲信息 -> ' + id)
                        dramaItem['drama_description'] = drama2[0]
                        dramaItem['play_time'] = drama2[1]
                        print(id + ' -> 戏曲说明:' + dramaItem['drama_description'] + ' 播放时长:' + dramaItem['play_time'])
                        pattern = '<div class="bord demand mtop">[\s\S]*?</h3>([\s\S]*?)<div class="clear"></div>'
                    sources = []
                    count_source = 1
                    # 解析类型种类
                    for source_html in parse_one_page(html, pattern):
                        if count_source > 1:
                            break
                        types = []
                        pattern = '[\s\S]*?<a [\s\S]*? href="([\s\S]*?)" title="([\s\S]*?)">[\s\S]*?</a>'
                        for type in parse_one_page(source_html, pattern):
                            type_html = type[0]
                            type_name = type[1]
                            html = get_one_page(drama_url + '/' + type_html)
                            pattern = '[\s\S]*?var arr2 = [\s\S]*?"([\s\S]*?).youku'
                            # 解析播放地址
                            type_id = ''
                            for t_id in parse_one_page(html, pattern):
                                type_id = t_id
                            url2 = 'https://v.youku.com/v_show/id_' + type_id + '.html'
                            type = {'name': type_name, 'url': url2}
                            types.append(type)
                        source = {'types': types}
                        sources.append(source)
                        count_source += 1
                    dramaItem['sources'] = sources
                    dramaItem['acquisition_time'] = get_current_time()
                    dic = {'id': id}
                    try:
                        print('正在插入 -> 类型:' + type_name + ' 当前页:' + (str)((int)(index)) + ' 总页数:' + (str)(
                            (int)(total_page)) + ' 戏曲id:' + id + ' 戏曲名称:' + dramaItem['name'])
                    except:
                        # 记录跳过的视频信息
                        history_type = 'drama'
                        history_url = drama_url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                        continue
                    self.dbutils.insert(dict(dramaItem))
                    print(id + ' -> 信息插入完成')
                    self.total += 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')