
from pymongo import MongoClient

settings = {
    "ip":'127.0.0.1',   #ip
    # "ip":'103.45.172.213',   #ip
    "port":27017,           #端口
    "db_name" : "pocket",    #数据库名字
}

class MongoDbUtils(object):
    def __init__(self, collection_name):
        try:
            self.conn = MongoClient(settings["ip"], settings["port"])
        except Exception as e:
            print(e)
        self.db = self.conn[settings["db_name"]]
        self.collection = self.db[collection_name]

    def insert(self,dic):
        print(type(dic).__name__)
        if type(dic).__name__ == 'dict':
            self.collection.insert_one(dic)
            print('insert success 1')
        else:
            self.collection.insert_many(dic)
            print('insert success ' + str(len(dic)))
        # 释放资源
        self.conn.close()

    def update(self,dic,newdic):
        count = self.collection.update_many(dic,newdic).modified_count
        print('update success ' + str(count))
        # 释放资源
        self.conn.close()

    def delete(self,dic):
        count = self.collection.delete_many(dic).deleted_count
        print('delete success ' + str(count))
        # 释放资源
        self.conn.close()
        return count

    def find(self,dic):
        if type(dic).__name__ == 'list':
            data = self.collection.find(dic[0], dic[1])
        else:
            data = self.collection.find(dic)
        print('find success ' + str(data.count()))
        # 释放资源
        self.conn.close()
        return data

    def aggregate(self, pipeline):
        data = self.collection.aggregate(pipeline)
        # 释放资源
        self.conn.close()
        return data

    def delete_same_item(self):
        pipeline = [
            {'$group': {'_id': '$id', 'count': {'$sum': 1}}},
            {'$match': {'count': {'$gt': 1}}}
        ]
        data = self.aggregate(pipeline)
        total = 0
        for item in data:
            dic = {'id': item['_id']}
            count = self.delete(dic)
            total += count
            print('正在删除第 ' + str(total) + ' 条数据')
        print('共删除 ' + str(total) + ' 条数据')