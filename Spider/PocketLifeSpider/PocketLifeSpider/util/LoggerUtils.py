#!/usr/bin/python
import logging
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

"""
工程使用需求：
1-不同日志名称
2-打印同时在控制台，也有文件
3-录活控制等级
"""

# logging.disable(logging.CRITICAL)   # 禁止输出日志

def get_logger(logger_name='default-log', log_file='', level=logging.DEBUG):
    logger = logging.getLogger(logger_name)
    logger.setLevel(level)   # 添加日志等级

    # 创建控制台 console handler
    ch = logging.StreamHandler()
        # 设置控制台输出时的日志等级
    ch.setLevel(logging.INFO)

    # 创建文件 handler
    LOG_PATH = BASE_DIR + '/log'
    log_file = os.path.join(LOG_PATH, logger_name + '.log')
    if os.path.exists(LOG_PATH) == False:
        os.mkdir(LOG_PATH)
    if os.path.exists(log_file) == False:
        f = open(log_file, "w+")
        f.close()
    fh = logging.FileHandler(filename=log_file, encoding='utf-8')
        # 设置写入文件的日志等级
    fh.setLevel(logging.INFO)
    # 创建 formatter
    formatter = logging.Formatter('%(asctime)s %(name)s %(levelname)s %(message)s')

    # 添加formatter
    ch.setFormatter(formatter)
    fh.setFormatter(formatter)

    # 把ch fh 添加到logger
    logger.addHandler(ch)
    logger.addHandler(fh)

    return logger