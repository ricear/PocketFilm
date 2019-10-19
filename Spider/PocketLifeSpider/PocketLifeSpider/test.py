import requests
from bs4 import BeautifulSoup
import pymysql
import random

conn = pymysql.connect(
    host='127.0.0.1',
    user='root',
    password='weipeng185261',
    database='proxy',
    port=3306
)
cursor = conn.cursor()

if __name__ == "__main__":
    A = 5
    B = 10  # 小数的范围A ~ B
    a = random.uniform(A, B)
    C = 1  # 随机数的精度round(数值，精度)
    print((str)(round(a, C)))