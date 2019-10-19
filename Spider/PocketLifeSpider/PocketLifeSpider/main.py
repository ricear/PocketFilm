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
    # kuyun
    # execute(["scrapy", "crawl", "kuyun"])
    # tencent
    # execute(["scrapy", "crawl", "tencent"])
    # youku
    # execute(["scrapy", "crawl", "youku"])
    # iqiyi
    execute(["scrapy", "crawl", "iqiyi"])
    # movie_type
    # execute(["scrapy", "crawl", "movie_type"])
    # movie_source
    # execute(["scrapy", "crawl", "movie_source", "-a", "target=1", "-a", "keyword=破冰行动"])
    # tv
    # execute(["scrapy", "crawl", "tv"])
    # execute(["scrapy", "crawl", "tv", "-a", "keyword=CCTV-1"])
    # drama
    # execute(["scrapy", "crawl", "drama"])
    # execute(["scrapy", "crawl", "drama", "-a", "keyword=民间小调"])
    # drama_type
    # execute(["scrapy", "crawl", "drama_type"])
    # piece
    # execute(["scrapy", "crawl", "piece"])
    # piece_type
    # execute(["scrapy", "crawl", "piece_type"])