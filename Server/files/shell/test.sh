#!bin/bash
# 文件大小最大值为100M
max_size=104857600
echo $max_size
size=`ls -l /usr/local/projects/PocketFilm/Spider/PocketLifeSpider/PocketLifeSpider/shell/nohup-temp-latest.out  | awk '{ print $5 }'`
echo $size
if [ $size -ge $max_size ]; then
echo 1
else
echo 2
fi
