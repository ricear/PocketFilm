import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *


if __name__ == '__main__':
    db_utils = MongoDbUtils('movie')
    dic = [{'src': {'$regex': '/api.grayson.top/'}}, {'_id': 0, 'src': 1}]
    url_list = []
    for src in db_utils.find(dic):
        url = src['src']
        url_list.append(url)
    print(url)
    dic2 = [{'src': {'$regex': '/images.grayson.top/'}}, {'_id': 0, 'src': 1}]
    for src in db_utils.find(dic2):
        url = src['src']
        url_list.append(url)
    print(url)
    dic3 = [{'src': {'$nin': url_list}}, {'_id': 0, 'src': 1}]
    print(db_utils.find(dic3).__getitem__(0)['src'])