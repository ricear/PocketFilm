import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == "__main__":
    # 处理爱奇艺爬虫中产生异常的视频
    # 开始时间
    start = time.time()

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
    total = 0
    type = 'iqiyi'
    history_url = ''

    url_list = get_spider_history(type)

    # 获取影视类型
    origin_url = url_list[0]
    # 影视类型对应数字
    type_num = origin_url.split('channel_id=')[1].split('&')[0]
    # 影视类型
    movie_type = type_dic.get(type_num)
    # 影视后缀
    type_suffix = type_suffix_dic.get(type_num)

    # 获取 web 驱动
    driver = get_driver(1)
    driver.minimize_window()

    for url in url_list:
        history_url = url
        print(url)
        response = get_response(url)
        # 解析视频列表
        for list in reverse_arr(response.json()['data']['list']):
            movie_item = MovieItem()
            # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1_260_360.webp
            # http://pic3.iqiyipic.com/image/20180409/3c/a8/a_100131281_m_601_m1.jpg
            movie_item['src'] = list['imageUrl'].split('.jpg')[0] + '_260_360.jpg'
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
            movie_item['release_date'] = reverse_release_date(list['formatPeriod'].split('-')[0])
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
            html = get_one_page(videoLink)
            html = etree.HTML(html)
            print(videoLink)
            if ('a_' in videoLink):
                # 影视详情页: http://www.iqiyi.com/a_19rrh8dq1x.html
                movie_id = videoLink.split('.html')[0].split('a_')[1]
                movie_item['id'] = movie_id
                if (type_num == '1' and movie_id not in type_num_2_1_id_list):
                    type_num_2_1_id_list.append(movie_id)
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
                # 解析播放列表
                sources = []
                source = {'name': '爱奇艺视频', 'types': []}
                types = []
                driver.get(videoLink)
                if ((type_num == '1' or type_num == '6') and movie_item['id'] not in type_num_2_1_id_list):
                    totalPage = (int)(
                        driver.find_element_by_xpath('//div[@id="album_pic_paging"]/a[last()-1]').get_property(
                            "text"))
                    # 电影详情页面
                    for i in range(1, totalPage + 1):
                        # 点击页码
                        if (i > 1):
                            driver.find_element_by_xpath(
                                '//div[@id="album_pic_paging"]/a[@data-key="' + str(i) + '"]').click()
                            time.sleep(2)
                        # 解析相应播放列表
                        for each in driver.find_elements_by_xpath('//*[@id="albumpic-showall-wrap"]/li'):
                            type = {'name': '', 'url': ''}
                            if (type_num == '1'):
                                type['name'] = each.find_element_by_xpath('./div[1]/a/div[1]/div/span').get_property(
                                    'text')
                                type['url'] = 'https:' + each.find_element_by_xpath('./div[2]/p[1]/a').get_property(
                                    'href')
                            elif (type_num == '6'):
                                type['name'] = each.find_element_by_xpath(
                                    './div[1]/a/div[1]/div/span').get_property('text')
                                type['url'] = each.find_element_by_xpath('./div[2]/div/h3/a').get_property('href')
                            print('正在爬取 -> ' + (str)(i) + ' ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                            types.append(type)
                elif (type_num == '2' or type_num == '4' or type_num == '15' or movie_item[
                    'id'] in type_num_2_1_id_list):
                    # 电视剧详情页面
                    if (len(driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[1]/a')) == 0):
                        # 没有全部按钮
                        for li in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/ul/li'):
                            if (li.find_element_by_xpath('./a') == None):
                                break
                            li.find_element_by_xpath('./a').click()
                            # 解析相应播放列表
                            index = 1
                            for each in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li'):
                                type = {'name': '', 'url': ''}
                                url_xpath = driver.find_element_by_xpath(
                                    '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(index) + ']/div[2]/p/a')
                                try:
                                    type['name'] = url_xpath.get_property('text').strip()
                                    type['url'] = url_xpath.get_property('href')
                                except:
                                    print(url)
                                    continue
                                if (type['name'] == ''):
                                    type['name'] = url_xpath.get_property('text').strip()
                                    type['url'] = url_xpath.get_property('href')
                                index = index + 1
                                print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                types.append(type)
                    else:
                        # 有全部按钮，点击全部按钮，显示全部列表
                        driver.find_element_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[1]/a').click()
                        for li in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[2]/div/div[2]/ul/li'):
                            try:
                                li.find_element_by_xpath('./a').click()
                            except:
                                # 记录跳过的视频信息
                                history_type = 'iqiyi'
                                history_url = videoLink
                                history_text = '跳过'
                                if (check_spider_history(history_type, history_url, history_text) == False):
                                    write_spider_history(history_type, history_url, history_text)
                                continue
                            time.sleep(2)
                            # 解析相应播放列表
                            index = 1
                            for each in driver.find_elements_by_xpath('//*[@id="widget-tab-3"]/div[5]/div/ul/li'):
                                type = {'name': '', 'url': ''}
                                type['name'] = driver.find_element_by_xpath(
                                    '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                        index) + ']/div[2]/p/a').get_property('text').strip()
                                type['url'] = driver.find_element_by_xpath(
                                    '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                        index) + ']/div[2]/p/a').get_property('href')
                                if (type['name'] == ''):
                                    type['name'] = driver.find_element_by_xpath(
                                        '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                            index) + ']/div[2]/p/a').get_property('text').strip()
                                    type['url'] = driver.find_element_by_xpath(
                                        '//*[@id="widget-tab-3"]/div[5]/div/ul/li[' + (str)(
                                            index) + ']/div[2]/p/a').get_property('href')
                                index = index + 1
                                print('正在爬取 -> ' + movie_id + ' ' + source['name'] + ' ' + type['name'])
                                types.append(type)
            else:
                # 影视详情页: https://www.iqiyi.com/v_19ru2jih7w.html
                splits = movie_id = videoLink.split('.html')[0]
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
            total += 1
            # 更新影视分类
            collection = 'movie_type'
            db_utils = MongoDbUtils(collection)
            dic = {'type': '分类'}
            names = db_utils.find(dic).__getitem__(0)['names']
            if (movie_item['type2'] not in names):
                names.append(movie_item['type2'])
                dic = {'type': '分类'}
                new_dic = {'$set': {'names': names}}
                db_utils.update(dic, new_dic)

            # 申请资源
            collection = 'movie'
            db_utils = MongoDbUtils(collection)
            # 执行 sql
            movie_item['acquisition_time'] = get_current_time()
            if (movie_item['acquisition_time'] == '未知'): movie_item['acquisition_time'] = '0'
            dic = {'name': movie_item['name'], 'type': movie_item['type']}
            movies1 = db_utils.find(dic)
            # 服务器中资源中的最大集数
            max1 = 0
            # 新爬取视频中资源中的最大集数
            max2 = 0
            if (movies1.count() > 0):
                # 当前视频已爬取且更新，将新爬去的数据更新到数据库
                movies1_temp = movies1.__getitem__(0)
                movies1_source_names_temp = []
                sources_tmp = []
                for source in movies1_temp['sources']:
                    movies1_source_names_temp.append(source['name'])
                item_source = movie_item['sources'][0]
                sources_tmp.append(item_source)
                for source in movies1_temp['sources']:
                    if (source['name'] == item_source['name']):
                        continue
                    sources_tmp.append(source)
                newdic = {'$set': {'update_status': movie_item['update_status'], 'sources': sources_tmp,
                                   'update_time': movie_item['update_time'],
                                   'acquisition_time': movie_item['acquisition_time']}}
                db_utils.update(dic, newdic)
            else:
                movie_item = dict(movie_item)
                print(movie_item)
                db_utils.insert(movie_item)

    # 结束时间
    driver.quit()
    end = time.time()
    process_time = end - start
    print('本次共爬取 ' + str(total) + ' 条数据，用时 ' + str(process_time) + 's')
