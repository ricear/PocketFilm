from queue import Queue

from PocketLifeSpider.util.CommonUtils import *

__author__ = "nMask"
__Date__ = "20170224"
__Blog__ = "http://thief.one"

from selenium import webdriver
import threading
import time


class conphantomjs:
    phantomjs_max = 1  ##同时开启phantomjs个数
    jiange = 0.00001  ##开启phantomjs间隔
    timeout = 20  ##设置phantomjs超时时间
    path = get_phantomjs_path()  ##phantomjs路径
    service_args = ['--load-images=no', '--disk-cache=yes']  ##参数设置

    def __init__(self):
        self.q_phantomjs = Queue()  ##存放phantomjs进程队列

    def getbody(self, url):
        '''
        利用phantomjs获取网站源码以及url
        '''
        d = self.q_phantomjs.get()

        try:
            d.get(url)
        except:
            print("Phantomjs Open url Error")

        url = d.current_url

        self.q_phantomjs.put(d)

        print(url)

    def open_phantomjs(self):
        '''
        多线程开启phantomjs进程
        '''

        def open_threading():
            d = webdriver.PhantomJS(conphantomjs.path, service_args=conphantomjs.service_args)
            d.implicitly_wait(conphantomjs.timeout)  ##设置超时时间
            d.set_page_load_timeout(conphantomjs.timeout)  ##设置超时时间

            self.q_phantomjs.put(d)  # 将phantomjs进程存入队列

        th = []
        for i in range(conphantomjs.phantomjs_max):
            t = threading.Thread(target=open_threading)
            th.append(t)
        for i in th:
            i.start()
            time.sleep(conphantomjs.jiange)  # 设置开启的时间间隔
        for i in th:
            i.join()

    def close_phantomjs(self):
        '''
        多线程关闭phantomjs对象
        '''
        th = []

        def close_threading():
            d = self.q_phantomjs.get()
            d.quit()

        for i in range(self.q_phantomjs.qsize()):
            t = threading.Thread(target=close_threading)
            th.append(t)
        for i in th:
            i.start()
        for i in th:
            i.join()


if __name__ == "__main__":
    '''
    用法：
    1.实例化类
    2.运行open_phantomjs 开启phantomjs进程
    3.运行getbody函数，传入url
    4.运行close_phantomjs 关闭phantomjs进程
    '''
    cur = conphantomjs()
    conphantomjs.phantomjs_max = 10
    cur.open_phantomjs()
    print("phantomjs num is ", cur.q_phantomjs.qsize())

    url_list = ["http://www.baidu.com"] * 50

    th = []
    for i in url_list:
        t = threading.Thread(target=cur.getbody, args=(i,))
        th.append(t)
    for i in th:
        i.start()
    for i in th:
        i.join()

    cur.close_phantomjs()
    print ("phantomjs num is ", cur.q_phantomjs.qsize())