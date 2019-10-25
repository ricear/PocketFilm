# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class TencentSpider(scrapy.Spider):
    name = 'tencent'
    allowed_domains = ['v.qq.com']
    start_urls = []
    domain = 'http://v.qq.com'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'

    # 影视类型数字列表
    type_list = ['movie', 'tv', 'variety', 'cartoon', 'child']
    for tmp_type in type_list:
        if (tmp_type == 'variety'):
            start_urls.append(
                'https://v.qq.com/channel/' + tmp_type + '?_all=1&channel=' + tmp_type + '&listpage=1&sort=4')
        else:
            start_urls.append('https://v.qq.com/channel/'+tmp_type+'?_all=1&channel='+tmp_type+'&listpage=1&sort=18')
    # 电影总数
    total_valid = 0
    target = None

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, name=None, **kwargs):
        super(TencentSpider, self).__init__(name, **kwargs)
        self.target = target

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

        url = response.url
        movie_type = url.split('channel/')[1].split('?')[0]
        # 用于计算电影总数
        pattern4 = '[\s\S]*?<div class="filter_result " data-total="5000" data-pagemax="167">共<span class="hl">([\s\S]*?)</span>个筛选结果</div>[\s\S]*?'

        orign_html = get_one_page(url)
        flag = 0
        try:
            html = etree.HTML(orign_html)
        except:
            # 记录跳过的视频信息
            history_type = 'tencent'
            history_url = url
            history_text = '跳过'
            flag = 1
            if (check_spider_history(history_type, history_url, history_text) == False):
                write_spider_history(history_type, history_url, history_text)
        if (flag == 0):
            total = (int)(get_str_from_xpath(html.xpath('/html/body/div[5]/div/div[1]/div[1]/span/text()')))
            #  获取影视列表地址
            page_size = 30
            start_page = 0
            if (total % page_size == 0):
                total_page = (int)(total / page_size)
            else:
                total_page = (int)(total / page_size) + 1
            if (self.target == 'latest'):
                total_page = 2

            #   获取影视列表内容
            #   电影
            if (movie_type == 'movie'):
                for offset_temp in reverse_arr(range(start_page, total + 1, page_size)):
                    current_page = (int)(offset_temp / page_size) + 1
                    url = self.domain + '/x/bu/pagesheet/list?_all=1&append=1&channel=' + movie_type + '&listpage=2&offset=' + (
                        str)(offset_temp) + '&pagesize=' + (str)(page_size) + '&sort=19'
                    print('当前页面：' + url)
                    count = 0
                    html = get_one_page(url)
                    try:
                        html = etree.HTML(orign_html)
                    except:
                        # 记录跳过的视频信息
                        count += page_size
                        history_type = 'tencent'
                        history_url = url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                            pass
                    for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                        count += 1
                        url2 = get_str_from_xpath(each.xpath("./a/@href"))
                        movie_id = get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                        movie_item = MovieItem()
                        movie_item['id'] = movie_id
                        movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                        movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                        # id, src, name, update_time, actors, type, score, release_date, description
                        # 解析视频详情
                        html = get_one_page(self.domain + '/detail/n/'+movie_id+'.html')
                        try:
                            html = etree.HTML(html)
                            each = html.xpath("//div[@class='detail_video']")[0]
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url2
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                                pass
                        movie_item['update_status'] = '腾讯视频'
                        score = get_str_from_xpath(each.xpath('./div/div/span/text()'))
                        if (score == '' or ':' in score):
                            score = get_random_str()
                        movie_item['score'] = score
                        movie_item['nickname'] = movie_item['name']
                        directors = []
                        actors = []
                        for item in each.xpath('./div[7]/div/div'):
                            star_type = get_str_from_xpath(item.xpath('./a/span/text()'))
                            star_name = get_str_from_xpath(item.xpath('./span/text()'))
                            if (star_type == '导演'):
                                directors.append(star_name)
                            elif (star_name != '更多'): actors.append(star_name)
                        movie_item['directors'] = directors
                        movie_item['actors'] = actors
                        movie_item['type'] = '电影'
                        type2 = get_str_from_xpath(each.xpath('./div[5]/div/a/text()'))
                        if (type2 == ''):
                            type2 = '其他'
                        elif (type2.endswith('片') == False):
                            type2 = type2 + '片'
                        movie_item['type2'] = reverse_type2(type2)
                        if (get_str_from_xpath(each.xpath('./div[3]/div[1]/span[1]/text()')) == '别　名:'):
                            region = get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()'))
                        else:
                            region = get_str_from_xpath(each.xpath('./div[3]/div[1]/span[2]/text()'))
                            if (region == ''):
                                region = get_str_from_xpath(each.xpath('./div[2]/div[1]/span[2]/text()'))
                        movie_item['region'] = reverse_region(region)
                        if (get_str_from_xpath(each.xpath('./div[3]/div[2]/span/text()')) != '语　言:'):
                            language = get_str_from_xpath(each.xpath('./div[3]/div[3]/span[2]/text()'))
                        elif(get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()')) != ''):
                            language = get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()'))
                        else:
                            language = get_str_from_xpath(each.xpath('./div[2]/div[2]/span[2]/text()'))
                        movie_item['language'] = language
                        if (get_str_from_xpath(each.xpath('./div[3]/div[3]/span[1]/text()')) == '语　言:'):
                            release_date = get_str_from_xpath(each.xpath('./div[4]/div[1]/span[2]/text()')).split('-')[0]
                        else:
                            release_date = get_str_from_xpath(each.xpath('./div[3]/div[3]/span[2]/text()')).split('-')[0]
                            if (release_date == '会员看全集'): movie_item['release_date'] = get_year()
                            elif (release_date == ''): movie_item['release_date'] = get_str_from_xpath(each.xpath('./div[2]/div[3]/span[2]/text()')).split('-')[0]
                        movie_item['release_date'] = release_date
                        movie_item['duration'] = '0'
                        movie_item['update_time'] = get_current_time()
                        movie_item['description'] = get_str_from_xpath(each.xpath('//div[@class="video_desc"]/span[2]/span/text()'))
                        sources = []
                        source = {'name': '腾讯视频', 'types': []}
                        types = []
                        type_name = ''
                        for each2 in each.xpath('./div[8]/div[2]/a'):
                            type = {'name': '', 'url': ''}
                            type_name = get_str_from_xpath(each2.xpath('./span/text()'))
                            if (type_name == ''): continue
                            type_name = movie_item['language']
                            type['name'] = type_name
                            type['url'] = get_str_from_xpath(each2.xpath('./@href'))
                            print('正在爬取 '+movie_type+' '+(str)(current_page)+'/'+(str)(total_page)+' '+(str)(count)+'/'+(str)(total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                            types.append(type)
                        if (len(types) == 0): continue
                        source['types'] = types
                        sources.append(source)
                        movie_item['sources'] = sources
                        # 视频已爬取且未更新
                        if (is_need_source(movie_item, 'movie') == False):
                            print(movie_id + ' 已爬取')
                            continue
                        yield movie_item
                        self.total_valid = self.total_valid + 1
            #   电视剧
            if (movie_type == 'tv'):
                for offset_temp in reverse_arr(range(start_page, total + 1, page_size)):
                    current_page = (int)(offset_temp / page_size) + 1
                    url = self.domain + '/x/bu/pagesheet/list?_all=1&append=1&channel=' + movie_type + '&listpage=2&offset=' + (
                        str)(offset_temp) + '&pagesize=' + (str)(page_size) + '&sort=19'
                    print('当前页面：' + url)
                    count = 0
                    html = get_one_page(url)
                    try:
                        html = etree.HTML(orign_html)
                    except:
                        # 记录跳过的视频信息
                        count += page_size
                        history_type = 'tencent'
                        history_url = url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                            pass
                    for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                        count = count + 1
                        url2 = get_str_from_xpath(each.xpath("./a/@href"))
                        movie_id = get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                        movie_item = MovieItem()
                        movie_item['id'] = movie_id
                        movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                        movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                        # 跳过花絮
                        if ('花絮' in movie_item['name']): continue
                        movie_item['update_status'] = get_str_from_xpath(each.xpath("./a/div/text()"))
                        # id, src, name, update_time, actors, type, score, release_date, description
                        # 解析视频详情
                        html = get_one_page(self.domain + '/detail/n/' + movie_id + '.html')
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        each = html.xpath("//div[@class='detail_video']")[0]
                        movie_item['score'] = get_str_from_xpath(each.xpath('./div/div/span/text()'))
                        # 视频已爬取且未更新
                        dic = {'name': movie_item['name']}
                        movie_server = db_utils.find(dic)
                        if (movie_server.count() > 0 and movie_server.__getitem__(0)['update_status'] == movie_item[
                            'update_status']):
                            print(movie_id + ' 已爬取')
                            continue
                        nick_name_text = get_str_from_xpath(each.xpath('./div[3]/div/span[1]/text()'))
                        if (nick_name_text == '别　名:'):
                            #   有别名
                            movie_item['nickname'] = get_str_from_xpath(each.xpath('./div[3]/div/span[2]/text()'))
                            directors = []
                            actors = []
                            star_type = ''
                            star_name = ''
                            for item in each.xpath('./div[7]/div/div'):
                                star_type = get_str_from_xpath(item.xpath('./a/span/text()'))
                                star_name = get_str_from_xpath(item.xpath('./span/text()'))
                                if (star_type == '导演'):
                                    directors.append(star_name)
                                elif (star_name != '更多'):
                                    actors.append(star_name)
                            movie_item['directors'] = directors
                            movie_item['actors'] = actors
                            movie_item['type'] = '电视剧'
                            movie_item['type2'] = reverse_type2(get_str_from_xpath(each.xpath('./div[5]/div/a/text()')))
                            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()')))
                            movie_item['language'] = get_str_from_xpath(each.xpath('./div[3]/div[3]/span[2]/text()'))
                            movie_item['release_date'] = get_str_from_xpath(each.xpath('./div[4]/div[2]/span[2]/text()'))
                            movie_item['duration'] = '0'
                            movie_item['update_time'] = get_current_time()
                            movie_item['description'] = get_str_from_xpath(each.xpath('./div[6]/span[2]/span/text()'))
                        else:
                            #   无别名
                            movie_item['nickname'] = movie_item['name']
                            directors = []
                            actors = []
                            star_type = ''
                            star_name = ''
                            for item in each.xpath('./div[7]/div/div'):
                                star_type = get_str_from_xpath(item.xpath('./a/span/text()'))
                                star_name = get_str_from_xpath(item.xpath('./span/text()'))
                                if (star_type == '导演'):
                                    directors.append(star_name)
                                elif (star_name != '更多'):
                                    actors.append(star_name)
                            movie_item['directors'] = directors
                            movie_item['actors'] = actors
                            movie_item['type'] = '电视剧'
                            type2 = get_str_from_xpath(each.xpath('./div[5]/div/a/text()'))
                            if (type2 == ''):
                                type2 = '其他'
                            else:
                                type2 = type2 + '剧'
                            movie_item['type2'] = reverse_type2(type2)
                            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[3]/div/span[2]/text()')))
                            movie_item['language'] = get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()'))
                            release_date = get_str_from_xpath(each.xpath('./div[4]/div/span[2]/text()'))
                            if (release_date == ''):
                                release_date = get_str_from_xpath(each.xpath('./div[3]/div[3]/span[2]/text()'))
                            movie_item['release_date'] = release_date
                            movie_item['duration'] = '0'
                            movie_item['update_time'] = get_current_time()
                            movie_item['description'] = get_str_from_xpath(each.xpath('./div[6]/span[2]/span/text()'))

                            #   爬取播放列表
                            html = get_one_page(self.domain + '/x/cover/' + movie_id + '.html')
                            try:
                                html = etree.HTML(html)
                            except:
                                # 记录跳过的视频信息
                                history_type = 'tencent'
                                history_url = url
                                history_text = '跳过'
                                if (check_spider_history(history_type, history_url, history_text) == False):
                                    write_spider_history(history_type, history_url, history_text)
                                continue
                            sources = []
                            source = {'name': '腾讯视频', 'types': []}
                            types = []
                            type_name = ''
                            for each2 in html.xpath('//*[@id="video_scroll_wrap"]/div[4]/div[2]/span'):
                                #   跳过预告片
                                if ('sub_number_yu' in get_str_from_xpath(each2.xpath('./i/img/@src'))): continue
                                type = {'name': '', 'url': ''}
                                type_name = get_str_from_xpath(each2.xpath('./a/text()'))
                                type['name'] = type_name
                                type['url'] = self.domain + get_str_from_xpath(each2.xpath('./a/@href'))
                                print('正在爬取 '+movie_type+' '+(str)(current_page)+'/'+(str)(total_page)+' '+(str)(count)+'/'+(str)(total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                types.append(type)
                            source['types'] = types
                            sources.append(source)
                            movie_item['sources'] = sources
                            if (movie_item['update_status'] == ''): movie_item['update_status'] = '连载' + type_name.split(':')[0]
                            # 视频已爬取且未更新
                            if (is_need_source(movie_item, 'movie') == False):
                                print(movie_id + ' 已爬取')
                                continue
                            yield movie_item
                            self.total_valid = self.total_valid + 1
            #   综艺
            if (movie_type == 'variety'):
                for offset_temp in reverse_arr(range(start_page, total + 1, page_size)):
                    current_page = (int)(offset_temp / page_size) + 1
                    url = self.domain + '/x/bu/pagesheet/list?_all=1&append=1&channel=' + movie_type + '&listpage=2&offset=' + (
                        str)(offset_temp) + '&pagesize=' + (str)(page_size) + '&sort=19'
                    print('当前页面：' + url)
                    count = 0
                    html = get_one_page(url)
                    try:
                        html = etree.HTML(html)
                    except:
                        # 记录跳过的视频信息
                        count += page_size
                        history_type = 'tencent'
                        history_url = url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                        continue
                    for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                        count = count + 1
                        url2 = get_str_from_xpath(each.xpath("./a/@href"))
                        movie_id = \
                        get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                        movie_item = MovieItem()
                        movie_item['id'] = movie_id
                        movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                        movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                        # id, src, name, update_time, actors, type, score, release_date, description
                        # 解析视频详情
                        html = get_one_page(self.domain + '/detail/n/' + movie_id + '.html')
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        score = get_str_from_xpath(html.xpath('/html/body/div[2]/div[1]/div/div/div/div[1]/div/span[1]/text()'))
                        if (score == ''):
                            score = get_random_str()
                        movie_item['score'] = score
                        html = get_one_page(self.domain + '/x/cover/' + movie_id + '.html')
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        # 视频已爬取且未更新
                        dic = {'name': movie_item['name']}
                        movie_server = db_utils.find(dic)
                        movie_item['nickname'] = movie_item['name']
                        movie_item['directors'] = ['未知']
                        movie_item['actors'] = ['内详']
                        movie_item['type'] = '综艺'
                        movie_item['type2'] = '综艺片'
                        region = get_str_from_xpath(html.xpath('//*[@id="container_player"]/div/div[2]/div[1]/div[2]/div/div[3]/a[1]/text()'))
                        if ('内地' not in region and '国' not in region):
                            region = '内地'
                        movie_item['region'] = reverse_region(region)
                        movie_item['language'] = '内详'
                        movie_item['duration'] = '0'
                        movie_item['update_time'] = get_current_time()
                        movie_item['description'] = get_str_from_xpath(html.xpath('//*[@id="leftdown_content"]/div[1]/div[2]/ul/li/div[2]/p/text()'))
                        sources = []
                        source = {'name': '腾讯视频', 'types': []}
                        types = []
                        type_name = ''
                        update_status = ''
                        for each2 in html.xpath('//*[@id="video_scroll_wrap"]/div[5]/div/ul[1]/li'):
                            type = {'name': '', 'url': ''}
                            type_name = ''.join(get_str_from_xpath(each2.xpath('./a/div/span/text()')).split(' ')[0].split('-'))
                            type['name'] = type_name
                            type['url'] = self.domain + get_str_from_xpath(each2.xpath('./a/@href'))
                            print('正在爬取 '+movie_type+' '+(str)(current_page)+'/'+(str)(total_page)+' '+(str)(count)+'/'+(str)(total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                            if (count == 1):
                                update_status = '连载第' + type_name + '集'
                            types.append(type)
                        if (len(types) == 0): continue
                        source['types'] = types
                        sources.append(source)
                        movie_item['sources'] = sources
                        movie_item['release_date'] = type_name[0:4]
                        movie_item['update_status'] = update_status
                        # 视频已爬取且未更新
                        if (is_need_source(movie_item, 'movie') == False):
                            print(movie_id + ' 已爬取')
                            continue
                        yield movie_item
                        self.total_valid = self.total_valid + 1
            #   动漫
            if (movie_type == 'cartoon'):
                for offset_temp in reverse_arr(range(start_page, total + 1, page_size)):
                    current_page = (int)(offset_temp / page_size) + 1
                    url = self.domain + '/x/bu/pagesheet/list?_all=1&append=1&channel=' + movie_type + '&listpage=2&offset=' + (
                        str)(offset_temp) + '&pagesize=' + (str)(page_size) + '&sort=19'
                    print('当前页面：' + url)
                    count = 0
                    html = get_one_page(url)
                    try:
                        html = etree.HTML(html)
                    except:
                        # 记录跳过的视频信息
                        count += page_size
                        history_type = 'tencent'
                        history_url = url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                        continue
                    for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                        count = count + 1
                        url2 = get_str_from_xpath(each.xpath("./a/@href"))
                        movie_id = get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                        movie_item = MovieItem()
                        movie_item['id'] = movie_id
                        movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                        movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                        movie_item['update_status'] = get_str_from_xpath(each.xpath("./a/div/text()"))

                        # id, src, name, update_time, actors, type, score, release_date, description
                        # 解析视频详情
                        html = get_one_page(self.domain + '/detail/n/' + movie_id + '.html')
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        each = html.xpath("//div[@class='detail_video']")[0]
                        movie_item['score'] = get_str_from_xpath(each.xpath('./div/div/span/text()'))
                        nick_name_text = get_str_from_xpath(each.xpath('./div[3]/div/span[1]/text()'))
                        if (nick_name_text == '别　名:'):
                            #   有别名
                            movie_item['nickname'] = get_str_from_xpath(each.xpath('./div[3]/div/span[2]/text()'))
                            movie_item['directors'] = ['未知']
                            movie_item['actors'] = ['内详']
                            movie_item['type'] = '动漫'
                            movie_item['type2'] = '动漫片'
                            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[3]/div[2]/span[2]/text()')))
                            movie_item['language'] = movie_item['language'] = '内详'
                            movie_item['release_date'] = get_str_from_xpath(each.xpath('./div[4]/div/span[2]/text()')).split('-')[0]
                            movie_item['duration'] = '0'
                            movie_item['update_time'] = get_current_time()
                            movie_item['description'] = get_str_from_xpath(each.xpath('./div[6]/span[2]/span/text()'))
                        else:
                            #   无别名
                            movie_item['nickname'] = movie_item['name']
                            movie_item['directors'] = ['未知']
                            movie_item['actors'] = ['内详']
                            movie_item['type'] = '动漫'
                            movie_item['type2'] = '动漫片'
                            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[3]/div/span[2]/text()')))
                            movie_item['language'] = movie_item['language'] = '内详'
                            movie_item['release_date'] = get_str_from_xpath(each.xpath('./div[3]/div[3]/span[2]/text()'))
                            movie_item['duration'] = '0'
                            movie_item['update_time'] = get_current_time()
                            movie_item['description'] = get_str_from_xpath(each.xpath('./div[6]/span[2]/span/text()'))

                        #   爬取播放列表
                        html = get_one_page(self.domain + '/x/cover/' + movie_id + '.html')
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        sources = []
                        source = {'name': '腾讯视频', 'types': []}
                        types = []
                        type_name = ''
                        for each2 in html.xpath('//*[@id="video_scroll_wrap"]/div[4]/div[2]/span'):
                            #   跳过预告片
                            if ('sub_number_yu' in get_str_from_xpath(each2.xpath('./i/img/@src'))): continue
                            type = {'name': '', 'url': ''}
                            type_name = get_str_from_xpath(each2.xpath('./a/text()'))
                            type['name'] = type_name
                            type['url'] = self.domain + get_str_from_xpath(each2.xpath('./a/@href'))
                            print('正在爬取 '+movie_type+' '+(str)(current_page)+'/'+(str)(total_page)+' '+(str)(count)+'/'+(str)(total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                            types.append(type)
                        source['types'] = types
                        sources.append(source)
                        movie_item['sources'] = sources
                        if (movie_item['update_status'] == ''): movie_item['update_status'] = '连载' + type_name.split(' ')[0]
                        # 视频已爬取且未更新
                        if (is_need_source(movie_item, 'movie') == False):
                            print(movie_id + ' 已爬取')
                            continue
                        yield movie_item
                        self.total_valid = self.total_valid + 1
            #   少儿
            if (movie_type == 'child'):
                for offset_temp in reverse_arr(range(start_page, total + 1, page_size)):
                    current_page = (int)(offset_temp / page_size) + 1
                    url = self.domain + '/x/bu/pagesheet/list?_all=1&append=1&channel=' + movie_type + '&listpage=2&offset=' + (
                        str)(offset_temp) + '&pagesize=' + (str)(page_size) + '&sort=19'
                    print('当前页面：' + url)
                    count = 0
                    html = get_one_page(url)
                    try:
                        html = etree.HTML(html)
                    except:
                        # 记录跳过的视频信息
                        count += page_size
                        history_type = 'tencent'
                        history_url = url
                        history_text = '跳过'
                        if (check_spider_history(history_type, history_url, history_text) == False):
                            write_spider_history(history_type, history_url, history_text)
                        continue
                    for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                        count = count + 1
                        url2 = get_str_from_xpath(each.xpath("./a/@href"))
                        movie_id = get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                        movie_item = MovieItem()
                        movie_item['id'] = movie_id
                        movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                        movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                        movie_item['update_status'] = get_str_from_xpath(each.xpath("./a/div/text()"))

                        # id, src, name, update_time, actors, type, score, release_date, description
                        #   爬取播放列表
                        html = get_one_page(self.domain + '/x/cover/' + movie_id + '.html')
                        #   当前视频已经被删除
                        if (html == None):
                            continue
                        try:
                            html = etree.HTML(html)
                        except:
                            # 记录跳过的视频信息
                            history_type = 'tencent'
                            history_url = url
                            history_text = '跳过'
                            if (check_spider_history(history_type, history_url, history_text) == False):
                                write_spider_history(history_type, history_url, history_text)
                            continue
                        movie_item['score'] = get_str_from_xpath(html.xpath('//*[@id="container_player"]/div/div[2]/div[1]/div[1]/span/span[1]/text()')) + get_str_from_xpath(html.xpath('//*[@id="container_player"]/div/div[2]/div[1]/div[1]/span/span[2]/text()'))
                        movie_item['nickname'] = movie_item['name']
                        movie_item['directors'] = ['未知']
                        movie_item['actors'] = ['内详']
                        movie_item['type'] = '少儿'
                        movie_item['type2'] = reverse_type2(get_str_from_xpath(html.xpath('//*[@id="container_player"]/div/div[2]/div[1]/div[2]/div/div[4]/a[2]/text()')))
                        movie_item['region'] = reverse_region(get_str_from_xpath(html.xpath('//*[@id="container_player"]/div/div[2]/div[1]/div[2]/div/div[4]/a[1]/text()')))
                        movie_item['description'] = get_str_from_xpath(html.xpath('/html/body/div[1]/div[4]/div/div/div[1]/div[1]/div[2]/ul/li/div/p/text()'))
                        movie_item['language'] = '内详'
                        movie_item['release_date'] = get_year()
                        movie_item['duration'] = '0'
                        movie_item['update_time'] = get_current_time()
                        sources = []
                        source = {'name': '腾讯视频', 'types': []}
                        types = []
                        type_name = ''
                        for each2 in html.xpath('//*[@id="video_scroll_wrap"]/div[4]/div[2]/span'):
                            #   跳过预告片
                            if ('sub_number_yu' in get_str_from_xpath(each2.xpath('./i/img/@src'))): continue
                            type = {'name': '', 'url': ''}
                            type_name = get_str_from_xpath(each2.xpath('./a/text()'))
                            type['name'] = type_name
                            type['' \
                                 'url'] = self.domain + get_str_from_xpath(each2.xpath('./a/@href'))
                            print('正在爬取 '+movie_type+' '+(str)(current_page)+'/'+(str)(total_page)+' '+(str)(count)+'/'+(str)(total)+' -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                            types.append(type)
                        source['types'] = types
                        sources.append(source)
                        movie_item['sources'] = sources
                        # 跳过播放列表为空的视频并记录
                        flag = 0
                        if (len(types) == 0):
                            continue
                        if (movie_item['update_status'] == ''): movie_item['update_status'] = '连载' + type_name.split(' ')[0]
                        if (movie_item == None):
                            continue
                        # 视频已爬取且未更新
                        if (is_need_source(movie_item, 'movie') == False):
                            print(movie_id + ' 已爬取')
                            continue
                        print(movie_item)
                        yield movie_item
                        self.total_valid = self.total_valid + 1
            # 结束时间
            end = time.time()
            process_time = end - start
            print('本次共爬取 ' + str(self.total_valid) + ' 条数据，用时 ' + str(process_time) + 's')
