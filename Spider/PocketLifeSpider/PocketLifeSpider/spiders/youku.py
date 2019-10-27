# -*- coding: utf-8 -*-
import scrapy
from selenium.webdriver import ActionChains

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *


class YoukuSpider(scrapy.Spider):
    name = 'youku'
    allowed_domains = ['list.youku.com']
    curr_year = '2019'
    start_urls = []
    domain = 'http://list.youku.com'

    # 影视类型数字列表
    type_num_list = ['96', '97', '85', '100', '177']
    for tmp_type_num in type_num_list:
        start_urls.append('https://list.youku.com/category/page?c='+tmp_type_num+'&type=show&p=1')
    # 数字与影视类型对应关系
    type_dic = {'96': '电影', '97': '电视剧', '85': '综艺', '100': '动漫', '177': '少儿'}
    # 数字与影视后缀对应关系
    type_suffix_dic = {'96': '片', '97': '剧', '85': '片', '100': '片', '177': '片'}

    # 电影总数
    pageSize = 84
    totalPage = 100
    total = pageSize * totalPage * len(start_urls)
    total_valid = 0
    index = 0
    target = None

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, name=None, **kwargs):
        super(YoukuSpider, self).__init__(name, **kwargs)
        self.target = target
        if (self.target == 'latest'):
            self.totalPage = 1
            self.total = self.totalPage * self.pageSize * len(self.start_urls)

    def parse(self, response):

        # 开始时间
        start = time.time()

        # 获取 web 驱动
        driver = get_driver()

        # 获取所有电影的 id，用于判断电影是否已经爬取
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        dict = [{'sources': {'$elemMatch': {'$ne': []}}}, {'id': 1}]
        data = db_utils.find(dict)
        movie_ids = []
        for movie_id in data:
            movie_ids.append(movie_id['id'])

        # 获取影视类型
        origin_url = response.url
        # 影视类型对应数字
        type_num = origin_url.split('c=')[1].split('&')[0]
        # 影视类型
        movie_type = self.type_dic.get(type_num)
        # 影视后缀
        type_suffix = self.type_suffix_dic.get(type_num)


        # 生成视频列表地址
        for i in reverse_arr(range(1, self.totalPage + 1)):
            url = origin_url.split('p=')[0] + 'p=' + str(i)
            print(url)
            response = get_response(url)
            if (len(response.json()['data']) == 0):
                self.index = self.index + self.pageSize
            # 解析视频列表
            for list in reverse_arr(response.json()['data']):
                self.index = self.index + 1
                movie_item = MovieItem()
                movie_item['src'] = list['img']
                movie_item['name'] = list['title']
                movie_item['update_status'] = list['summary']
                # 视频已爬取且未更新
                dic = {'name': movie_item['name']}
                movie_server = db_utils.find(dic)
                # 解析视频详情
                videoLink = 'https:' + list['videoLink']
                html = get_one_page(videoLink)
                html = etree.HTML(html)
                detail_url = 'https:' + get_str_from_xpath(html.xpath('//div[@class="tvinfo"]/h2/a/@href')).split('?')[0]
                print(videoLink + ' ' + detail_url)
                if (detail_url == 'https:'):
                    # 记录跳过的视频信息
                    history_type = 'youku'
                    history_url = videoLink
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                try:
                    movie_id = detail_url.split('.html')[0].split('show/')[1]
                except:
                    # 记录跳过的视频信息
                    history_type = 'youku'
                    history_url = videoLink
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                movie_item['id'] = movie_id
                html = get_one_page(detail_url)
                html = etree.HTML(html)
                movie_detail_xpath = html.xpath('/html/body/div[2]/div/div[1]/div[2]/div[2]/ul')[0]
                nick_name = get_str_from_xpath(movie_detail_xpath.xpath('./li[@class="p-alias"]/text()'))
                if (nick_name == ''):
                    nick_name = movie_item['name']
                else:
                   nick_name = nick_name.split('：')[1]
                movie_item['nickname'] = nick_name
                release_date = get_str_from_xpath(movie_detail_xpath.xpath('./li/span[@class="pub"]/text()')).split('-')[0]
                movie_item['release_date'] = reverse_release_date(release_date)
                score_origin = get_str_from_xpath(movie_detail_xpath.xpath('./li[@class="p-score"]/span[2]/text()'))
                if (score_origin == ''): score = get_random_str()
                else: score = score_origin
                movie_item['score'] = score
                actors = get_arr_from_xpath(movie_detail_xpath.xpath('./li[text()="主演："]/a/text()'))
                movie_item['actors'] = actors
                directors = get_arr_from_xpath(movie_detail_xpath.xpath('./li[text()="导演："]/a/text()'))
                movie_item['directors'] = directors
                region = get_str_from_xpath(movie_detail_xpath.xpath('./li[text()="地区："]/a/text()'))
                movie_item['region'] = reverse_region(region)
                movie_item['type'] = movie_type
                type2 = get_str_from_xpath(movie_detail_xpath.xpath('./li[text()="类型："]/a[1]/text()'))
                if (type_num == '177'): type2 = '少儿片'
                if (type_num != '85'):
                    if (type2 == ''):
                        type2 = '其他'
                    elif (type2.endswith(type_suffix) == False):
                        type2 = type2 + type_suffix
                movie_item['type2'] = reverse_type2(type2)
                movie_item['description'] = get_str_from_xpath(movie_detail_xpath.xpath('./li[@class="p-row p-intro"]/span[@class="intro-more hide"]/text()'))
                movie_item['update_time'] = get_current_time()
                movie_item['language'] = '内详'
                movie_item['duration'] = '0'
                # 解析播放列表
                driver.get(detail_url)
                try:
                    for li in driver.find_elements_by_xpath('//*[@id="showInfo"]/ul/li'):
                        li.click()
                except:
                    # 记录跳过的视频信息
                    history_type = 'youku'
                    history_url = videoLink
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                sources = []
                source = {'name': '优酷视频', 'types': []}
                types = []
                li_xpath = html.xpath('//div[@class="p-panel hide" or @class="p-panel"]/ul/li')
                li_xpath_length = len(li_xpath)
                for each in etree.HTML(driver.page_source).xpath('//div[@class="p-panel hide" or @class="p-panel"]/ul/li'):
                    type = {'name': '', 'url': ''}
                    if (type_num == '96' or type_num == '100' or type_num == '177'):
                        type_name = get_str_from_xpath(each.xpath('./div/text()')) + ' ' + get_str_from_xpath(each.xpath('./div/a/text()')).split('...')[0]
                        url = 'https:' + get_str_from_xpath(each.xpath('./div/a/@href')).split('?')[0]
                        if (li_xpath_length < 4 and '至' not in type_name and type_num != '100' and type_num != '177'):
                            type_name = movie_item['update_status']
                            url = 'https:' + get_str_from_xpath(each.xpath('./dl/dt/a/@href'))
                    elif (type_num == '97'):
                        type_name = get_str_from_xpath(each.xpath('./a/text()'))
                        url = 'https:' + get_str_from_xpath(each.xpath('./a/@href')).split('?')[0]
                    elif (type_num == '85'):
                        type_name = get_str_from_xpath(each.xpath('./dl/dt/text()')) + ' ' + get_str_from_xpath(each.xpath('./dl/dt/a/@title'))
                        url = 'https:' + get_str_from_xpath(each.xpath('./dl/dt/a/@href'))
                    type['name'] = type_name
                    type['url'] = url
                    print('正在爬取 '+movie_type+' '+(str)(i)+'/'+(str)(self.totalPage)+' '+(str)(self.index)+'/'+(str)(self.total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                if (type_num == '96'):
                    if (li_xpath_length >= 4):
                        # key指定一个在进行比较之前作用在每个列表元素上的函数
                        types.sort(key=lambda type: (int)(type.get('name').split(' ')[0]))
                if (type_num == '85'):
                    # key指定一个在进行比较之前作用在每个列表元素上的函数
                    # reverse用来标记是否降序排序
                    types.sort(key=lambda type: (int)(type.get('name').split(' ')[0][4:]), reverse=True)
                if (type_num == '100' or type_num == '177'):
                    # key指定一个在进行比较之前作用在每个列表元素上的函数
                    try:
                        types.sort(key=lambda type: (int)(type.get('name').split(' ')[0]))
                    except:
                        # 记录跳过的视频信息
                        history_type = 'youku'
                        history_url = videoLink
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                        continue
                source['types'] = types
                sources.append(source)
                # 跳过播放列表为空的视频并记录
                flag = 0
                if (len(types) == 0):
                    continue
                movie_item['sources'] = sources
                # 视频已爬取且未更新
                if (is_need_source(movie_item, 'movie') == False):
                    print(movie_id + ' 已爬取')
                    continue
                yield movie_item
                self.total_valid = self.total_valid + 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total_valid) + ' 条数据，用时 ' + str(process_time) + 's')