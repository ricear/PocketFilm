# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils


class Piece2Spider(scrapy.Spider):
    name = 'piece2'
    allowed_domains = ['www.verity-china.com']
    start_urls = []
    actors_url = 'https://www.verity-china.com/actors'
    origin_url = 'https://www.verity-china.com'
    type = 'piece'
    a_name_lists = {}
    # 电影总数
    total = 0
    target = None

    def __init__(self, target=None, name=None, **kwargs):
        super(Piece2Spider, self).__init__(name, **kwargs)
        # 获取每类小品的根地址
        self.target = target
        html = get_one_page(self.actors_url)
        html = etree.HTML(html)
        count = 1
        for li in html.xpath('//ul[@class="list-unstyled list-inline"]/li'):
            # 判断当前数据是否爬取
            a = self.origin_url + get_str_from_xpath(li.xpath('./a/@href'))
            name = get_str_from_xpath(li.xpath('./a/text()'))
            self.a_name_lists[a] = name
            self.start_urls.append(a)
            print('已添加' + ' -> ' + name + ' ' + a)
            count += 1

    def parse(self, response):

        # 开始时间
        start = time.time()

        start_page = 1
        url = response.url

        # 判断小品类型
        type = '其他'
        type2 = self.a_name_lists.get(url)
        if (exclude_piece_type2(type2) == True):
            pass
        if len(type2) > 10:
            # 当前小品没有第二种类型
            type2 = ''
        modify_piece_type(type, type2)
        collection = 'piece_type'
        db_util = MongoDbUtils(collection)
        dic = {}
        flag = 0
        for tmp_type in db_util.find(dic):
            if (flag == 1):
                break
            tmp_type_name = tmp_type['name']
            for tmp_type2 in tmp_type['types']:
                if (tmp_type2 == tmp_type_name):
                    type = tmp_type_name
                    flag = 1
                    break
        if (flag == 0):
            # 当前小品类型不存在，将其更新到其他类型中
            dic = {'name': '其他'}
            tmp_types = []
            for tmp_type in db_util.find(dic).__getitem__(0)['types']:
                tmp_types.append(tmp_type)
            tmp_types.append(type2)
            dic = {'name': '其他'}
            new_dic = {'$set': {'types': tmp_types}}
            db_util.update(dic, new_dic)

        collection = 'piece'
        db_util = MongoDbUtils(collection)

        print(url)
        html = get_one_page(url)
        html = etree.HTML(html)
        total_page = (int)(get_str_from_xpath(html.xpath('//ul[@class="pagination"]/li[last()-1]/a/text()')))
        if (self.target == 'latest'):
            total_page = 1
        for page_index in reverse_arr(range(start_page, total_page + 1)):
            if (page_index == 1):
                a2 = url
            else:
                a2 = url + '?page=' + (str)(page_index)
            html = get_one_page(a2)
            html = etree.HTML(html)
            html_xpath = html.xpath('//li[@class="col-sm-1-5 col-xs-6"]')
            count2 = 0
            total2 = len(html_xpath)
            for li in html_xpath:
                # 解析小品数据
                # ('http://www.xiaopin5.com/zhaobenshan/272.html', '闫光明、赵本山小品全集高清《狭路相逢》 2012公安部春晚', 'http://www.xiaopin5.com/uploads/allimg/130524/1_05240023404137.jpg', '《狭路相逢》')
                count2 = count2 + 1
                play_url = self.origin_url + get_str_from_xpath(li.xpath('./a/@href'))
                title = get_str_from_xpath(li.xpath('./a/@title'))
                if ('《' in title):
                    name = '《' + get_str_from_xpath(li.xpath('./a/@title')).split('《')[1].split('》')[0] + '》'
                else:
                    name = title
                dic = {'drama_url': play_url}
                find_piece = db_util.find(dic)
                if find_piece.count() >= 1:
                    print(name + ' -> 已爬取')
                    continue
                html = get_one_page(play_url)
                html = etree.HTML(html)
                try:
                    url2 = 'https://v.youku.com/v_show/id_' + get_str_from_xpath(html.xpath('//*[@id="video-player"]/iframe/@src')).split('embed/')[1] + '.html'
                except:
                    continue
                src = get_str_from_xpath(li.xpath('./a/img/@src'))
                src = download_images(src)
                piece = {
                    'name': name,
                    'description': get_str_from_xpath(li.xpath('./a/@title')),
                    'src': src,
                    'type': type,
                    'type2': type2,
                    'drama_url': play_url,
                    'url': url2,
                    'acquisition_time': get_current_time()
                }
                print('正在抓取 ' + type + ' ' + type2 + ' ' + (str)(page_index) + '/' + (str)(total_page) + ' ' + (str)(
                    count2) + '/' + (str)(total2) + '  -> ' + type + ' ' + type2 + ' ' + piece['name'])
                db_util.insert(piece)
                self.total = self.total + 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')
