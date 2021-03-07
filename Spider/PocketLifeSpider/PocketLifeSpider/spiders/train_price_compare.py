#!/usr/bin/python3
import json
import time

import requests
from lxml import etree
from selenium import webdriver

# -*- coding: utf-8 -*-
# @Author   : Grayson
# @Time     : 2020-11-25 19:40
# @Email    : weipengweibeibei@163.com
# @Description  : 火车票比价

# 获取 web 驱动
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 车站信息
from PocketLifeSpider.util.CommonUtils import get_driver


class StationInfo:
    # 车站简称
    abbreviation = ''
    # 车站拼音
    pinyin = ''
    # 代码
    code = ''
    # 名称
    name = ''

if __name__ == '__main__':
    driver = get_driver(0)
    START_CITY = '北京'
    END_CITY = '驻马店'
    DATE = '2020-11-26'
    CTRIP_BASE_URL = 'e'

