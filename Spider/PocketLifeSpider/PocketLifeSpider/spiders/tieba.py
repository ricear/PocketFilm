# coding=utf-8
# 爬取百度贴吧数据
import codecs
import csv
import datetime
import urllib.parse
import logging
import os
import sys

import numpy
from lxml import etree
from selenium import webdriver

# 帖子信息
class TieziInfo:
    # 贴吧名称
    tieba_name = ''
    # 贴吧地址
    tieba_url = ''
    # 回复条数
    reply_num = ''
    # 帖子地址
    post_url = ''
    # 帖子主题
    post_title = ''
    # 帖子作者
    post_author = ''
    # 作者id
    post_author_id = ''
    # 作者首页地址
    post_author_home_url = ''
    # 帖子创建时间
    post_create_time = ''
    # 贴子内容
    post_content = ''
    # 帖子最近回复人
    post_latest_reply_user = ''
    # 帖子最近回复人首页地址
    post_latest_reply_user_home_url = ''
    # 帖子最后回复时间
    post_last_reply_time = ''

    def __init__(
            self,
            TIEBA_NAME,
            BASE_URL,
            reply_num,
            post_url,
            post_title,
            post_author,
            post_author_id,
            post_author_home_url,
            post_create_time,
            post_content,
            post_latest_reply_user,
            post_latest_reply_user_home_url,
            post_last_reply_time
    ):
        self.tieba_name = TIEBA_NAME
        self.tieba_url = BASE_URL
        self.reply_num = reply_num
        self.post_url = post_url
        self.post_title = post_title
        self.post_author = post_author
        self.post_author_id = post_author_id
        self.post_author_home_url = post_author_home_url
        self.post_create_time = post_create_time
        self.post_content = post_content
        self.post_latest_reply_user = post_latest_reply_user
        self.post_latest_reply_user_home_url = post_latest_reply_user_home_url
        self.post_last_reply_time = post_last_reply_time

# 将帖子信息保存为csv
def save_to_csv(tiezi_list):
    # 将数据写入csv
    # 1. 创建文件对象
    current_time = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    file_name = 'tiezi-' + current_time + '.csv'
    logger.info('Save to file: %s' % file_name)
    f = open(file_name, 'w', encoding='utf-8-sig')
    # 2. 基于文件对象构建 csv写入对象
    csv_writer = csv.writer(f)
    # 3. 构建列表头
    csv_writer.writerow([
        "贴吧名称",
        "贴吧地址",
        "回复条数",
        "帖子地址",
        "帖子主题",
        "帖子作者",
        "作者id",
        "作者首页地址",
        "帖子创建时间",
        "贴子内容",
        "帖子最近回复人",
        "帖子最近回复人首页地址",
        "帖子最后回复时间"
    ])
    # 4. 写入csv文件内容
    for tiezi in tiezi_list:
        csv_writer.writerow([
            tiezi.tieba_name,
            tiezi.tieba_url,
            tiezi.reply_num,
            tiezi.post_url,
            tiezi.post_title,
            tiezi.post_author,
            tiezi.post_author_id,
            tiezi.post_author_home_url,
            tiezi.post_create_time,
            tiezi.post_content,
            tiezi.post_latest_reply_user,
            tiezi.post_latest_reply_user_home_url,
            tiezi.post_last_reply_time
        ])
    # 5. 关闭文件
    f.close()

# 获取日志工具
def get_logger(logger_name='default-log', log_file='', level=logging.DEBUG):
    logger = logging.getLogger(logger_name)
    logger.setLevel(level)  # 添加日志等级

    # 创建控制台 console handler
    ch = logging.StreamHandler()
    # 设置控制台输出时的日志等级
    ch.setLevel(logging.INFO)

    # 把ch fh 添加到logger
    logger.addHandler(ch)

    return logger


# 获取今天的日期
def get_today():
    today = datetime.date.today()
    return (str)(today)


# 获取 web 驱动
def get_driver(type=0):
    # PhantomJS
    if type == 0:
        driver = webdriver.PhantomJS(
            executable_path='/Users/weipeng/Personal/Projects/PocketFilm/Spider/PocketLifeSpider/PocketLifeSpider/phantomjs/bin/phantomjs')
    return driver


# 获取贴吧主题信息
def get_tieba_topic(html):
    # 主题相关信息
    top_html_xpath = html.xpath('//*[@id="pagelet_frs-header/pagelet/head"]/div/div[3]/div[2]/div[2]')[0]
    # 主题图片地址
    topic_img_url = top_html_xpath.xpath('./div[1]/a/img/@src')[0]
    logger.info('主题图片地址: %s' % topic_img_url)
    # 主题名称
    topic_name = top_html_xpath.xpath('./div[2]/a/text()')[0].replace(' ', '').replace('\n', '')
    logger.info('主题名称: %s' % topic_name)
    # 主题关注人数
    topic_focus_num = top_html_xpath.xpath('./div[2]/div[2]/div[1]/span/span[2]/text()')[0]
    logger.info('主题关注人数: %s' % topic_focus_num)
    # 主题帖子数量
    topic_post_num = top_html_xpath.xpath('./div[2]/div[2]/div[1]/span/span[4]/text()')[0]
    logger.info('主题帖子数量: %s' % topic_post_num)
    # 帖子类别地址
    topic_type_url = TOP_PATH + top_html_xpath.xpath('./div[3]/ul/li[3]/a/@href')[0]
    logger.info('帖子类别地址: %s' % topic_type_url)
    # 帖子类别
    topic_type = top_html_xpath.xpath('./div[3]/ul/li[3]/a/text()')[0]
    logger.info('帖子类别: %s' % topic_type)


# 获取贴吧信息
def get_tieba_info(page_index, TIEBA_NAME, BASE_URL, page_size=50):
    current_url = BASE_URL + '&pn=' + (str)((page_index - 1) * page_size)
    driver.get(current_url)
    logger.info('Current tieba name is:%s, page is: %s, page size is: %s, url: %s' % (
    TIEBA_NAME, page_index + 1, page_size, current_url))
    orign_html = driver.page_source
    html = etree.HTML(orign_html)
    tiezi_list = []
    # 获取贴吧主题信息
    if (page_index == 0):
        get_tieba_topic(html)
        # 获取帖子信息
        logger.info('获取帖子信息')

    for li in html.xpath('//*[@id="thread_list"]/li'):
        today_str = get_today()
        # 回复条数
        reply_num_xpath = li.xpath('./div/div[1]/span/text()')
        if (len(reply_num_xpath) == 0): continue
        reply_num = reply_num_xpath[0]
        # 帖子地址
        post_url = TOP_PATH + li.xpath('./div/div[2]/div[1]/div[1]/a/@href')[0]
        # 帖子主题
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[1]/a
        post_title = li.xpath('./div/div[2]/div[1]/div[1]/a/@title')[0]
        # 帖子作者
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[1]
        post_author = li.xpath('./div/div[2]/div[1]/div[2]/span[1]/@title')[0].split(': ')[1]
        # 作者id
        post_author_id = li.xpath('./div/div[2]/div[1]/div[2]/span[1]/@data-field')[0].split(':')[1].split('}')[0]
        # 作者首页地址
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[1]/span[1]/a
        post_author_home_url = TOP_PATH + li.xpath('./div/div[2]/div[1]/div[2]/span[1]/span[1]/a/@href')[0]
        # 帖子创建时间
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[1]/div[2]/span[2]
        post_create_time = li.xpath('./div/div[2]/div[1]/div[2]/span[2]/text()')[0].strip()
        if '-' not in post_create_time:
            post_create_time = today_str + ' ' + post_create_time
        # 贴子内容
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[1]/div[1]
        post_content = li.xpath('.div/div[2]/div[2]/div[1]/div[1]/text()')
        # 帖子最近回复人
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[1]
        post_latest_reply_user = li.xpath('./div/div[2]/div[2]/div[2]/span/@title')[0].split('最后回复人: ')[1]
        # 帖子最近回复人首页地址
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[1]/a
        post_latest_reply_user_home_url = TOP_PATH + li.xpath('./div/div[2]/div[2]/div[2]/span[1]/a/@href')[0]
        # 帖子最后回复时间
        # //*[@id="thread_list"]/li[1]/div/div[2]/div[2]/div[2]/span[2]
        post_last_reply_time = (str)(li.xpath('./div/div[2]/div[2]/div[2]/span[2]/text()')[0].strip())
        if '-' not in post_last_reply_time:
            post_last_reply_time = today_str + ' ' + post_last_reply_time
        logger.info(
            '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s' %
            (reply_num,
             post_url,
             post_title,
             post_author,
             post_author_id,
             post_author_home_url,
             post_create_time,
             post_content,
             post_latest_reply_user,
             post_latest_reply_user_home_url,
             post_last_reply_time
             )
        )
        tiezi_info = TieziInfo(
            TIEBA_NAME,
            BASE_URL,
            reply_num,
            post_url,
            post_title,
            post_author,
            post_author_id,
            post_author_home_url,
            post_create_time,
            post_content,
            post_latest_reply_user,
            post_latest_reply_user_home_url,
            post_last_reply_time
        )
        tiezi_list.append(tiezi_info)
    return tiezi_list


if __name__ == '__main__':

    logger = get_logger('tieba', )

    TIEBA_NAME = input('请输入贴吧名称：')
    start_page = (int)(input('请输入获取帖子起始页数：'))
    end_page = (int)((input('请输入获取帖子结束页数：')))

    driver = get_driver(0)
    TOP_PATH = 'https://tieba.baidu.com'
    BASE_URL = TOP_PATH + '/f?ie=utf-8&kw=' + urllib.parse.quote(TIEBA_NAME)
    logger.info('贴吧名称：%s' % TIEBA_NAME)
    logger.info('地址：%s' % BASE_URL)

    # 获取贴吧主题相关信息
    logger.info('获取主题信息: %s' % BASE_URL)
    tiezi_list = []
    for page_index in range(start_page - 1, end_page):
        tiezi_list.append(get_tieba_info(page_index, TIEBA_NAME, BASE_URL))
    tiezi_list = list(numpy.concatenate(tiezi_list))

    # 将帖子信息保存为csv
    save_to_csv(tiezi_list)
