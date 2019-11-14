# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class Piece4Spider(scrapy.Spider):
    name = 'piece4'
    allowed_domains = ['www.xiaopin.tv']
    start_urls = []
    origin_url = 'http://www.xiaopin.tv'
    type = 'piece'
    # 电影总数
    total = 0
    target = None

    def __init__(self, target=None, name=None, **kwargs):
        super(Piece4Spider, self).__init__(name, **kwargs)
        self.target = target
        type_list = ['2', '1', '3', '14', '15']
        for type in type_list:
            self.start_urls.append(self.origin_url + '?cate=' + type)

    def parse(self, response):

        # 开始时间
        start = time.time()

        collection = 'piece'
        db_util = MongoDbUtils(collection)

        start_page = 1
        url = response.url
        total_page = 40
        if (self.target == 'latest'):
            total_page = 1
        for page_index in reverse_arr(range(start_page, total_page + 1)):
            if (page_index == 1):
                a2 = url
            else:
                a2 = url + '&page=' + (str)(page_index)
            print(a2)
            html = get_one_page(a2)
            if (html == None):
                continue
            html = etree.HTML(html)
            type = html.xpath('//div[@class="catecon"]/div/h3')[0].text.strip()
            html_xpath = html.xpath('//div[@class="catecon"]/ul/li')
            count = 0
            total = len(html_xpath)
            for li in reverse_arr(html_xpath):
                try:
                    # 解析小品数据
                    # ('http://www.xiaopin5.com/zhaobenshan/272.html', '闫光明、赵本山小品全集高清《狭路相逢》 2012公安部春晚', 'http://www.xiaopin5.com/uploads/allimg/130524/1_05240023404137.jpg', '《狭路相逢》')
                    count = count + 1
                    play_url = get_str_from_xpath(li.xpath('./div/a[1]/@href'))
                    description = get_str_from_xpath(li.xpath('./div[2]/a/text()'))
                    name = '《' + description.split('《')[1].split('》')[0] + '》'
                    src = get_str_from_xpath(li.xpath('./div/a/img/@src'))
                    dic = {'url': play_url}
                    find_piece = db_util.find(dic)
                    if find_piece.count() >= 1:
                        print(name + ' -> 已爬取')
                        continue
                    html = get_one_page(play_url)
                    html2 = etree.HTML(html)
                    play_id = get_str_from_xpath(html2.xpath('//iframe/@src')).split('embed/')[1]
                    if ('http' in play_id):
                        play_id = play_id.split('/')[-2]
                    # 获取当前小品的类型
                    html2 = html2.xpath('//div[@class="tags"]')
                    if (len(html2) == 0):
                        type2 = '其他'
                    else:
                        type2 = get_str_from_xpath(html2[0].xpath('./a[1]/text()'))
                    if len(type2) > 10:
                        # 当前小品没有第二种类型
                        type2 = ''
                    if (exclude_piece_type2(type2) == True):
                        continue
                    modify_piece_type(type, type2)
                    url2 = 'https://v.youku.com/v_show/id_' + play_id + '.html'
                    piece = {
                        'name': name,
                        'description': description,
                        'src': src,
                        'type': type,
                        'type2': type2,
                        'drama_url': play_url,
                        'url': url2,
                        'acquisition_time': get_current_time()
                    }
                    print('正在抓取 ' + type + ' ' + type2 + ' ' + (str)(page_index) + '/' + (str)(total_page) + ' ' + (str)(count) + '/' + (str)(total) + '  -> ' + type + ' ' + type2 + ' ' + piece['name'])
                    db_util.insert(piece)
                    self.total += 1
                except:
                    continue
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')