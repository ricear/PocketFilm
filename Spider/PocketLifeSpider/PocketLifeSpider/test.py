import requests
from bs4 import BeautifulSoup
import pymysql
import random

from PocketLifeSpider.util.CommonUtils import *

conn = pymysql.connect(
    host='127.0.0.1',
    user='root',
    password='weipeng185261',
    database='proxy',
    port=3306
)
cursor = conn.cursor()

if __name__ == "__main__":
    update_src_batch('hq.18kf.net', 'hq.ioioz.com')