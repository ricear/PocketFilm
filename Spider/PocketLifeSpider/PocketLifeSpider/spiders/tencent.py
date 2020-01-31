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
    type_name_dic = {'movie': '电影', 'tv': '电视剧', 'variety': '综艺', 'cartoon': '动漫', 'child': '少儿'}

    # 电影总数
    total_valid = 0
    target = None
    total:dict = {}

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, name=None, **kwargs):
        super(TencentSpider, self).__init__(name, **kwargs)
        self.target = target
        if (self.target == 'all'):
            for tmp_type in self.type_list:
                url = 'https://v.qq.com/channel/' + tmp_type + '?listpage=1&channel=' + tmp_type + ''
                html = get_one_page(url)
                html = etree.HTML(html)
                for a in html.xpath('//div[@data-key="year"]/a[@class="filter_item "]'):
                    year = get_str_from_xpath(a.xpath('./@data-value'))
                    if (tmp_type == 'variety'):
                        url = 'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel='+tmp_type+'&listpage=1&offset=0&pagesize=30&sort=4&year=' + year
                        self.start_urls.append(url)
                    else:
                        url = 'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel='+tmp_type+'&listpage=1&offset=0&pagesize=30&sort=18&year=' + year
                        self.start_urls.append(url)
        elif (self.target == 'latest'):
            for tmp_type in self.type_list:
                if (tmp_type == 'variety'):
                    self.start_urls.append(
                        'https://v.qq.com/channel/' + tmp_type + '?_all=1&channel=' + tmp_type + '&listpage=1&sort=4')
                else:
                    self.start_urls.append(
                        'https://v.qq.com/channel/' + tmp_type + '?_all=1&channel=' + tmp_type + '&listpage=1&sort=18')
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

        origin_url = response.url
        movie_type = origin_url.split('channel=')[1].split('&')[0]
        orign_html = get_one_page(origin_url)
        flag = 0
        html = etree.HTML(orign_html)
        if (flag == 0):
            if (self.target == 'all'):
                total = 2000
            elif (self.target == 'latest'):
                total = (int)(get_str_from_xpath(html.xpath('/html/body/div[5]/div/div[1]/div[1]/span/text()')))
            #  获取影视列表地址
            page_size = 30
            start_page = 0
            if (total % page_size == 0):
                total_page = (int)(total / page_size)
            else:
                total_page = (int)(total / page_size) + 1
            if (self.target == 'latest'):
                total_page = 1
                total = total_page * page_size

            #   获取影视列表内容
            for offset_temp in reverse_arr(range(start_page, total, page_size)):
                current_page = (int)(offset_temp / page_size) + 1
                url = origin_url.replace('listpage=1', 'listpage=' + (str)(current_page)).replace('offset=0', 'offset=' + (str)(offset_temp))
                print('当前页面：' + url)
                count = 0
                html = get_one_page(url)
                html = etree.HTML(html)
                for each in reverse_arr(html.xpath("//div[@class='list_item']")):
                    count += 1
                    movie_id = get_str_from_xpath(each.xpath("./a/@href")).split('cover/')[1].split('.html')[0]
                    movie_item = MovieItem()
                    movie_item['id'] = movie_id
                    movie_item['src'] = get_str_from_xpath(each.xpath("./a/img[1]/@src"))
                    movie_item['name'] = get_str_from_xpath(each.xpath("./a/@title"))
                    if (movie_type == 'movie'):
                        update_status = '腾讯视频'
                    else:
                        update_status = get_str_from_xpath(each.xpath("./div/text()"))
                    # id, src, name, update_time, actors, type, score, release_date, description
                    # 解析视频详情
                    # https://v.qq.com/x/cover/mzc00200uj8xmtb.html
                    url = self.domain + '/x/cover/' + movie_id + '.html'
                    print(url)
                    driver = get_driver()
                    driver.get(url)
                    cover_info = driver.execute_script('return COVER_INFO')
                    driver.quit()
                    try:
                        score = cover_info['score']['score']
                    except:
                        score = get_random_str()
                    movie_item['score'] = score
                    try:
                        nick_name = cover_info['second_title']
                    except:
                        nick_name = movie_item['name']
                    movie_item['nickname'] = nick_name
                    if (update_status == '' or update_status == None):
                        try:
                            update_status = cover_info['episode_updated']
                            if (update_status == None):
                                update_status = '腾讯视频'
                        except:
                            continue
                    movie_item['update_status'] = update_status
                    try:
                        directors = cover_info['director']
                    except:
                        try:
                            directors = cover_info['director_id']
                        except:
                            directors = []
                    movie_item['directors'] = directors
                    try:
                        actors = cover_info['leading_actor']
                    except:
                        try:
                            actors = cover_info['leading_actor_id']
                        except:
                            actors = []
                    movie_item['actors'] = actors
                    movie_item['type'] = self.type_name_dic[movie_type]
                    if (movie_type == 'tv'):
                        type2_suffix = '剧'
                    else:
                        type2_suffix = '片'
                    main_genre = cover_info['main_genre']
                    if (main_genre == None):
                        main_genre = self.type_name_dic[movie_type]
                    movie_item['type2'] = reverse_type2(main_genre + type2_suffix)
                    movie_item['region'] = reverse_region(cover_info['area_name'])
                    try:
                        language = cover_info['langue']
                    except:
                        language = '内详'
                    movie_item['language'] = language
                    movie_item['release_date'] = cover_info['year']
                    movie_item['duration'] = '0'
                    movie_item['update_time'] = get_current_time()
                    movie_item['description'] = cover_info['description']
                    sources = []
                    source = {'name': '腾讯视频', 'types': []}
                    types = []
                    type_name = ''
                    for each2 in cover_info['nomal_ids']:
                        type = {}
                        flag = each2['F']
                        if (flag == 0 or flag == 4):
                            continue
                        type['name'] = reverse_type_name((str)(each2['E']))
                        type['url'] = url.split('.html')[0] + '/' + each2['V'] + '.html'
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
            # 结束时间
            end = time.time()
            process_time = end - start
            print('本次共爬取 ' + str(self.total_valid) + ' 条数据，用时 ' + str(process_time) + 's')
