# -*- encoding=utf-8 -*-
'''''
author: orangleliu
pil处理图片，验证，处理
大小，格式 过滤
压缩，截图，转换

图片库最好用Pillow
还有一个测试图片test.jpg, 一个log图片，一个字体文件
'''

# 图片的基本参数获取
from QQAlbumDownloader.util.WaterMarkUtils import *

if __name__ == "__main__":
    source_path = '/Users/weipeng/Personal/Pictures/测试/WechatIMG8.jpeg'
    text_watermark(source_path)