import difflib
import datetime
from itertools import groupby
from operator import itemgetter

from util.MongoDbUtils import MongoDbUtils

# 对字典列表根据指定的key去重
def distinct(items,key):
    key = itemgetter(key)
    items = sorted(items, key=key)
    return [next(v) for _, v in groupby(items, key=key)]

# 获取昨天的日期
def get_yesterday():
    today=datetime.date.today()
    oneday=datetime.timedelta(days=1)
    yesterday=today-oneday
    return (str)(yesterday)

# 计算两个字符串的相似度
def get_equal_rate_1(str1, str2):
    if (str2 == None):
        str2 = ''
    if (type(str1).__name__ == 'list' or type(str2).__name__ == 'list'):
        str1 = '|'.join(str1)
        str2 = '|'.join(str2)
    return difflib.SequenceMatcher(None, str1.lower(), str2.lower()).quick_ratio()

# 计算影视的相似度
# 比较的项目：name、type、type2、region、language、release_date
def get_recommendations(movie_type, type):
    if (movie_type == 'movie'):
        types = ['name', 'type', 'type2', 'region', 'language', 'release_date', 'directors', 'actors']
        weight_types_dic = {'name': 2.5, 'type': 0.5, 'type2': 0.5, 'region': 0.5, 'language': 0.5, 'release_date': 0.5,
                            'directors': 2.5, 'actors': 2.5}
        collection = 'movie'
    elif (movie_type == 'drama'):
        types = ['name', 'type']
        weight_types_dic = {'name': 6, 'type': 4}
        collection = 'drama'
    elif (movie_type == 'piece'):
        types = ['name', 'type', 'type2', 'description']
        weight_types_dic = {'name': 4, 'type': 2, 'type2': 2, 'description': 2}
        collection = 'piece'
    # 计算所有影视之间的相似度
    db_utils = MongoDbUtils(collection)
    db_utils2 = MongoDbUtils(collection)

    if (type == 'all'):
        # 计算所有影视之间的相似度
        dic = {}
        dic2 = {}
    elif (type == 'latest'):
        # 计算最近更新的影视与其它影视之间的相似度
        dic = {'acquisition_time': {'$regex': '.*' +get_yesterday() + '.*'}}
        dic2 = {}

    # 计算当前影视与其它影视之间的相似度
    movies = db_utils.find(dic)
    total = movies.count() + 1
    for i, movie1 in enumerate(movies):
        collection = 'recommendations'
        db_utils3 = MongoDbUtils(collection)
        db_utils5 = MongoDbUtils(collection)
        tmp_dic = [{'$project': {"_id": 0, "euclidean": 0}}, {'$match': {"temp_id": movie1['_id']}}]
        movies2 = db_utils2.find(dic2)
        dic3 = {'temp_id': movie1['_id']}
        sort_movies = (list)(db_utils5.find(dic3).sort([('euclidean', -1)]))
        if (len(sort_movies) < 20):
            min_euclidean = 0
        else:
            min_euclidean = sort_movies[len(sort_movies) - 1]['euclidean']
        total2 = movies2.count() + 1
        recommendations = []
        for j, movie2 in enumerate(movies2):
            # 如果两个影视的_id相同(同一个影视)，则跳过
            if (movie2['_id'] == movie1['_id']):
                continue
            # 如果两个影视的相似度已获取，则跳过
            print('正在计算 ' + (str)(i + 1) + '/' + (str)(total) + ' ' + (str)(j + 1) + '/' + (str)(total2) + ' ' +
                  movie1['name'] + ' ' + movie2['name'])
            euclidean = calculate_euclidean(movie1, movie2, types, weight_types_dic)
            if (euclidean < min_euclidean):
                print('跳过 ' + (str)(i + 1) + '/' + (str)(total) + ' ' + (str)(j + 1) + '/' + (str)(total2) + ' ' +
                      movie1['name'] + ' ' + movie2['name'])
                continue
            recommendation = {'temp_id': movie1['_id'], 'temp_id2': movie2['_id'], 'euclidean': euclidean}
            recommendations.append(recommendation)
        recommendations = distinct(recommendations, 'temp_id2')
        recommendations = sorted(recommendations, key=lambda x: x['euclidean'], reverse=True)[:20]
        if (len(sort_movies) > 0 and recommendations[len(recommendations) - 1]['euclidean'] == sort_movies[len(sort_movies) - 1]['euclidean']):
            print(movie1['name'] + ' 推荐数据不用更新')
            continue
        # 删除当前影视的原有推荐数据，然后插入新的推荐数据
        try:
            db_utils5.delete(dic3)
            db_utils5.insert(recommendations)
        except:
            continue

    # 计算其他影视与当前影视的相似度，以便更新其他影视的推荐数据
    if (type == 'latest'):
        # 昨日有更新数据
        if (total > 1):
            movies = db_utils.find(dic2)
            total = movies.count() + 1
            for i, movie1 in enumerate(movies):
                collection = 'recommendations'
                db_utils5 = MongoDbUtils(collection)
                db_utils6 = MongoDbUtils(collection)
                tmp_dic = [{'$project': {"_id": 0, "euclidean": 0}}, {'$match': {"temp_id": movie1['_id']}}]
                movies2 = db_utils2.find(dic)
                dic3 = {'temp_id': movie1['_id']}
                sort_movies = (list)(db_utils5.find(dic3).sort([('euclidean', -1)]))
                if (len(sort_movies) < 20):
                    min_euclidean = 0
                else:
                    min_euclidean = sort_movies[len(sort_movies) - 1]['euclidean']
                total2 = movies2.count() + 1
                recommendations = (list)(db_utils6.find(dic3).sort([('euclidean', -1)]))
                for j, movie2 in enumerate(movies2):
                    # 如果两个影视的_id相同(同一个影视)，则跳过
                    if (movie2['_id'] == movie1['_id']):
                        continue
                    # 如果两个影视的相似度已获取，则跳过
                    print('正在计算 ' + (str)(i + 1) + '/' + (str)(total) + ' ' + (str)(j + 1) + '/' + (str)(total2) + ' ' +
                          movie1['name'] + ' ' + movie2['name'])
                    euclidean = calculate_euclidean(movie1, movie2, types, weight_types_dic)
                    if (euclidean < min_euclidean):
                        print('跳过 ' + (str)(i + 1) + '/' + (str)(total) + ' ' + (str)(j + 1) + '/' + (str)(total2) + ' ' +
                              movie1['name'] + ' ' + movie2['name'])
                        continue
                    recommendation = {'temp_id': movie1['_id'], 'temp_id2': movie2['_id'], 'euclidean': euclidean}
                    recommendations.append(recommendation)
                recommendations = distinct(recommendations, 'temp_id2')
                recommendations = sorted(recommendations, key=lambda x: x['euclidean'], reverse=True)[:20]
                if (len(sort_movies) > 0 and recommendations[len(recommendations) - 1]['euclidean'] ==
                        sort_movies[len(sort_movies) - 1]['euclidean']):
                    print(movie1['name'] + ' 推荐数据不用更新')
                    continue
                # 删除当前影视的原有推荐数据，然后插入新的推荐数据
                print((str)(movie1['_id']) + ' ' + (str)(min_euclidean) + ' ' + (str)(recommendations[len(recommendations) - 1]['euclidean']))
                db_utils5.delete(dic3)
                try:
                    db_utils5.insert(recommendations)
                except:
                    continue


# 计算两个物品的相似度(欧几里德距离)
def calculate_euclidean(movie1,movie2, types, weight_types_dic):
    #如果两数据集数目不同，计算两者之间都对应有的数
    #计算欧几里德距离,并将其标准化
    sum = 0
    for i in range(len(types)):
        tmp_type = types[i]
        weight = weight_types_dic[tmp_type]
        tmp_type_content1 = movie1[tmp_type]
        tmp_type_content2 = movie2[tmp_type]
        if (type(tmp_type_content1).__name__ == 'list' and type(tmp_type_content2).__name__ == 'list'):
            tmp_type_content1 = '|'.join(tmp_type_content1)
            tmp_type_content2 = '|'.join(tmp_type_content2)
        similarity = weight * get_equal_rate_1(tmp_type_content1, tmp_type_content2)
        sum += similarity
        # print(tmp_type + ' ' + tmp_type_content1 + ' ' + tmp_type_content2 + ' ' + (str)(similarity))
    euclidean = sum / 10
    print(movie1['name'] + ' 和 ' + movie2['name'] + ' 相似度为 ' + (str)(euclidean) + '\n')
    return euclidean