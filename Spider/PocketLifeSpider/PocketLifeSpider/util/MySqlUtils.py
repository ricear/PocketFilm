# coding=utf-8
import mysql.connector  # 先安装mysql-connector-python-1.0.12-py3.3,再引入包  pip install mysql-connector

from PocketLifeSpider.util.LoggerUtils import get_logger

logger = get_logger('MySqlUtils', )

# 创建链接数据库
def connect(database):
    config = {'host': 'cloudserver',  # 默认127.0.0.1
              'user': 'root',
              'password': 'weipeng185261',
              'port': 10018,  # 默认即为3306
              'database': database,
              'charset': 'utf8'  # 默认即为utf8
              }
    try:
        mydb = mysql.connector.connect(**config)  # connect方法加载config的配置进行数据库的连接，完成后用一个变量进行接收
    except mysql.connector.Error as e:
        logger.error('数据库链接失败！', str(e))
    # try没有异常的时候才会执行
    logger.info("数据库连接sucessfully!")
    return mydb

# 插入
# sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
# val = ("RUNOOB", "https://www.runoob.com")
def add(mydb, sql, val):
    logger.info('exec sql is: %s, val is: %s' % (sql, val))
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql, val)
        mydb.commit()  # 数据表内容有更新，必须使用到该语句
        logger.info("%s%s" % (mycursor.rowcount, "条记录插入成功。"))
    except mysql.connector.Error as e:
        logger.error("%s%s" % ('记录插入失败', str(e)))


# 更新
# sql = "UPDATE sites SET name = %s WHERE name = %s"
# val = ("Zhihu", "ZH")
def update(mydb, sql, val):
    logger.info('exec sql is: %s, val is: %s' % (sql, val))
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql, val)
        mydb.commit()
        logger.info("%s%s" % (mycursor.rowcount, "条记录被修改"))
    except mysql.connector.Error as e:
        logger.error("%s%s" % ('记录修改失败', str(e)))


# 查询
# sql="SELECT * FROM sites"
def query(mydb, sql):
    logger.info('exec sql is: %s' % sql)
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        myresult = mycursor.fetchall()  # fetchall() 获取所有记录
        for x in myresult:
            logger.info(x)
        return myresult
    except mysql.connector.Error as e:
        logger.error("%s%s" % ('记录查询失败', str(e)))


# 删除
# sql = "DELETE FROM sites WHERE name = 'stackoverflow'"
def delete(mydb, sql):
    logger.info('exec sql is: %s' % sql)
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        mydb.commit()
        logger.info("%s%s" % (mycursor.rowcount, "条记录删除"))
    except mysql.connector.Error as e:
        logger.error("%s%s" % ('记录删除失败', str(e)))


if __name__ == '__main__':
    database = 'buaa_daka'
    connect(database)