#!bin/bash

# 终止服务
echo 正在终止 movie
ps -ef | grep 'scrapy crawl movie' | grep -v grep |awk '{print $2}' | xargs kill -9
echo movie 已终止

echo 正在终止 tv
ps -ef | grep 'scrapy crawl tv' | grep -v grep |awk '{print $2}' | xargs kill -9
echo tv 已终止

echo 正在终止 drama
ps -ef | grep 'scrapy crawl drama' | grep -v grep |awk '{print $2}' | xargs kill -9
echo drama 已终止

echo 正在终止 piece
ps -ef | grep 'scrapy crawl piece' | grep -v grep |awk '{print $2}' | xargs kill -9
echo piece 已终止