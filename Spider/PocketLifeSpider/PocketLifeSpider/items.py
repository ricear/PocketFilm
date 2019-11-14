# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


# 影视
class MovieItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # id
    id = scrapy.Field()
    # 影视海报图片路径
    src = scrapy.Field()
    # 影视名
    name = scrapy.Field()
    # 更新状态
    update_status = scrapy.Field()
    # 别名
    nickname = scrapy.Field()
    # 导演
    directors = scrapy.Field()
    # 语言
    language = scrapy.Field()
    # 片长
    duration = scrapy.Field()
    # 更新时间
    update_time = scrapy.Field()
    # 主演
    actors = scrapy.Field()
    # 影视类型(电影、电视剧、综艺、动漫)
    type = scrapy.Field()
    # 影视类型(具体影视类型)
    type2 = scrapy.Field()
    # 评分
    score = scrapy.Field()
    # 发布日期
    release_date = scrapy.Field()
    # 介绍
    description = scrapy.Field()
    # 影视源
    sources = scrapy.Field()
    # 地区
    region = scrapy.Field()
    # 采集时间
    acquisition_time = scrapy.Field()

# 影视类型
class MovieTypeItem(scrapy.Item):
    # 类型
    type = scrapy.Field()
    # 名称
    names = scrapy.Field()
    # 采集时间
    acquisition_time = scrapy.Field()

# 电视
class TvItem(scrapy.Item):
    # 类型
    type = scrapy.Field()
    # 名称
    name = scrapy.Field()
    # 图片地址
    src = scrapy.Field()
    # 电视源
    sources = scrapy.Field()
    # 介绍
    introduction = scrapy.Field()
    # 采集时间
    acquisition_time = scrapy.Field()

# 戏曲
class DramaItem(scrapy.Item):
    # id
    id = scrapy.Field()
    # 戏曲海报
    src = scrapy.Field()
    # 名称
    name = scrapy.Field()
    # 说明
    description = scrapy.Field()
    # 类型
    type = scrapy.Field()
    # 更新时间
    update_time = scrapy.Field()
    # 简介
    introduction = scrapy.Field()
    # 戏曲说明
    drama_description = scrapy.Field()
    # 播放时长
    play_time = scrapy.Field()
    # 原始播放地址
    drama_url = scrapy.Field()
    # 戏曲源
    sources = scrapy.Field()
    # 采集时间
    acquisition_time = scrapy.Field()
