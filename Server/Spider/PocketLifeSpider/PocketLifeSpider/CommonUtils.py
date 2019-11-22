import os
import random
import time

import qrcode as qrcode
import requests
import re
import datetime

from elasticsearch import Elasticsearch, helpers
from pymongo import MongoClient
from tqdm import tqdm

import urllib3
from PIL import Image
from lxml import etree
from selenium import webdriver

from PocketLifeSpider.items import *
from PocketLifeSpider.util.YDMHTTPDemo3 import YDMHttp
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils

abspath = os.getcwd()
# 警用requests中的警告
urllib3.disable_warnings()

# 从影视资源类型名称中获取年份
def get_year_from_name(name):
    if (len(name.split(' ')[0].split('')) >= 4):
        return name.split(' ')[0][4:]
    else:
        return name.split(' ')[1][4:]

# 生成掌上影视APP
def generate_app_qrcode_image():
    url = 'http://api.grayson.top/public/PocketFilm.apk'
    generate_qrcode_image(url)

# 根据url生成二维码
def generate_qrcode_image(url):
    qr = qrcode.QRCode(
        version=2,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=5.1,
        border=1
    )  # 设置二维码的大小
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image()
    img.save("image/qrcode.png")

# 修改图片中的地址后缀
def change_src_suffix(old_suffix, new_suffix):
    collection = 'movie'
    db_utils = MongoDbUtils(collection)
    dic = {'src': {'$regex': '/.'+old_suffix+'/'}}
    for movie in db_utils.find({'src': {'$regex': ".*webp"}}):
        dic = {'id': movie['id']}
        new_dic = {'$set': {'src': movie['src'].replace(old_suffix, new_suffix)}}
        db_utils.update(dic, new_dic)

# 获取排除在外的影视第二类型列表
def get_exclude_type2_list():
    exclude_type2_list = ['儿童片', '短片片', '奇幻片', '魔幻片', '励志片', '剧情片', '剧情片', '西部片', '戏曲片', '黑色片', '少儿片', '西部片', '电影节目片',
                          '校园片', '恋爱片', '歌舞片', '记录片', '院线片', '枪战片', '印度片', '华语片', '网络大电影片', '亲情片', '伦理片', '音乐片', '公益片',
                          '搞笑片', '美少女片', '益智片', '推理片', '格斗片', '竞技片', '真人片', '美食片', '同性片', '杜比音效片', '内地片', '吸血鬼片', '社会片',
                          '教育片', '亲子片', '魔法片', '同人片', '忍者片', '热血片', '普通话片', '漫画改编片', '闽南语片', '原创片', '日语片', '中国大陆片',
                          '7-10岁片', '0-3岁片', '合家欢片', '早教益智片', '轻小说改编片', '数学片', '真人特摄片', '布袋戏片', '动漫冒险片', '综艺真人秀片',
                          '综艺真人秀音乐片', '欧美动漫片', '综艺脱口秀片', '综艺音乐片', '国产动漫片', '内地综艺片', '港台综艺片', '日韩动漫片', '日韩综艺片', '欧美综艺片',
                          '海外动漫片', '港台动漫片', '少儿综艺片', '国产剧预告片', '近代片', '综艺脱口秀真人秀片', '4K片', '综艺真人秀 音乐片', '综艺脱口秀 真人秀片',
                          '喜剧剧', '奇幻剧', '抗日剧', '魔幻剧', '腾讯出品剧', '校园剧', '搞笑剧', '玄幻剧', '时装剧', '职场剧', '经侦剧', '罪案剧', '医疗剧', '歌舞剧',
                          '内地剧', '日剧', '韩剧', '台剧', '港剧', '连续剧', '韩国喜剧', '国产喜剧', '欧美喜剧', '台湾喜剧', '欧美剧家庭 喜剧', '日剧喜剧', '泰剧喜剧',
                          '泰剧家庭 喜剧', '港剧喜剧', '日剧家庭 喜剧', '越南剧', '优酷出品剧', '港剧家庭 喜剧', '近代剧', '侦探剧', '儿童综艺片', '美术片', '机战片',
                          '故事片', '公主片', '悲剧片', '文艺片', 'OLI片', '国学片', '学英语片', '识字片', '百科片', '漫改片', '漫画改编剧', '动画剧', '原创剧', '院线剧',
                          '自制剧', '言情剧', '商战剧', '伦理类', '轻改片', '经典片', '舞蹈片', '手工片', '诗词片', '催泪片', '港台综艺片', '日韩动漫片', '国产动漫片', '欧美动漫片']
    return exclude_type2_list

# 修改影视第二类型
def modify_movie_type2(type2_list):
    # 更新影视中相关的影视类型
    collection = 'movie'
    db_utils = MongoDbUtils(collection)
    for type2 in type2_list:
        dic = {'type2': type2}
        new_dic = {'$set': {'type2': reverse_type2(type2)}}
        db_utils.update(dic, new_dic)

    # 删除影视类型中相关类型
    collection = 'movie_type'
    db_utils = MongoDbUtils(collection)
    dic = {'type': '分类'}
    tmp_type_list = []
    for type2 in db_utils.find(dic).__getitem__(0)['names']:
        if (type2 not in type2_list):
            tmp_type_list.append(type2)
    # 将新的影视类型更新到数据库
    new_dic = {'$set': {'names': tmp_type_list}}
    db_utils.update(dic, new_dic)

# 合并名称相同的影视
def combine_movie():
    collection = 'movie'
    db_utils = MongoDbUtils(collection)
    aggregate = [{ "$group": {"_id": {"name": "$name", "type": "$type"},"count": {"$sum": 1}}},{ "$project" : {"_id": 0, "name" : "$_id.name", "type" : "$_id.type", "count" : 1}},{"$match":{"count": {"$gt" : 1}}},{"$sort":{"count" : -1}}]
    aggregate_movies = db_utils.aggregate(aggregate)
    count = 0
    index = 1
    for aggregate_movie in aggregate_movies:
        count = count + 1
    aggregate_movies = db_utils.aggregate(aggregate)
    for aggregate_movie in aggregate_movies:
        dic = {'name': aggregate_movie['name']}
        tmp_sources = []
        # 最近更新的一个视频
        movies = db_utils.find(dic).sort('update_time', -1)
        tmp_movie = movies[0]
        for movie in movies:
            for source in movie['sources']:
                if (source in tmp_sources):
                    continue
                tmp_sources.append(source)
            # 删除已经获取资源的视频
            if (movie['id'] != tmp_movie['id']):
                delete_dic = {'id': movie['id']}
                db_utils.delete(delete_dic)
        # 将名称相同的视频资源更新到最近更新的一个视频上
        dic = {'id': tmp_movie['id']}
        update_dic = {'$set': {'sources': tmp_sources}}
        db_utils.update(dic, update_dic)
        print('共 '+(str)(count)+' 个，当前第 '+(str)(index)+' 个 -> ' + tmp_movie['id'] + ' ' + tmp_movie['name'])
        index = index + 1


# 判断小品类型是否在被排除的类型里面
def exclude_piece_type2(type2):
    exclude_type2_list = [
        '吻戏'
    ]
    if (type2 in exclude_type2_list):
        return True
    return False

# 转换更新日期
def reverse_update_time(update_time):
    if (
            update_time == ''
    ):
        release_date = '0'
    return update_time

# 转换发布日期
def reverse_release_date(release_date):
    if (
            release_date == '' or
            release_date == '未知'
    ):
        release_date = '0'
    return release_date

# 删除不正确播放地址的戏曲视频
def delete_drama_with_url_invalid():
    collection = 'drama'
    db_utils = MongoDbUtils(collection)
    dict = {}
    data = db_utils.find(dict)
    total = data.count()
    index = 1
    invalid_index = 1
    for drama in data:
        for source in drama['sources']:
            for type in source['types']:
                if (type['url'].split('id_')[1].split('==')[0] == ''):
                    dic = {'id': drama['id']}
                    db_utils.delete(dic)
                    print('共'+(str)(total)+'个视频，正在查找第'+(str)(index)+'个视频，已删除'+(str)(invalid_index)+'个视频 -> ' + drama['id'] + ' ' + drama['name'])
                    invalid_index = invalid_index + 1
                index = index + 1

# 判断影视第二类型是否需要排除
def is_exclude_type2(type2):
    if (
            type2.find('福利片') != -1 or
            type2.find('伦理片') != -1 or
            type2.find('伦理类') != -1 or
            type2.find('音乐片') != -1 or
            type2.find('美女视频秀') != -1 or
            type2.find('嫩妹写真') != -1 or
            type2.find('VIP视频秀') != -1 or
            type2.find('高跟赤足视频') != -1 or
            type2.find('美女热舞写真') != -1 or
            type2.find('视讯美女') != -1 or
            type2.find('腿模写真') != -1 or
            type2.find('街拍系列') != -1 or
            type2.find('街拍美女视频') != -1 or
            type2 in get_exclude_type2_list()
    ):
        return True
    return False

# 判断当前资源是否需要爬取
def is_need_source(item, collection):
    db_utils = MongoDbUtils(collection)
    dic = {'name': item['name'], 'type': item['type']}
    movie_server = db_utils.find(dic)
    if (movie_server.count() == 0):
        return True
    if (item['update_status'] != movie_server.__getitem__(0)['update_status']):
        return True
    item_source = item['sources'][0]
    for source in movie_server.__getitem__(0)['sources']:
        if (source['name'] == item_source['name'] and len(source['types']) == len(item_source['types'])):
            return False
    return True

# 根据影视第二类型type2获取第一类型type
def get_type_from_type2(type2):
    type = ''
    if type2.find('综艺') != -1:
        type = '综艺'
    elif type2.find('动漫') != -1:
        type = '动漫'
    elif type2.find('片') != -1:
        type = '电影'
    elif type2.find('剧') != -1:
        type = '电视剧'
    return type

# 批量修改电视中的图片地址
def update_src_batch(old_suffix, new_suffix):
    collection = 'tv'
    db_utils = MongoDbUtils(collection)
    dic = {'src': {'$regex': '/'+old_suffix+'/'}}
    for item in db_utils.find(dic):
        dic = {'_id': item['_id']}
        splits = item['src'].split(old_suffix)
        new_dic = {'$set': {'src': splits[0] + new_suffix + splits[1]}}
        db_utils.update(dic, new_dic)

# 对数组中的元素去空格
def strip_arr(arr):
    new_arr = []
    for item in arr:
        new_arr.append(item.strip(' '))
    return new_arr

# 将一个数组逆序排列
def reverse_arr(arr):
    new_arr = []
    for i in reversed(arr):
        new_arr.append(i)
    return new_arr

# 向字典中添加新的元素
def insert_item_to_dic(dic, key, new_key, new_value):
    arr = dic.get(key)
    arr[new_key] = new_value
    dic[key] = arr
    return dic

# 转换电视中的类型
def reverse_tv_type(type):
    if (type == 'CCTV频道'): type = '央视台'
    elif (type == '卫视频道'): type = '卫视台'
    elif (type == '港澳台频道'): type = '港澳台'
    elif (type == '国外电视台'): type = '海外台'
    return type

# 转换地区
def reverse_region(region):
    if (region == '内地' or region == '中国' or region == '华语'):
        region = '大陆'
    elif (region == '美国' or region == '英国' or region == '法国' or region == '德国' or region == '意大利'):
        region = '欧美'
    elif (region == '中国香港' or region == '香港地区'):
        region = '香港'
    elif (region == '中国台湾'):
        region = '台湾'
    elif (region == '其它'):
        region = '其他'
    return region


# 转换影视第二类型
def reverse_type2(type2):
    if (type2 == '内地'):
        type2 = '国产剧'
    elif (type2 == '美国' or type2 == '英国'):
        type2 = '欧美剧'
    elif (type2 == '韩国'):
        type2 = '韩国剧'
    elif (type2 == '泰国'):
        type2 = '海外剧'
    elif (type2 == '日本'):
        type2 = '日本剧'
    elif (type2 == '中国香港'):
        type2 = '香港剧'
    elif (type2 == '中国台湾'):
        type2 = '台湾剧'
    elif (type2 == '其他'):
        type2 = '海外剧'
    elif (type2 == '儿童片'):
        type2 = '动画片'
    elif (type2 == '短片片'):
        type2 = '短片'
    elif (type2 == '奇幻片'):
        type2 = '科幻片'
    elif (type2 == '魔幻片'):
        type2 = '科幻片'
    elif (type2 == '励志片'):
        type2 = '剧情片'
    elif (type2 == '公益片'):
        type2 = '剧情片'
    elif (type2 == '西部片'):
        type2 = '其他片'
    elif (type2 == '戏曲片'):
        type2 = '其他片'
    elif (type2 == '黑色片'):
        type2 = '其他片'
    elif (type2 == '少儿片'):
        type2 = '动画片'
    elif (type2 == '西部片'):
        type2 = '其他片'
    elif (type2 == '电影节目片'):
        type2 = '纪录片'
    elif (type2 == '校园片'):
        type2 = '青春片'
    elif (type2 == '恋爱片'):
        type2 = '青春片'
    elif (type2 == '歌舞片'):
        type2 = '剧情片'
    elif (type2 == '记录片'):
        type2 = '纪录片'
    elif (type2 == '院线片'):
        type2 = '其他片'
    elif (type2 == '枪战片'):
        type2 = '动作片'
    elif (type2 == '印度片'):
        type2 = '其他片'
    elif (type2 == '华语片'):
        type2 = '其他片'
    elif (type2 == '儿童综艺片'):
        type2 = '其他片'
    elif (type2 == '美术片'):
        type2 = '其他片'
    elif (type2 == '机战片'):
        type2 = '其他片'
    elif (type2 == '故事片'):
        type2 = '其他片'
    elif (type2 == '公主片'):
        type2 = '其他片'
    elif (type2 == '悲剧片'):
        type2 = '其他片'
    elif (type2 == '文艺片'):
        type2 = '其他片'
    elif (type2 == 'LOLI片'):
        type2 = '其他片'
    elif (type2 == '国学片'):
        type2 = '其他片'
    elif (type2 == '学英语片'):
        type2 = '其他片'
    elif (type2 == '识字片'):
        type2 = '其他片'
    elif (type2 == '百科片'):
        type2 = '其他片'
    elif (type2 == '漫改片'):
        type2 = '其他片'
    elif (type2 == '网络大电影片'):
        type2 = '短片'
    elif (type2 == '亲情片'):
        type2 = '家庭片'
    elif (type2 == '喜剧剧'):
        type2 = '喜剧'
    elif (type2 == '奇幻剧'):
        type2 = '科幻剧'
    elif (type2 == '抗日剧'):
        type2 = '谍战剧'
    elif (type2 == '魔幻剧'):
        type2 = '科幻剧'
    elif (type2 == '校园剧'):
        type2 = '青春剧'
    elif (type2 == '搞笑剧'):
        type2 = '喜剧'
    elif (type2 == '玄幻剧'):
        type2 = '古装剧'
    elif (type2 == '时装剧'):
        type2 = '其他剧'
    elif (type2 == '职场剧'):
        type2 = '其他剧'
    elif (type2 == '经侦剧'):
        type2 = '刑侦剧'
    elif (type2 == '罪案剧'):
        type2 = '刑侦剧'
    elif (type2 == '医疗剧'):
        type2 = '其他剧'
    elif (type2 == '歌舞剧'):
        type2 = '其他剧'
    elif (type2 == '内地剧'):
        type2 = '国产剧'
    elif (type2 == '日剧'):
        type2 = '日本剧'
    elif (type2 == '韩剧'):
        type2 = '韩国剧'
    elif (type2 == '台剧'):
        type2 = '台湾剧'
    elif (type2 == '港剧'):
        type2 = '香港剧'
    elif (type2 == '连续剧'):
        type2 = '其他剧'
    elif (type2 == '韩国喜剧'):
        type2 = '喜剧'
    elif (type2 == '国产喜剧'):
        type2 = '喜剧'
    elif (type2 == '欧美喜剧'):
        type2 = '喜剧'
    elif (type2 == '台湾喜剧'):
        type2 = '喜剧'
    elif (type2 == '欧美剧家庭 喜剧'):
        type2 = '喜剧'
    elif (type2 == '日剧喜剧'):
        type2 = '喜剧'
    elif (type2 == '泰剧喜剧'):
        type2 = '喜剧'
    elif (type2 == '泰剧家庭 喜剧'):
        type2 = '喜剧'
    elif (type2 == '港剧喜剧'):
        type2 = '喜剧'
    elif (type2 == '日剧家庭 喜剧'):
        type2 = '喜剧'
    elif (type2 == '越南剧'):
        type2 = '海外剧'
    elif (type2 == '优酷出品剧'):
        type2 = '其他剧'
    elif (type2 == '港剧家庭 喜剧'):
        type2 = '喜剧'
    elif (type2 == '近代剧'):
        type2 = '其他剧'
    elif (type2 == '漫画改编剧'):
        type2 = '其他剧'
    elif (type2 == '动画剧'):
        type2 = '儿童剧'
    elif (type2 == '原创剧'):
        type2 = '其他剧'
    elif (type2 == '院线剧'):
        type2 = '其他剧'
    elif (type2 == '自制剧'):
        type2 = '其他剧'
    elif (type2 == '言情剧'):
        type2 = '剧情剧'
    elif (type2 == '商战剧'):
        type2 = '剧情剧'
    elif (type2 == '侦探剧'):
        type2 = '刑侦剧'
    return type2


# 获取年份
def get_year():
    # 优化格式化化版本
    format = '%Y'
    return time.strftime(format, time.localtime(time.time()))

# 获取当前时间
def get_current_time(format='%Y-%m-%d %H:%M:%S'):
    # 优化格式化化版本
    return time.strftime(format, time.localtime(time.time()))


# 产生指定范围的随机数，小数的范围m ~ n，小数的精度p
def get_random_str(m=5, n=10, p=1):
    a = random.uniform(m, n)
    return (str)(round(a, p))


# 从xpath中获取数组
def get_arr_from_xpath(xpath):
    if len(xpath) == 0:
        return []
    else:
        return (str)(xpath[0]).split(',')


# 从xpath中获取字符串
def get_str_from_xpath(xpath):
    if len(xpath) == 0:
        return ''
    else:
        return (str)(xpath[0]).strip()


# 下载文件
def downloadFile(url, path, name):
    resp = requests.get(url=url, stream=True, verify=False)
    # stream=True的作用是仅让响应头被下载，连接保持打开状态，
    content_size = int(resp.headers['Content-Length']) / 1024  # 确定整个安装包的大小
    with open(path + '/' + name, "wb") as f:
        print("整个文件大小是是：", content_size / 1024, 'M')
        for data in tqdm(iterable=resp.iter_content(1024), total=content_size, unit='k', desc=name):
            # 调用iter_content，一块一块的遍历要下载的内容，搭配stream=True，此时才开始真正的下载
            # iterable：可迭代的进度条 total：总的迭代次数 desc：进度条的前缀
            f.write(data)


# g_tk算法
def get_g_tk(p_skey):
    hashes = 5381
    for letter in p_skey:
        hashes += (hashes << 5) + ord(letter)  # ord()是用来返回字符的ascii码
    return (str)(hashes & 0x7fffffff)


# 创建文件夹
def mkdir(path):
    # 引入模块
    import os
    # 去除首位空格
    path = path.strip()
    # 去除尾部 \ 符号
    path = path.rstrip("\\")
    # 判断路径是否存在
    # 存在     True
    # 不存在   False
    isExists = os.path.exists(path)
    # 判断结果
    if not isExists:
        # 如果不存在则创建目录
        # 创建目录操作函数
        os.makedirs(path)
        print(path + ' 创建成功')
    else:
        # 如果目录存在则不创建，并提示目录已存在
        print(path + ' 目录已存在')
    return True


# 滑动到页面最低端
def scrollToBottom(driver, frame_name):
    driver.switch_to.frame(frame_name)
    source1 = driver.page_source
    driver.switch_to.parent_frame()
    driver.execute_script("window.scrollTo(0,document.body.scrollHeight)");
    time.sleep(4)
    driver.switch_to.frame(frame_name)
    source2 = driver.page_source
    while source1 != source2:
        source1 = source2
        driver.switch_to.parent_frame()
        driver.execute_script("window.scrollTo(0,document.body.scrollHeight)");
        time.sleep(4)
        driver.switch_to.frame(frame_name)
        source2 = driver.page_source


# 判断数据是否爬取
def check_spider_history(type, url, text='爬取'):
    if os.path.exists(abspath + '/documentations/history/' + type + '.txt') == False:
        return False
    histories = get_spider_history(type)
    if url + '\n' in histories:
        print(type + ' -> ' + url + ' 已' + text)
        return True
    else:
        print(type + ' -> ' + url + ' 未' + text)
        return False
    return url in histories


# 读取数据爬取的历史
def get_spider_history(type):
    with open(abspath + '/documentations/history/' + type + '.txt', 'r') as f:
        list = []
        while True:
            line = f.readline()  # 整行读取数据
            if not line:
                break
            list.append(line)
    return list


# 写入数据爬取的历史
def write_spider_history(type, url, text='写入成功'):
    with open(abspath + '/documentations/history/' + type + '.txt', 'a') as f:
        f.write(url)
        f.write('\n')
        print(type + ' -> ' + url + ' ' + text)
    f.close()


# 更新视频解析网站的哈希值
def update_parsevideo_hash():
    html = get_one_page('https://pocket.mynatapp.cc')
    pattern = '[\s\S]*?var hash = "([\s\S]*?)"[\s\S]*?'
    old_hash = ''
    for tmp_hash in parse_one_page(html, pattern):
        old_hash = tmp_hash
    html = get_one_page('https://www.parsevideo.com/')
    pattern = '[\s\S]*?var hash = "([\s\S]*?)"[\s\S]*?'
    new_hash = ''
    for tmp_hash in parse_one_page(html, pattern):
        new_hash = tmp_hash
    html = get_one_page('https://pocket.mynatapp.cc')
    html = html.replace('var hash = "' + old_hash + '";', 'var hash = "' + new_hash + '";')
    with open('../../../Web/PocketFilm/views/index.html', 'w') as f:
        f.write(html)


# 解决视频解析时的验证码问题
def solve_parsevideo_captche(url='https://pocket.mynatapp.cc/#https://v.youku.com/v_show/id_XMzc5OTM0OTAyMA==.html'):
    driver = get_driver(1)
    driver.maximize_window()
    driver.get(url)
    html = driver.page_source
    if 'style="margin-bottom: 15px;display: none"' in html:
        driver.find_element_by_id('url_submit_button').click()
        time.sleep(2)
        element = driver.find_element_by_id('captcha_img')
        capture(driver, element)
        code = captcha()
        driver.find_element_by_id('captcha_code').send_keys(code)
        driver.find_element_by_id('captcha_sbumit').click()
        time.sleep(2)
        driver.refresh()
    else:
        print('当前不用输入验证码')
    driver.quit()


# 裁剪指定元素
def capture(driver, element, image_path=abspath + '/image', image_name='captcha'):
    """
    截图,指定元素图片
    :param element: 元素对象
    :return: 无
    """
    """图片路径"""
    timestrmap = time.strftime('%Y%m%d_%H.%M.%S')
    imgPath = os.path.join(image_path, '%s.png' % image_name)

    """截图，获取元素坐标"""
    driver.save_screenshot(imgPath)
    left = element.location['x'] + 66
    top = element.location['y'] + 417
    elementWidth = left + element.size['width'] + 60
    elementHeight = top + element.size['height'] + 20

    picture = Image.open(imgPath)
    picture = picture.crop((left, top, elementWidth, elementHeight))
    timestrmap = time.strftime('%Y%m%d_%H.%M.%S')
    imgPath = os.path.join(image_path, '%s.png' % image_name)
    picture.save(imgPath)
    print('元素图标保存位置 -> ' + image_path + '/' + image_name)


# 识别验证码
def captcha(image_path=abspath + '/image/captcha.png'):
    # 用户名
    username = 'Grayson_WP'
    # 密码
    password = 'weipeng185261'
    # 软件ＩＤ，开发者分成必要参数。登录开发者后台【我的软件】获得！
    appid = 7961
    # 软件密钥，开发者分成必要参数。登录开发者后台【我的软件】获得！
    appkey = 'f8c23d784f261f08f028ada4c07fa36b'
    # 图片文件
    filename = image_path
    # 验证码类型，# 例：1004表示4位字母数字，不同类型收费不同。请准确填写，否则影响识别率。在此查询所有类型 http://www.yundama.com/price.html
    codetype = 1004
    # 超时时间，秒
    timeout = 60
    # 检查
    if (username == 'username'):
        return None
        print('请设置好相关参数再测试')
    else:
        # 初始化
        yundama = YDMHttp(username, password, appid, appkey)
        # 登陆云打码
        uid = yundama.login();
        print('uid: %s' % uid)
        # 查询余额
        balance = yundama.balance();
        print('balance: %s' % balance)
        # 开始识别，图片路径，验证码类型ID，超时时间（秒），识别结果
        cid, result = yundama.decode(filename, codetype, timeout);
        print('cid: %s, result: %s' % (cid, result))
        return result


# 获取一个页面的源代码
def get_one_page(url, encode='utf-8'):
    if encode == None:
        encode = 'utf-8'
    response = get_response(url)
    response.encoding = encode
    if response.status_code == 200:
        return response.text
    return None


# 根据 url 获取响应数据
def get_response(url):
    ua_header = {
        'User-Agent': 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14'
    }
    return requests.get(url, headers=ua_header, verify=False, timeout=60)


# 解析一个页面的信息
def parse_one_page(html, pattern):
    pattern = re.compile(pattern)
    try:
        items = re.findall(pattern, html)
        for item in items:
            yield item
    except:
        yield ()


# 通过xpath解析一个页面的信息
def parse_one_page_with_xpath(html, xpath_pattern):
    return etree.HTML(html)


# 获取视频解析后的地址
def get_movie_parse_url(url):
    driver = get_driver()
    driver.get(url)
    data = driver.execute_script('return parent.now')
    return data


# 获取 web 驱动
def get_driver(type=0):
    # PhantomJS
    if type == 0:
        driver = webdriver.PhantomJS(
            executable_path=abspath + '/phantomjs/bin/phantomjs')
        # executable_path='/usr/local/software/phantomjs-2.1.1-linux-x86_64/bin/phantomjs')
    # Chrome
    if type == 1:
        # 加启动配置
        options = webdriver.ChromeOptions()
        # 隐藏Chrome浏览器
        options.add_argument('--headless')
        # 禁用GPU
        options.add_argument('--disable-gpu')
        # 开启实验性功能参数
        options.add_experimental_option('excludeSwitches', ['enable-automation'])
        options.add_experimental_option("prefs", {
            # 设置默认下载路径
            "download.default_directory": "/Users/weipeng/Personal/Projects/YoutubeVideoDownloader/YoutubeVideoDownloader/",
            "download.prompt_for_download": True,
            "download.directory_upgrade": True,
            "safebrowsing.enabled": True,
            # 设置自动加载flash
            "profile.managed_default_content_settings.images": 1,
            "profile.content_settings.plugin_whitelist.adobe-flash-player": 1,
            "profile.content_settings.exceptions.plugins.*,*.per_resource.adobe-flash-player": 1,
        })
        # 打开Chrome浏览器
        driver = webdriver.Chrome(abspath + '/webdriver/chromedriver/chromedriver', chrome_options=options)
    # 设置超时时间
    # driver.set_page_load_timeout(60)
    # driver.set_script_timeout(60)
    return driver


# 获取数组中的第一个元素
def get_first_item(arr):
    count = 0
    for item in arr:
        if count == 0:
            return item
        count += 1
