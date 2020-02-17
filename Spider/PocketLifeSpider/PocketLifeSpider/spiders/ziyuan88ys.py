# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class Ziyuan88ysSpider(scrapy.Spider):
    name = 'ziyuan88ys'
    allowed_domains = ['www.88ys.com']
    start_urls = []
    domain = 'http://www.88ys.com'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0
    page_size = 30
    total_page = 0
    total = 0
    total_valid = 0
    index = 0

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
        super(Ziyuan88ysSpider, self).__init__(name, **kwargs)
        for i in range(1, 5):
            curr_type_url = self.domain + '/vod-type-id-'+(str)(i)+'-pg-1.html'
            print(curr_type_url)
            self.start_urls.append(curr_type_url)
            if (target == 'all'):
                # 获取电影总数
                orign_html = get_one_page(curr_type_url)
                orign_html = etree.HTML(orign_html)
                self.total = (int)(get_str_from_xpath(orign_html.xpath('//div[@class="page mb clearfix"]/text()')).split('条')[0].split('共')[1])
                start_page = 2
                self.total_page = self.total // self.page_size
                if self.total % self.page_size != 0:
                    self.total_page = self.total_page + 1
                for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                    self.start_urls.append(self.domain + '/vod-type-id-'+(str)(i)+'-pg-'+(str)(page_index)+'.html')
            elif (target == 'latest'):
                # 获取电影总数
                start_page = 2
                self.total_page = 1
                self.total = self.page_size * self.total_page
                if self.total % self.page_size != 0:
                    self.total_page = self.total_page + 1
                for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                    self.start_urls.append(
                        self.domain + '/vod-type-id-' + (str)(i) + '-pg-' + (str)(page_index) + '.html')

    def parse(self, response):

        # 开始时间
        start = time.time()
        driver = get_driver()
        # 获取所有电影的 id，用于判断电影是否已经爬取
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        dict = [{'sources': {'$elemMatch': {'$ne': []}}}, {'id': 1}]
        data = db_utils.find(dict)
        movie_ids = []
        for movie_id in data:
            movie_ids.append(movie_id['id'])

        url = response.url
        print('当前页面：' + url)
        curr_page = url.split('-pg-')[1].split('.html')[0]

        # url：电影详情页
        count = -1
        for each in reverse_arr(response.xpath('//div[@class="index-area clearfix"]/ul/li')):
            self.index = self.index + 1
            count = count + 1
            url2 = self.domain + each.xpath("./a").attrib['href']
            print(url2)
            splits = url2.split('.html')[0].split('/')
            movie_id = splits[len(splits)-1]
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            # https://www.88ys.com/guochanju/202002/79916.html
            html = get_one_page(url2)
            html = etree.HTML(html)
            # /html/body/div[5]/div[1]/div/div
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/h2
            # /html/body/div[5]/div[1]/div/div/div[2]/div[2]/ul/li[1]/span
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/span
            each = html.xpath('//div[@class="ct mb clearfix"]')[0]
            movie_item = MovieItem()
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./div/img/@src'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./div[2]/dl/h1/text()'))
            movie_item['update_status'] = get_str_from_xpath(each.xpath('./div[2]/dl/dt/text()'))
            movie_item['score'] = get_random_str()
            movie_item['nickname'] = movie_item['name']
            directors_str = get_str_from_xpath(each.xpath('./div[2]/dl/dd[3]/text()'))
            directors = directors_str.split(' ')
            if (',' in directors_str):
                directors = directors_str.split(',')
            movie_item['directors'] = directors
            actors_str = get_str_from_xpath(each.xpath('./div[2]/dl/dt[2]/text()'))
            actors = actors_str.split(' ')
            if (',' in actors_str):
                actors = actors_str.split(',')
            movie_item['actors'] = actors
            type_type2_splits = get_str_from_xpath(each.xpath('./div[2]/dl/dd/text()')).split(' ')
            movie_item['type'] = type_type2_splits[0]
            try:
                type2 = type_type2_splits[1]
            except:
                type2 = '其他'
            if (is_exclude_type2(type2) == True):
                continue
            if (type == '综艺' or type == '动漫'):
                if (type2.endswith('片') == False):
                    type2 = type2 + '片'
            movie_item['type2'] = reverse_type2(type2)
            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div[2]/dl/dd[4]/text()')))
            movie_item['language'] = get_str_from_xpath(each.xpath('./div[2]/dl/dd[6]/text()'))
            movie_item['release_date'] = reverse_release_date(get_str_from_xpath(each.xpath('./div[2]/dl/dd[5]/text()')))
            movie_item['duration'] = ''
            movie_item['update_time'] = reverse_update_time(get_str_from_xpath(each.xpath('./div[2]/dl/dd[2]/text()')))
            movie_item['description'] = get_str_from_xpath(each.xpath('./div[2]/div/text()'))
            source_name_list = []
            count = 1
            for each in html.xpath('//div[@class="playfrom tab8 clearfix"]/ul/li'):
                source_name_list.append(get_str_from_xpath(each.xpath('./text()')))
                source_id = get_str_from_xpath(each.xpath('./@id')).split('tab')[1]
            source_url = self.domain + get_str_from_xpath(html.xpath('//div[@id="stab'+source_id+'"]/div/ul/li/a[1]/@href'))
            driver.get(source_url)
            html = driver.page_source
            html = etree.HTML(html)
            # "第01集$https://www.iqiyi.com/v_19rw197vvg.html#第02集$https://www.iqiyi.com/v_19rw19b1l0.html
            mac_url = driver.execute_script('return mac_url')
            sources = handle_with_mac_url(source_name_list, mac_url)
            movie_item['sources'] = sources
            # 跳过播放列表为空的视频并记录
            if (len(sources) == 0):
                continue
            if (movie_item['update_status']) == '':
                movie_item['update_status'] = sources[0]['types'][len(sources[0]['types'])-1]['name']
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