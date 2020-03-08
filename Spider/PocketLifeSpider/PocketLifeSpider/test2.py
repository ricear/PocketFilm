import requests
import time
import threading
import queue

if __name__ == '__main__':
    s = 'https://avatar.csdn.net/D/0/A/3_u013440574.jpg'
    urls = []
    [urls.append(s) for i in range(100)]
    q = queue.Queue()
    for url in urls:
        q.put(url)
    start = time.time()


    def fetch_img_func(q):
        while True:
            try:
                url = q.get_nowait()  # 不阻塞的读取队列数据
                if ('http' not in url and 'https' not in url):
                    url = 'https:' + url
                i = q.qsize() + 1
                res = get_requests().get(url, stream=True, timeout=60)
            except Exception as e:
                print(e)
                break
            print("当前还有%s个任务" % i)
            if res.status_code == 200:
                uuid = generate_uuid()
                save_img_path = Configs.IMAGES_PATH + '/%s.jpg' % uuid
                # 保存下载的图片
                print('正在下载第%s张图片' % i)
                with open(save_img_path, 'wb') as fs:
                    for chunk in res.iter_content(1024):
                        fs.write(chunk)
                print('正在修改第%s张图片' % i)
                print(url)
                dic = {'src': url}
                new_dic = {'$set': {'src': Configs.IMAGES_HOST + '/' + uuid + '.jpg'}}
                db_utils.update(dic, new_dic)
                print('修改完成')


    num = 10  # 线程数
    threads = []
    for i in range(num):
        t = threading.Thread(target=fetch_img_func, args=(q,), name="child_thread_%s" % i)
        threads.append(t)
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    print(time.time()-start)