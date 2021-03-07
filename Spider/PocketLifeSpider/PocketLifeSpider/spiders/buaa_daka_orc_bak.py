import re

from aip import AipOcr

APP_ID = '23019380'
API_KEY = 'dv4p2h8RhPWH42AZPreN0FLf'
SECRECT_KEY = 'RzIgq0MoSdKhYFh1XIs1obORAGs6Wl7z'
EXCLUDE_WORDS = [
    '今日未上',
    '报',
    '代填',
    '今日未上代填',
    '今日未上「代填',
    '研究生',
    '加载完成',
    '今日上代填',
    'C加载中',
    '确'
]
client = AipOcr(APP_ID, API_KEY, SECRECT_KEY)

class Student:
    stu_no = ''
    stu_name = ''

if __name__ == '__main__':
    img = open('../image/打卡/20201120-4.jpeg', 'rb').read()
    # ret = client.basicGeneral(img)
    ret = client.basicAccurate(img)
    clear_words = []
    students = []
    clear_words2 = []

    next_except = False
    for index, item in enumerate(ret['words_result']):
        words = item['words']
        if index <= 5: continue
        if words in EXCLUDE_WORDS: continue
        if next_except == True:
            clear_words2.append(words)
            next_except = False
        if '研究生' in words:
            words = words.replace('研究生', '')
            clear_words2.append(words)
            next_except = True
            continue
        clear_words.append(words)
        print(words)
    print('')

    student = Student()
    for index, word in enumerate(clear_words):
        if (index + 1) % 3 == 0:
            student.stu_no += word
            contains_num = bool(re.search(r'\d', student.stu_name))
            if contains_num == True:
                # stu_no: 马亮45 stu_name: ZF20212
                tmp_stu_no = student.stu_name
                student.stu_name = student.stu_no[:-2]
                student.stu_no = tmp_stu_no + student.stu_no[-2:]
            print(student.stu_no, student.stu_name)
            students.append(student)
            student = Student()
        if (index + 1) % 3 == 1:
            student.stu_no = word
        if (index + 1) % 3 == 2:
            student.stu_name = word
    for index, word in enumerate(clear_words2):
        if index % 2 == 0:
            # ['钟一钧2F20214', '50']
            student = Student()
            student.stu_no = word[-7:]
            student.stu_name = word[:-7]
            continue
        student.stu_no += word
        if student.stu_no.startswith('2'):
            student.stu_no = student.stu_no.replace('2', 'Z', 1)
        print(student.stu_no, student.stu_name)
        students.append(student)
        student = Student()
