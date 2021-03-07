#!/usr/bin/python3

import numpy
import requests
from lxml import etree
from selenium import webdriver

# -*- coding: utf-8 -*-
# @Author   : Grayson
# @Time     : 2020-11-24 21:00
# @Email    : weipengweibeibei@163.com
# @Description  : 获取东方财富网行情中心的数据

# 获取 web 驱动
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 获取驱动
def get_driver(type=0):
    # PhantomJS
    if type == 0:
        driver = webdriver.PhantomJS(
            executable_path='/Users/weipeng/Personal/Projects/PocketFilm/Spider/PocketLifeSpider/PocketLifeSpider/phantomjs/bin/phantomjs')
    return driver

# 获取东方财富网行情中心的数据
def get_east_money(start_page, end_page):
    BASE_URL = 'https://quote.eastmoney.com/center/gridlist.html#hs_a_board'
    PAGE_SIZE = 20
    driver = get_driver(0)
    driver.get(BASE_URL)
    WebDriverWait(driver, 20, 0.5).until(EC.presence_of_element_located((By.CLASS_NAME, "paginate_page")))
    origin_html = driver.page_source
    driver.close()
    html = etree.HTML(origin_html)
    max_page = (int)(html.xpath("//span[@class='paginate_page']/a[last()]/text()")[0])
    # 起始页数为1和输入起始页数的最大值
    start_page = max(1, start_page)
    # 结束页数为max_page和输入结束页数的最小值
    end_page = min(max_page, end_page)
    index = 1
    for page_index in range(start_page, end_page+1):
        api_url = 'https://76.push2.eastmoney.com/api/qt/clist/get?pn=' + (str)(page_index) + '&pz=' + (str)(
            PAGE_SIZE) + '&po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152'
        response = requests.get(api_url)
        for data in response.json()['data']['diff']:
            # 最新价
            f2 = data['f2']
            # 涨跌幅
            f3 = data['f3']
            # 涨跌额
            f4 = data['f4']
            # 成交量(手)
            f5 = data['f5']
            # 成交额
            f6 = data['f6']
            # 振幅
            f7 = data['f7']
            # 换手率
            f8 = data['f8']
            # 市盈率(动态)
            f9 = data['f9']
            # 量比
            f10 = data['f10']
            # 五分钟涨跌
            f11 = data['f11']
            # 代码
            f12 = data['f12']
            # 名称
            f14 = data['f14']
            # 最高
            f15 = data['f15']
            # 最低
            f16 = data['f16']
            # 今开
            f17 = data['f17']
            # 昨收
            f18 = data['f18']
            # 总市值
            f20 = data['f20']
            # 流通市值
            f21 = data['f21']
            # 涨速
            f22 = data['f22']
            # 市净率
            f23 = data['f23']
            # 60日涨跌幅
            f24 = data['f24']
            # 年初至今涨跌幅
            f25 = data['f25']
            print(''
                  '%s/%s\t'
                  '序号: %s\t'
                  '代码: %s\t'
                  '名称: %s\t'
                  '最新价: %s\t'
                  '涨跌幅: %s\t'
                  '涨跌额: %s\t'
                  '成交量(手): %s\t'
                  '成交额: %s\t'
                  '振幅: %s\t'
                  '最高: %s\t'
                  '最低: %s\t'
                  '今开: %s\t'
                  '昨收: %s\t'
                  '换手率: %s\t'
                  '市盈率(动态): %s\t'
                  '市净率: %s\t'
                  '总市值: %s\t'
                  '流通市值: %s\t'
                  '60日涨跌幅: %s\t'
                  '涨速: %s\t'
                  '五分钟涨跌: %s'
                  % (
                      (str)(page_index),
                      (str)(end_page),
                      (str)(index),
                      f12,
                      f14,
                      f2,
                      f3,
                      f4,
                      f5,
                      f6,
                      f7,
                      f15,
                      f16,
                      f17,
                      f18,
                      f8,
                      f9,
                      f23,
                      f20,
                      f21,
                      f24,
                      f22,
                      f11,
                  ))
            index += 1

if __name__ == '__main__':
    # 起始页数
    start_page = (int)(input('请输入获取帖子起始页数：'))
    # 结束页数
    end_page = (int)((input('请输入获取帖子结束页数：')))
    # 获取东方财富网行情中心的数据
    get_east_money(start_page, end_page)
