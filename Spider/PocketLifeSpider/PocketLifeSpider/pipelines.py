# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
from PocketLifeSpider.util.CommonUtils import *
from PocketLifeSpider.util.MongoDbUtils import MongoDbUtils
from PocketLifeSpider.util.TypeUtils import TypeUtils

# 将爬取到的数据保存到数据库
class MovieSpiderPipeline(object):
    def process_item(self, item, spider):
        # 申请资源
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        # 将 tuple 类型转换为字符串
        for field in item.fields:
            if TypeUtils.typeof(item[field]) == 'tuple':
                item[field] = item[field][0]
        item['acquisition_time'] = get_current_time()
        if (item['acquisition_time'] == '未知'): item['acquisition_time'] = '0'
        db_utils.insert(dict(item))
        return item

# 将爬取到的数据保存到数据库
class ZuidaSpiderPipeline(object):
    def process_item(self, item, spider):

        item = dict(item)

        # 转换影视第二类型
        item['type2'] = reverse_type2(item['type2'])

        # 更新影视分类
        collection = 'movie_type'
        db_utils = MongoDbUtils(collection)
        dic = {'type': '分类'}
        names = db_utils.find(dic).__getitem__(0)['names']
        if (item['type2'] not in names):
            names.append(item['type2'])
            dic = {'type': '分类'}
            new_dic = {'$set': {'names': names}}
            db_utils.update(dic, new_dic)

        # 申请资源
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        item['acquisition_time'] = get_current_time()
        if (item['acquisition_time'] == '未知'): item['acquisition_time'] = '0'
        dic = {'name': item['name'], 'type': item['type']}
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
            item_source = item['sources'][0]
            sources_tmp.append(item_source)
            for source in movies1_temp['sources']:
                if (source['name'] == item_source['name']):
                    continue
                sources_tmp.append(source)
            newdic = {'$set': {'update_status': item['update_status'], 'sources': sources_tmp,
                               'update_time': item['update_time'],
                               'acquisition_time': item['acquisition_time']}}
            print(dic)
            print(newdic)
            db_utils.update(dic, newdic)
        else:
            print(item)
            db_utils.insert(item)
        return item

# 将爬取到的数据保存到数据库
class MovieTypeSpiderPipeline(object):
    def process_item(self, item, spider):
        # 申请资源
        collection = 'movie_type'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        item['acquisition_time'] = get_current_time()
        db_utils.insert(dict(item))
        return item

# 将爬取到的数据保存到数据库
class MovieSourceSpiderPipeline(object):
    def process_item(self, item, spider):
        # 申请资源
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        item['acquisition_time'] = get_current_time()
        if (item['acquisition_time'] == '未知'): item['acquisition_time'] = '0'
        dic = {'id': item['id']}
        new_dic = {'$set': {'sources': item['sources']}}
        db_utils.update(dic, new_dic)
        return item

# 将爬取到的数据保存到数据库
class TvSpiderPipeline(object):
    def process_item(self, item, spider):
        # 申请资源
        collection = 'tv'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        item['acquisition_time'] = get_current_time()
        if (item['acquisition_time'] == '未知'): item['acquisition_time'] = '0'
        db_utils.insert(dict(item))
        return item
