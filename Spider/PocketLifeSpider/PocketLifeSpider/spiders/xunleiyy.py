# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class XunleiyySpider(scrapy.Spider):
    name = 'xunleiyy'
    allowed_domains = ['www.xunleiyy.com']
    start_urls = []
    domain = 'https://www.xunleiyy.com'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0
    page_size = 20
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
        super(XunleiyySpider, self).__init__(name, **kwargs)
        url = self.domain + '/search.php?page=1&searchtype=5'
        print(url)
        self.start_urls.append(url)
        if (target == 'all'):
            # 获取电影总数
            orign_html = get_one_page(url)
            orign_html = etree.HTML(orign_html)
            self.total = (int)(get_str_from_xpath(orign_html.xpath('//div[@class="pages"]/span/text()')).split('条')[0].split('共')[1])
            start_page = 2
            self.total_page = self.total // self.page_size
            if self.total % self.page_size != 0:
                self.total_page = self.total_page + 1
            for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                self.start_urls.append(self.domain + '/search.php?page='+(str)(page_index)+'&searchtype=5')
        elif (target == 'latest'):
            # 获取电影总数
            start_page = 2
            self.total_page = 1
            self.total = self.page_size * self.total_page
            if self.total % self.page_size != 0:
                self.total_page = self.total_page + 1
            for page_index in reverse_arr(range(start_page, self.total_page + 1)):
                self.start_urls.append(self.domain + '/search.php?page=' + (str)(page_index) + '&searchtype=5')

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
        print('当前页面：' + url)

        # url：电影详情页
        count = -1
        for each in reverse_arr(response.xpath('//div[@class="list_lis"]/ul/li')):
            self.index = self.index + 1
            count = count + 1
            movie_item = MovieItem()
            url2 = self.domain + each.xpath("./div/a").attrib['href']
            print(url2)
            splits = url2.split('.html')[0].split('/')
            movie_id = splits[len(splits)-1]
            update_status = get_str_from_xpath(each.xpath('./div/p[2]/span/text()'))
            if (update_status != ''):
                update_status = update_status.split("'")[3]
            movie_item['update_status'] = update_status
            movie_item['region'] = reverse_region(get_str_from_xpath(each.xpath('./div/p[3]/span/text()')).split("'")[3])
            movie_item['release_date'] = reverse_release_date(get_str_from_xpath(each.xpath('./div/p[3]/span[2]/text()')).split('年')[0]).split("'")[3]
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            # https://www.88ys.com/guochanju/202002/79916.html
            html = get_one_page(url2)
            html = etree.HTML(html)
            # /html/body/div[5]/div[1]/div/div
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/h2
            # /html/body/div[5]/div[1]/div/div/div[2]/div[2]/ul/li[1]/span
            # /html/body/div[5]/div[1]/div/div/div[2]/div[1]/span
            each = html.xpath('//div[@class="vod"]')[0]
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./div/img/@src'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./div[2]/dl/dd/h1/a/text()'))
            movie_item['score'] = get_random_str()
            movie_item['nickname'] = movie_item['name']
            movie_item['directors'] = ['未知']
            movie_item['actors'] = each.xpath('./div[2]/dl/div/p[2]/a/text()')
            movie_item['type'] = get_str_from_xpath(each.xpath('//*[@id="daphang"]/a[2]/text()'))
            type2 = get_str_from_xpath(each.xpath('//*[@id="daphang"]/a[3]/text()'))
            if (is_exclude_type2(type2) == True):
                continue
            movie_item['type2'] = reverse_type2(type2)
            movie_item['language'] = get_str_from_xpath(each.xpath('./div[2]/dl/dd[6]/text()'))
            movie_item['duration'] = ''
            movie_item['update_time'] = reverse_update_time(get_str_from_xpath(each.xpath('./div[2]/dl/div/p/text()')))
            movie_item['description'] = get_str_from_xpath(html.xpath('//div[@class="des"]/span[2]/text()'))
            count = 1
            sources = []
            for each in html.xpath('//div[@class="p_list"]'):
                source_name = get_str_from_xpath(each.xpath('./div/h3/text()'))
                if (source_name == ''):
                    break
                source = {'name': source_name, 'types': []}
                types = []
                for each2 in each.xpath('./div[2]/li'):
                    type = {'name': get_str_from_xpath(each2.xpath('./a/text()')), 'url': ''}
                    types.append(type)
                source['types'] = types
                sources.append(source)
            source_url = self.domain + '/play/'+(movie_id.split('id')[1])+'-0-0.html'
            html = get_one_page(source_url)
            html = etree.HTML(html)
            # "第01集$https://www.iqiyi.com/v_19rw197vvg.html#第02集$https://www.iqiyi.com/v_19rw19b1l0.html
            try:
                video_info_list = parse_unicode(html.xpath('//script/text()')[1].split('(')[1].split(')')[0])
                print(video_info_list)
                sources_temp = handle_with_video_info_list(video_info_list)
            except:
                print(html.xpath('//script/text()'))
                continue
            # 解决通过video_info_list获取到的资源类型和播放列表类型乱码的问题
            for i in range(0, len(sources)):
                for j in range(0, len(sources_temp)):
                    if (sources_temp[j]['name'] == sources[i]['name']):
                        for k in range(0, len(sources[i]['types'])):
                            sources[i]['types'][k]['url'] = sources_temp[j]['types'][k]['url']
                        break
            for source in sources:
                if (source['types'][0]['url'] == ''):
                    sources.remove(source)
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