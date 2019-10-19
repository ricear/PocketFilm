# -*- coding: utf-8 -*-
import scrapy

from PocketLifeSpider.items import MovieItem
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.CommonUtils import *

class KuyunSpider(scrapy.Spider):
    name = 'kuyun'
    allowed_domains = ['www.kuyunzy1.com']
    start_urls = []
    domain = 'http://www.kuyunzy1.com'
    search_domain = 'https://www.xunleiyy.com/search.php'
    # 搜索关键词
    keyword = None
    type = 'movie_sources'
    # 电影总数
    total = 0

    custom_settings = {
        'ITEM_PIPELINES': {
            'PocketLifeSpider.pipelines.ZuidaSpiderPipeline': 300,
        }
    }

    def __init__(self, target=None, keyword=None, name=None, **kwargs):
        super(KuyunSpider, self).__init__(name, **kwargs)
        self.orign_url = self.domain + '/list/?0-'
        self.start_urls = [self.orign_url + '1.html']
        # 用于计算电影总数
        # 获取电影总数
        orign_html = get_one_page(self.start_urls[0], encode='gb2312')
        time.sleep(2)
        orign_html = etree.HTML(orign_html)
        result = orign_html.xpath('//td[@style="text-align:center;color:red;"]/span/text()')[0]
        total = (int)(result.split('共')[1].split('条')[0])

        start_page = 2
        page_size = 50
        total_page = total // page_size
        if total_page % page_size != 0:
            total_page = total_page + 1
        for page_index in reverse_arr(range(start_page, total_page + 1)):
            self.start_urls.append(self.orign_url + str(page_index) + '.html')

    def parse(self, response):

        # 判断当前数据是否爬取
        if check_spider_history(self.type, response.url) == True:
            pass
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

        url = response.url
        print('当前页面：' + url)

        # url：电影详情页
        index = 5
        count = -1
        if self.keyword is not None:
            index = 4
        for each in reverse_arr(response.xpath('//tr[@class="row"]')):
            count += 1
            if count == 0 or count == 51:
                continue
            url2 = each.xpath("./td/a/@href").extract()[0]
            movie_id = url2.split('?')[1].split('.html')[0]
            dic = {'id': movie_id}
            movie_server = db_utils.find(dic)
            # id, src, name, update_time, actors, type, score, release_date, description
            # 解析视频源
            html = get_one_page(self.domain + url2, encode='gb2312')
            html = etree.HTML(html)
            each = html.xpath('//table[@style="text-align:left"]')[0]
            movie_item = MovieItem()
            movie_item['id'] = movie_id
            movie_item['src'] = get_str_from_xpath(each.xpath('./tr[1]/td[1]/div/img/@src'))
            movie_item['name'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[1]/td/font/text()'))
            movie_item['update_status'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[7]/td/font/text()'))
            movie_item['score'] = get_random_str()
            # 视频已爬取且未更新
            if (movie_server.count() > 0 and movie_server.__getitem__(0)['update_status'] == movie_item[
                'update_status']):
                print(movie_id + ' 已爬取')
                continue
            movie_item['nickname'] = movie_item['name']
            movie_item['directors'] = get_arr_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[3]/td/font/a/text()'))
            movie_item['actors'] = get_arr_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[2]/td/font/text()'))
            movie_item['type2'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[4]/td/font/text()'))
            if movie_item['type2'].find('综艺') != -1:
                movie_item['type'] = '综艺'
            elif movie_item['type2'].find('动漫') != -1:
                movie_item['type'] = '动漫'
            elif movie_item['type2'].find('福利片') != -1:
                movie_item['type'] = '福利片'
                continue
            elif movie_item['type2'].find('伦理片') != -1:
                movie_item['type'] = '伦理片'
                continue
            elif movie_item['type2'].find('音乐片') != -1:
                movie_item['type'] = '音乐片'
            elif movie_item['type2'].find('片') != -1 or movie_item['type2'].find('电影') != -1:
                movie_item['type'] = '电影'
            elif movie_item['type2'].find('剧') != -1:
                movie_item['type'] = '电视剧'
            movie_item['region'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[5]/td/font/text()'))
            movie_item['language'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[8]/td/font/text()'))
            movie_item['release_date'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[9]/td/font/text()'))
            movie_item['duration'] = '无'
            movie_item['update_time'] = get_str_from_xpath(each.xpath('./tr[1]/td[2]/table/tr[6]/td/font/text()'))
            movie_item['description'] = get_str_from_xpath(each.xpath('//div[@class="intro"]/font/text()'))
            sources = []
            for each2 in each.xpath('//td[@class="bt"]'):
                source = {'name': '', 'types': []}
                source['name'] = (str)(each2.xpath('./h1/text()')[0])
                types = []
                type_length = len(each2.xpath('.//tr'))
                count = 1
                for each3 in each2.xpath('.//tr'):
                    if (count == type_length): break
                    count += 1
                    full_name = (str)(each3.xpath('./td/a/text()')[0])
                    type = {'name': '', 'url': ''}
                    type['name'] = full_name.split('$')[0]
                    type['url'] = full_name.split('$')[1]
                    print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                    types.append(type)
                source['types'] = types
                sources.append(source)
            movie_item['sources'] = sources
            yield movie_item
            self.total += 1
        # 结束时间
        end = time.time()
        process_time = end - start
        print('本次共爬取 ' + str(self.total) + ' 条数据，用时 ' + str(process_time) + 's')
