import os
import sys

from scrapy.cmdline import execute

if __name__ == '__main__':

    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    # movie
    # execute(["scrapy", "crawl", "movie", "-a", "target=1"])
    # execute(["scrapy", "crawl", "movie", "-a", "target=1", "-a", "keyword=余罪"])
    # zuida
    # execute(["scrapy", "crawl", "zuida"])
    execute(["scrapy", "crawl", "zuida", "-a", "target=latest"])
    # kuyun
    # execute(["scrapy", "crawl", "kuyun"])
    # execute(["scrapy", "crawl", "kuyun", "-a", "target=latest"])
    # tencent
    # execute(["scrapy", "crawl", "tencent"])
    # execute(["scrapy", "crawl", "tencent", "-a", "target=latest"])
    # youku
    # execute(["scrapy", "crawl", "youku"])
    # execute(["scrapy", "crawl", "youku", "-a", "target=latest"])
    # iqiyi
    # execute(["scrapy", "crawl", "iqiyi"])
    # execute(["scrapy", "crawl", "iqiyi", "-a", "target=latest"])
    # yongjiu
    # execute(["scrapy", "crawl", "yongjiu"])
    # execute(["scrapy", "crawl", "yongjiu", "-a", "target=latest"])
    # ziyuan135
    # execute(["scrapy", "crawl", "ziyuan135"])
    # execute(["scrapy", "crawl", "ziyuan135", "-a", "target=latest"])
    # ok
    # execute(["scrapy", "crawl", "ok"])
    # ziyuan33uu
    # execute(["scrapy", "crawl", "ziyuan33uu"])
    # execute(["scrapy", "crawl", "ziyuan33uu", "-a", "target=latest"])
    # movie_type
    # execute(["scrapy", "crawl", "movie_type"])
    # movie_source
    # execute(["scrapy", "crawl", "movie_source", "-a", "target=1", "-a", "keyword=破冰行动"])
    # tv
    # execute(["scrapy", "crawl", "tv"])
    # execute(["scrapy", "crawl", "tv", "-a", "target=latest"])
    # drama
    # execute(["scrapy", "crawl", "drama"])
    # execute(["scrapy", "crawl", "drama"], "-a", "target=latest")
    # drama_type
    # execute(["scrapy", "crawl", "drama_type"])
    # piece
    # execute(["scrapy", "crawl", "piece"])
    # execute(["scrapy", "crawl", "piece"], "-a", "target=latest")
    # piece2
    # execute(["scrapy", "crawl", "piece2"])
    # execute(["scrapy", "crawl", "piece2"], "-a", "target=latest")
    # piece_type
    # execute(["scrapy", "crawl", "piece_type"])