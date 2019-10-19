# -*- coding: utf-8 -*-
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
    start_urls = [
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=1&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=4&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=2&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=4&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=4&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=4&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=4&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=15&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=&mode=4&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1'
    ]
    domain = 'http://list.youku.com'

    # 数字与影视类型对应关系
    type_dic = {'1': '电影', '2': '电视剧', '6': '综艺', '4': '动漫', '15': '少儿'}
    # 数字与影视后缀对应关系
    type_suffix_dic = {'1': '片', '2': '剧', '6': '片', '4': '片', '15': '片'}

    # 电影总数
    total = 0

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def parse(self, response):

        # 开始时间
        start = time.time()

        # 获取 web 驱动
        driver = get_driver(1)

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

        # 生成视频列表地址
        pageSize = (int)(origin_url.split('pageSize=')[1].split('&')[0])
        for i in reverse_arr(range(1, pageSize + 1)):
            url = origin_url.split('pageNum=')[0] + 'pageNum=' + (str)(i) + origin_url.split('pageNum=')[1].split('&')[1]
            print(url)
            response = get_response(url)
            # 解析视频列表
            movie_item = MovieItem()
            for list in reverse_arr(response.json()['data']['list']):
                # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1_260_360.webp
                # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1.jpg
                try:
                    movie_item['src'] = list['imageUrl'].split('.jpg')[0] + '_260_360.webp'
                except:
                    # 记录跳过的视频信息
                    history_type = 'iqiyi'
                    history_url = url + ' ' + list
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                movie_item['name'] = list['name']
                movie_item['nickname'] = list['focus']
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
                movie_item['type2'] = type2
                try:
                    movie_item['release_date'] = list['formatPeriod'].split('-')[0]
                except:
                    # 记录跳过的视频信息
                    history_type = 'iqiyi'
                    history_url = url + ' ' + (str)(list)
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
                    actors = '未知'
                movie_item['actors'] = actors
                movie_item['update_time'] = get_current_time()

                # 解析视频详情
                videoLink = list['playUrl']
                try:
                    html = get_one_page(videoLink)
                except:
                    # 记录跳过的视频信息
                    history_type = 'iqiyi'
                    history_url = videoLink
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                    continue
                html = etree.HTML(html)
                print(videoLink)
                if ('a_' in videoLink):
                    # 影视详情页: http://www.iqiyi.com/a_19rrh8dq1x.html
                    movie_id = videoLink.split('.html')[0].split('a_')[1]
                    movie_item['id'] = movie_id
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
                        update_status = get_str_from_xpath(html.xpath('//*[@id="widget-tab-2"]/div[1]/span[2]/a/span/text()')) + '期'
                    if (type_num == '2' or type_num == '4' or type_num == '15'):
                        # 电视剧
                        update_status = get_str_from_xpath(html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/text()')) + get_str_from_xpath(html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/i/text()')) + '集'
                    if (type_num == '6'):
                        # 综艺
                        update_status = get_str_from_xpath(html.xpath('//*[@id="widget-tab-3"]/div[1]/span[2]/a/text()')) + get_str_from_xpath(html.xpath('//*[@id="widget-tab-2"]/div[1]/span[2]/a/span/text()')) + '期'

                    # 解析播放列表
                    sources = []
                    source = {'name': '爱奇艺视频', 'types': []}
                    types = []
                    driver.get(videoLink)
                    if (type_num == '1' or type_num == '6'):
                        totalPage = (int)(driver.find_element_by_xpath('//div[@id="album_pic_paging"]/a[last()-1]').get_property("text"))
                        # 电影详情页面
                        for i in range(1, totalPage + 1):
                            # 点击页码
                            if (i > 1):
                                try:
                                    driver.find_element_by_xpath('//div[@id="album_pic_paging"]/a[@data-key="' + str(i) + '"]').click()
                                    time.sleep(2)
                                except:
                                    # 记录跳过的视频信息
                                    history_type = 'iqiyi'
                                    history_url = videoLink
                                    history_text = '跳过'
                                    if (check_spider_history(history_type, history_url, history_text) == False):
                                        write_spider_history(history_type, history_url, history_text)
                                    continue
                            # 解析相应播放列表
                            for each in driver.find_elements_by_xpath('//*[@id="albumpic-showall-wrap"]/li'):
                                type = {'name': '', 'url': ''}
                                if (type_num == '1'):
                                    type['name'] = each.find_element_by_xpath('./div[1]/a/div[1]/div/span').get_property('text')
                                    type['url'] = 'https:' + each.find_element_by_xpath('./div[2]/p[1]/a').get_property('href')
                                elif (type_num == '6'):
                                    try:
                                        type['name'] = each.find_element_by_xpath('./div[1]/a/div[1]/div/span').get_property('text')
                                        type['url'] = each.find_element_by_xpath('./div[2]/div/h3/a').get_property('href')
                                    except:
                                        # 记录跳过的视频信息
                                        history_type = 'iqiyi'
                                        history_url = videoLink
                                        history_text = '跳过'
                                        if (check_spider_history(history_type, history_url, history_text) == False):
                                            write_spider_history(history_type, history_url, history_text)
                                        continue
                                print('正在爬取 -> '+(str)(i)+' ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                types.append(type)
                    elif (type_num == '2' or type_num == '4' or type_num == '15'):
                        # 电视剧详情页面
                        if (len(driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[1]/a')) == 0):
                            # 没有全部按钮
                            for li in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/ul/li'):
                                try:
                                    li.find_element_by_xpath('./a').click()
                                except:
                                    # 记录跳过的视频信息
                                    history_type = 'iqiyi'
                                    history_url = videoLink
                                    history_text = '跳过'
                                    if (check_spider_history(history_type, history_url, history_text) == False):
                                        write_spider_history(history_type, history_url, history_text)
                                    break
                                time.sleep(2)
                                # 解析相应播放列表
                                index = 1
                                for each in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li'):
                                    type = {'name': '', 'url': ''}
                                    try:
                                        type['name'] = driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(index) + ']/div[2]/p/a').get_property('text').strip()
                                        type['url'] = driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(index) + ']/div[2]/p/a').get_property('href')
                                        if (type['name'] == ''):
                                            type['name'] = driver.find_element_by_xpath(
                                                '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                                    index) + ']/div[2]/p/a').get_property('text').strip()
                                            type['url'] = driver.find_element_by_xpath(
                                                '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                                    index) + ']/div[2]/p/a').get_property('href')
                                        index = index + 1
                                    except:
                                        # 记录跳过的视频信息
                                        history_type = 'iqiyi'
                                        history_url = videoLink
                                        history_text = '跳过'
                                        if (check_spider_history(history_type, history_url, history_text) == False):
                                            write_spider_history(history_type, history_url, history_text)
                                            continue
                                    print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                    types.append(type)
                        else:
                            # 有全部按钮，点击全部按钮，显示全部列表
                            driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[1]/a').click()
                            for li in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[2]/ul/li'):
                                li.find_element_by_xpath('./a').click()
                                time.sleep(2)
                                # 解析相应播放列表
                                index = 1
                                for each in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li'):
                                    type = {'name': '', 'url': ''}
                                    try:
                                        type['name'] = driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li['+(str)(index)+']/div[2]/p/a').get_property('text').strip()
                                        type['url'] = driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li['+(str)(index)+']/div[2]/p/a').get_property('href')
                                        if (type['name'] == ''):
                                            type['name'] = driver.find_element_by_xpath(
                                                '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                                    index) + ']/div[2]/p/a').get_property('text').strip()
                                            type['url'] = driver.find_element_by_xpath(
                                                '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                                    index) + ']/div[2]/p/a').get_property('href')
                                        index = index + 1
                                    except:
                                        # 记录跳过的视频信息
                                        history_type = 'iqiyi'
                                        history_url = videoLink
                                        history_text = '跳过'
                                        if (check_spider_history(history_type, history_url, history_text) == False):
                                            write_spider_history(history_type, history_url, history_text)
                                            continue
                                    print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                    types.append(type)
                else:
                    # 影视详情页: https://www.iqiyi.com/v_19ru2jih7w.html
                    movie_id = videoLink.split('.html')[0].split('v_')[1]
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
                    sources = []
                    source = {'name': '爱奇艺视频', 'types': []}
                    types = []
                    # 解析相应播放列表
                    type = {'name': '', 'url': ''}
                    type['name'] = movie_item['name']
                    type['url'] = videoLink
                    print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                    for each in html.xpath('//*[@id="widget-movie-superseries"]/ul/li'):
                        type = {'name': '', 'url': ''}
                        type['name'] = get_str_from_xpath(each.xpath('./div[2]/h3/a/text()'))
                        type['url'] = get_str_from_xpath(each.xpath('./div[2]/h3/a/@href')).split('?')[0]
                        print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                        types.append(type)
                source['types'] = types
                sources.append(source)
                movie_item['sources'] = sources

                # 跳过播放列表为空的视频并记录
                flag = 0
                if (len(types) == 0):
                    # 记录跳过的视频信息
                    flag = 1
                    history_type = 'iqiyi'
                    history_url = videoLink
                    history_text = '跳过'
                    if (check_spider_history(history_type, history_url, history_text) == False):
                        write_spider_history(history_type, history_url, history_text)
                if (flag == 1):
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
                self.total += 1

        # 结束时间
        driver.quit()
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')