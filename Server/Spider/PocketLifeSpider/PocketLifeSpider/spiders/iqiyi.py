# -*- coding: utf-8 -*-
import json

import scrapy
from selenium.webdriver import ActionChains

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class IqiyiSpider(scrapy.Spider):
    name = 'iqiyi'
    allowed_domains = [
        'www.iqiyi.com',
        'pcw-api.iqiyi.com/search/video/videolists'
    ]
    mod = 11
    pageSize = 48
    totalPage = 36
    start_urls = []

    # 数字与影视类型对应关系
    type_dic = {'1': '电影', '2': '电视剧', '6': '综艺', '4': '动漫', '15': '少儿'}
    # 数字与影视后缀对应关系
    type_suffix_dic = {'1': '片', '2': '剧', '6': '片', '4': '片', '15': '片'}
    # 服务器把电视剧当做电影的影视id列表
    type_num_2_1_id_list = [
        '19rrhz3pl5',
        '19rrhh0at1',
        '19rrht3qx1',
        '19rrhy65ph',
        '19rrhv8uel',
        '19rrhgz06l',
        '19rrhz129x',
        '19rrhtnbw9',
        '19rrhh18ad',
        '19rrhz2ao5',
        '19rrhb7pbd',
        '19rrh9ea31'
    ]

    # 电影总数
    total = pageSize * totalPage * len(start_urls)
    total_valid = 0
    index = 0
    type = 'iqiyi'
    history_url = ''
    target = None

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, name=None, **kwargs):
        super(IqiyiSpider, self).__init__(name, **kwargs)
        self.target = target
        # 影视类型数字列表
        type_num_list = ['1', '2', '6', '4', '15']
        tmp_year_list = []
        for tmp_year in range(2017, (int)(get_year())+1):
            tmp_year_list.append((str)(tmp_year))
        tmp_year_list2 = ['2011_2016', '2000_2010', '1990_1999', '1980_1989', '1964_1979']
        for tmp_year in tmp_year_list2:
            tmp_year_list.append((str)(tmp_year))
        if (self.target == 'all'):
            for tmp_type_num in type_num_list:
                for year in tmp_year_list:
                    url = 'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=' + tmp_type_num + '&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=' + year + '&mode=' + (str)(self.mod) + '&pageNum=1&pageSize=' + (str)(self.pageSize) + '&site=iqiyi&source_type=&three_category_id=&without_qipu=1'
                    self.start_urls.append(url)
        elif (self.target == 'latest'):
            for tmp_type_num in type_num_list:
                self.start_urls.append(
                    'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=' + tmp_type_num + '&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=' + (
                        str)(self.mod) + '&pageNum=1&pageSize=' + (str)(
                        self.pageSize) + '&site=iqiyi&source_type=&three_category_id=&without_qipu=1')
            self.totalPage = 1
            self.total = self.totalPage * self.pageSize * len(self.start_urls)
        self.start_urls = reverse_arr(self.start_urls)

    def parse(self, response):

        # 开始时间
        start = time.time()

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
        type_num = origin_url.split('channel_id=')[1].split('&')[0]
        # 影视类型
        movie_type = self.type_dic.get(type_num)
        # 影视后缀
        type_suffix = self.type_suffix_dic.get(type_num)
        if (self.target == 'latest'):
            self.totalPage = 1
            self.total = self.totalPage * self.pageSize * len(self.start_urls)

        # 生成视频列表地址
        for i in reverse_arr(range(1, self.totalPage + 1)):
            url = origin_url.split('&pageNum=')[0] + '&pageNum=' + (str)(i) + '&pageSize='+(str)(self.pageSize)+'&site=iqiyi&source_type=&three_category_id=&without_qipu=1'
            print(url)
            response = get_response(url)
            if (len(response.json()['data']['list']) == 0):
                self.index = self.index + self.pageSize
            # 解析视频列表
            for list in reverse_arr(response.json()['data']['list']):
                self.index = self.index + 1
                movie_item = MovieItem()
                # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1_260_360.webp
                # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1.jpg
                movie_item['src'] = list['imageUrl'].split('.jpg')[0] + '_260_360.jpg'
                movie_item['name'] = list['name'].replace(' ', '')
                try:
                    movie_item['nickname'] = list['focus']
                except:
                    movie_item['nickname'] = movie_item['name']
                try:
                    score = list['score']
                except:
                    score = get_random_str()
                movie_item['score'] = score
                movie_item['duration'] = list['duration']
                movie_item['type'] = movie_type
                type2_list = list['categories']
                if (type2_list == []):
                    type2 = '其他'
                else:
                    type2 = type2_list[0]['name']
                    if ('话' in type2):
                        type2 = type2_list[1]['name']
                    if (type2.endswith(type_suffix) == False):
                        type2 = type2 + type_suffix
                if (is_exclude_type2(type2) == True):
                    continue
                movie_item['type2'] = reverse_type2(type2)
                try:
                    movie_item['release_date'] = reverse_release_date(list['formatPeriod'].split('-')[0])
                except:
                    # 记录跳过的视频信息
                    history_type = 'iqiyi'
                    history_url = url
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                try:
                    description = list['description']
                except:
                    description = movie_item['name']
                movie_item['description'] = description
                actors = list['secondInfo']
                if ('主演:' in actors):
                    if ('/' in actors):
                        actors = strip_arr(actors.split('主演:')[1].split('/'))
                    elif (',' in actors):
                        actors = strip_arr(actors.split('主演:')[1].split(','))
                    else:
                        actors = strip_arr([actors.split('主演:')[1]])
                else:
                    actors = ['未知']
                movie_item['actors'] = actors
                movie_item['update_time'] = get_current_time()
                # 解析视频详情
                videoLink = list['playUrl']
                html = get_one_page(videoLink)
                html = etree.HTML(html)
                print(videoLink)
                if ('a_' in videoLink):
                    # 影视详情页: http://www.iqiyi.com/a_19rrh8dq1x.html
                    movie_id = videoLink.split('.html')[0].split('a_')[1]
                    movie_item['id'] = movie_id
                    if (type_num == '1' and movie_id not in self.type_num_2_1_id_list):
                        self.type_num_2_1_id_list.append(movie_id)
                    directors = get_arr_from_xpath(html.xpath('//p[@class="episodeIntro-director"]/a/text()'))
                    if (directors == []):
                        directors = ['未知']
                    movie_item['directors'] = directors
                    region = get_str_from_xpath(html.xpath('//p[@class="episodeIntro-area"]/a/text()'))
                    movie_item['region'] = reverse_region(region)
                    movie_item['language'] = get_str_from_xpath(html.xpath('//p[@class="episodeIntro-lang"]/a/text()'))
                    # 获取更新状态
                    if (type_num == '1'):
                        # 电视剧
                        update_status = get_str_from_xpath(
                            html.xpath('//*[@id="widget-tab-2"]/div[1]/span[2]/a/span/text()')) + '期'
                    if (type_num == '2' or type_num == '4' or type_num == '15'):
                        # 电视剧
                        update_status = get_str_from_xpath(
                            html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/text()')) + get_str_from_xpath(
                            html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/i/text()')) + '集'
                    if (type_num == '6'):
                        # 综艺
                        update_status = get_str_from_xpath(
                            html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/text()')) + get_str_from_xpath(
                            html.xpath('//*[@id="widget-tab-2"]/div[1]/span[2]/a/span/text()')) + '期'
                    videoLink = 'https:' + get_str_from_xpath(html.xpath('//a[@class="albumPlayBtn"]/@href'))
                else:
                    # 影视详情页: https://www.iqiyi.com/v_19ru2jih7w.html
                    splits = videoLink.split('.html')[0]
                    if ('v_' not in splits):
                        continue
                    movie_id = splits.split('v_')[1]
                    movie_item['id'] = movie_id
                    directors = get_arr_from_xpath(html.xpath('//a[@itemprop="director"]/text()'))
                    if (directors == []):
                        directors = ['未知']
                    movie_item['directors'] = directors
                    arr = get_arr_from_xpath(html.xpath('//*[@id="titleRow"]/div[1]/div/div[2]/a/text()'))
                    region = ''
                    language = ''
                    for tmp_str in arr:
                        if ('语' or '话' in str):
                            language = tmp_str
                        if ('国' in tmp_str):
                            region = tmp_str
                        elif ('语' in tmp_str):
                            region = tmp_str.split('语')[0] + '国'
                    if (region == ''):
                        region = '其他'
                    if (language == ''):
                        language = '其他'
                    movie_item['region'] = reverse_region(region)
                    movie_item['language'] = language
                # 解析播放列表
                driver = get_driver()
                driver.get(videoLink)
                param = driver.execute_script('return param')
                html = driver.page_source
                html = etree.HTML(html)
                driver.quit()
                albumId = param['albumId']
                if (albumId == '0' and type_num != '1'):
                    break
                sources = []
                source = {'name': '爱奇艺视频', 'types': []}
                types = []
                # 电影
                if (type_num == '1'):
                    each = html.xpath('//*[@id="rightPlayList"]/div[1]/ul/li')[0]
                    type = {'name': '', 'url': ''}
                    type['name'] = get_str_from_xpath(each.xpath('./div[1]/a/@title'))
                    type['url'] = videoLink
                    print('正在爬取 ' + movie_type + ' ' + (str)(i) + '/' + (str)(self.totalPage) + ' ' + (str)(
                        self.index) + '/' + (str)(self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' +
                          type['name'])
                    types.append(type)
                    xpath_length = len(each.xpath('//*[@id="widget-movie-superseries"]/ul/li'))
                    if (xpath_length > 0):
                        type = {'name': '', 'url': ''}
                        type['name'] = get_str_from_xpath(each.xpath('//*[@id="widget-movie-superseries"]/div/h3/text()'))
                        type['url'] = get_str_from_xpath(each.xpath('//*[@id="widget-movie-superseries"]/ul/li/div[1]/a/@href')).split('?')[0]
                        print('正在爬取 ' + movie_type + ' ' + (str)(i) + '/' + (str)(self.totalPage) + ' ' + (str)(
                            self.index) + '/' + (str)(self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' +
                              type['name'])
                        types.append(type)
                else:
                    # 电视剧、综艺、动漫、少儿
                    for page in range(1, 60):
                        if (type_num != '6'):
                            url = 'https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid='+albumId+'&page='+(str)(page)+'&size=30'
                            print(url)
                            json_str = json.loads(get_one_page(url))
                            data = json_str['data']
                            epsodelist = data['epsodelist']
                            if (epsodelist == []):
                                break
                            for each in epsodelist:
                                type = {'name': '', 'url': ''}
                                type['name'] = reverse_type_name((str)(each['order']))
                                type['url'] = each['playUrl']
                                print('正在爬取 '+movie_type+' '+(str)(i)+'/'+(str)(self.totalPage)+' '+(str)(self.index)+'/'+(str)(self.total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                types.append(type)
                        else:
                            # 综艺
                            url = 'https://pcw-api.iqiyi.com/album/album/fytoplist?cid='+type_num+'&dim=hour&page='+(str)(page)+'&size=10&type=realTime'
                            print(url)
                            json_str = json.loads(get_one_page(url))
                            data = json_str['data']
                            if (data == []):
                                break
                            for each in data:
                                type = {'name': '', 'url': ''}
                                type['name'] = each['period'] + '期'
                                type['url'] = each['episode_play_url']
                                print('正在爬取 ' + movie_type + ' ' + (str)(i) + '/' + (str)(self.totalPage) + ' ' + (str)(self.index) + '/' + (str)(self.total) + ' -> ' + movie_id + ' ' + source['name'] + ' ' +type['name'])
                                types.append(type)
                source['types'] = types
                sources.append(source)
                movie_item['sources'] = sources
                # 跳过播放列表为空的视频并记录
                flag = 0
                if (len(types) == 0):
                    continue
                # 修改更新状态
                if (type_num == '1'):
                    # 电影
                    if (len(types) < 4):
                        movie_item['update_status'] = '爱奇艺视频'
                    else:
                        movie_item['update_status'] = types[0]['name']
                elif (type_num == '2' or type_num == '6' or type_num == '4' or type_num == '15'):
                    # 电视剧
                    if (update_status == '集' or update_status == '期'):
                        update_status = types[0]['name']
                    movie_item['update_status'] = update_status
                # 视频已爬取且未更新
                if (is_need_source(movie_item, 'movie') == False):
                    print(movie_id + ' 已爬取')
                    continue
                yield movie_item
                self.total_valid += 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total_valid) + ' 条数据，用时 ' + str(process_time) + 's')