# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class Piece3Spider(scrapy.Spider):
    name = 'piece3'
    allowed_domains = ['www.xiaopin8.cc']
    start_urls = []
    origin_url = 'http://www.xiaopin8.cc'
    type = 'piece'
    # 电影总数
    total = 0
    target = None

    def __init__(self, target=None, name=None, **kwargs):
        super(Piece3Spider, self).__init__(name, **kwargs)
        type_list = ['new', 'chunwan', 'xiangsheng', 'weidianying']
        for type in type_list:
            self.start_urls.append(self.origin_url + '/' + type)

    def parse(self, response):

        # 开始时间
        start = time.time()

        collection = 'piece'
        db_util = MongoDbUtils(collection)

        start_page = 1
        url = response.url
        html = get_one_page(url)
        html = etree.HTML(html)
        total_page = (int)(get_str_from_xpath(html.xpath('//div[@class="page-nav"]/li[last()]/a/@href')).split('index_')[1].split(
            '.html')[0])
        if (self.target == 'latest'):
            total_page = 1
        for page_index in reverse_arr(range(start_page, total_page + 1)):
            if (page_index == 1):
                a2 = url
            else:
                a2 = url + '/index_' + (str)(page_index) + '.html'
            html = get_one_page(a2)
            html = etree.HTML(html)
            html_xpath = html.xpath('//ul[@class="article-list float"]')[0].xpath('./li')
            count = 0
            total = len(html_xpath)
            for li in reverse_arr(html_xpath):
                # 解析小品数据
                # ('http://www.xiaopin5.com/zhaobenshan/272.html', '闫光明、赵本山小品全集高清《狭路相逢》 2012公安部春晚', 'http://www.xiaopin5.com/uploads/allimg/130524/1_05240023404137.jpg', '《狭路相逢》')
                try:
                    count = count + 1
                    play_url = self.origin_url + get_str_from_xpath(li.xpath('./div/a[1]/@href'))
                    name = get_str_from_xpath(li.xpath('./p[1]/a/text()'))
                    src = self.origin_url + '/' + get_str_from_xpath(li.xpath('./div/a/img/@src'))
                    description = get_str_from_xpath(li.xpath('./div/a/@title'))
                    dic = {'drama_url': play_url}
                    find_piece = db_util.find(dic)
                    if find_piece.count() >= 1:
                        print(name + ' -> 已爬取')
                        continue
                    html = get_one_page(play_url)
                    html2 = etree.HTML(html)
                    play_id = get_str_from_xpath(html2.xpath('//div[@id="mobile_player"]/@data-address'))
                    if ('http' in play_id):
                        play_id = play_id.split('/')[-2]
                    # 获取当前小品的类型
                    type = get_str_from_xpath(html2.xpath('//div[@class="location"]/a[2]/text()'))
                    type2 = get_str_from_xpath(html2.xpath('//div[@class="location"]/a[3]/text()'))
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
                    self.total += 1
                    continue
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')