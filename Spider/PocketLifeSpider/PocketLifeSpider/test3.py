import sys
import os

curPath = os.path.abspath(os.path.dirname(__file__))
rootPath = os.path.split(curPath)[0]
sys.path.append(rootPath)

from PocketLifeSpider.util.CommonUtils import *


if __name__ == '__main__':
    collection = 'piece_type'
    db_utils = MongoDbUtils(collection)
    dic = {'name': '其他'}
    piece_type = {'name': '', 'types': []}
    types = []
    for type in db_utils.find(dic).__getitem__(0)['types'][0]['types']:
        if (type not in types):
            types.append(type)
    new_dic = {'$set': {'types': types}}
    db_utils.update(dic, new_dic)