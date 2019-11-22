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
        update_status = item['update_status']
        if (update_status == '' or update_status == None):
            item['update_status'] = item['sources'][0]['name']

        # 申请资源
        collection = 'movie'
        db_utils = MongoDbUtils(collection)
        # 执行 sql
        item['acquisition_time'] = get_current_time()
        if (item['acquisition_time'] == '未知'): item['acquisition_time'] = '0'
        dic = {'name': item['name'], 'type': item['type']}
        movies1 = db_utils.find(dic)
        # 服务器中资源中的最大集数
        max = 0
        score = item['score']
        if (score == '0.0'):
            score = get_random_str()
        if (movies1.count() > 0):
            # 当前视频已爬取且更新，将新爬去的数据更新到数据库
            movies1_temp = movies1.__getitem__(0)
            movies1_source_names_temp = []
            sources_tmp = []
            for source in movies1_temp['sources']:
                if (len(list(filter(lambda type: '预告' not in type['name'], source['types']))) > max):
                    max = len(source['types'])
                movies1_source_names_temp.append(source['name'])
            item_source_names = []
            item_source_types_max = 0
            for item_source in item['sources']:
                sources_tmp.append(item_source)
                item_source_names.append(item_source['name'])
                if (len(item_source['types']) > item_source_types_max):
                    item_source_types_max = len(item_source['types'])
            for source in movies1_temp['sources']:
                if (source['name'] in item_source_names):
                    continue
                sources_tmp.append(source)
            # 修改影视最新更新状态
            if (item_source_types_max > max):
                update_status = item['update_status']
            else:
                update_status = movies1_temp['update_status']
            newdic = {'$set': {'update_status': update_status,
                               'sources': sources_tmp,
                               'score': score,
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
