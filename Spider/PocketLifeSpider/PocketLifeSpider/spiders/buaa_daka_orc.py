import datetime
import re

from aip import AipOcr
from PocketLifeSpider.util.LoggerUtils import get_logger
from PocketLifeSpider.util.MySqlUtils import connect, add

APP_ID = '23019380'
API_KEY = 'dv4p2h8RhPWH42AZPreN0FLf'
SECRECT_KEY = 'RzIgq0MoSdKhYFh1XIs1obORAGs6Wl7z'
EXCLUDE_WORDS = [
    '姓名',
    '学号',
    '身份',
    '疑似或',
    '确',
    '确诊',
    '上报时',
    '间',
    '研究生',
    '今日未上',
    '报',
    '代填',
    '加载完成',
    'C加载中',
    'Z',
    '导出列表',
    '请输入搜索的关键字',
    '￡似或””工的'
]
DATABASE = 'buaa_daka'
client = AipOcr(APP_ID, API_KEY, SECRECT_KEY)

class Student:
    stu_name = ''

# 将数据存入mysql
def save_to_mysql(students, is_late=0):
    conn = connect(DATABASE)
    for student in students:
        upload_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sql = 'insert into daka_info (stu_name, upload_time, is_late) values (%s, %s, %s);'
        val = (student.stu_name, upload_time, is_late)
        add(conn, sql, val)

# 获取未打卡学生信息
def get_daka():
    # 解析未打卡信息
    img = open('../image/打卡/20201206.jpeg', 'rb').read()
    ret = client.basicGeneral(img)
    # ret = client.basicAccurate(img)
    clear_words = []
    students = []
    logger.info('Detail info for daka:')
    for index, item in enumerate(ret['words_result']):
        is_except = False
        words = item['words']
        logger.info(words)
        if index <= 2: continue
        if 'Z' in words: words = words[:words.index('Z')]
        if 'F' in words: words = words[:words.index('F')]
        if '-' in words: words = words[:words.index('-')]
        if '2' in words: words = words[:words.index('2')]
        for except_word in EXCLUDE_WORDS:
            if except_word in words:
                is_except = True
                break
        if is_except == True: continue
        if bool(re.search(r'\d', words)) == True: continue
        if words == '': continue
        clear_words.append(words)

    # 将未打卡信息进行过滤
    notice_info = ''
    logger.info('Clear info for daka:')
    for word in clear_words:
        notice_info += '@' + word + ' '
        student = Student()
        student.stu_name = word
        students.append(student)
        logger.info(student.stu_name)

    # 输出@信息
    logger.info('Notice info is: %s' % notice_info)

    # 将过滤后的未打卡信息数据存入mysql
    save_to_mysql(students)

if __name__ == '__main__':
    logger = get_logger('buaa_daka_orc', )
    get_daka()

