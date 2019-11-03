import json
import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *

if __name__ == '__main__':
    # modify_movie_type2(get_exclude_type2_list())
    driver = get_driver(0)
    url = 'http://www.haoqu.net/e/extend/tv.php?id=21457'
    html = get_one_page(url, encode='gbk')
    pattern = '[\s\S]*?signal =([\s\S]*?);'
    for str in parse_one_page(html, pattern):
        print(str.split("'")[1].split('$'))
    html = etree.HTML(html)
    print(html.xpath('//div[@class="item item-cover"]'))