from util.CommonUtils import *
from util.MongoDbUtils import MongoDbUtils

if __name__ == '__main__':
    # drama
    types = ['name', 'type']
    weight_types_dic = {'name': 6, 'type': 4}

    # piece
    # types = ['name', 'type', 'type2', 'description']
    # weight_types_dic = {'name': 4, 'type': 2, 'type2': 2, 'description': 2}
    # 计算所有影视之间的相似度
    collection = 'drama'
    db_utils = MongoDbUtils(collection)
    drama1 = db_utils.find({'name': '沂蒙小调跑四川全集(共72集)'}).__getitem__(0)
    drama2 = db_utils.find({'name': '都市碎戏孝心不打折(下集)'}).__getitem__(0)
    calculate_euclidean(drama1, drama2, types, weight_types_dic)