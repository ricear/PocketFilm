#!bin/bash
# 说明
echo '本程序是停止爬虫程序'
echo '影视：腾讯视频(tencent)、优酷视频(youku)、爱奇艺视频(iqiyi)、最大资源(zuida)、酷云资源(kuyun)、永久资源(yongjiu)、ok资源(ok)、135资源(ziyuan135)、33uu资源(ziyuan33uu)'
echo '电视：好趣网(tv)'
echo '戏曲：戏曲屋(drama)'
echo '小品：小品屋(piece)、相声小品网(piece2)'
echo ''
echo 示例：
echo 停止全部爬虫：sh stop_spiders.sh
echo 停止腾讯视频爬虫：sh stop_spiders.sh tencent
echo 停止腾讯视频、优酷视频爬虫：sh stop_spiders.sh tencent,youku
echo ''

# 程序
string=$1
array=[]
if [ ! $1 ]; then
	string="tencent,youku,iqiyi,zuida,kuyun,yongjiu,ok,ziyuan135,ziyuan33uu,tv,drama,piece,piece2"
fi
array=(${string//,/ })
for var in ${array[@]}
do
	# 停止服务
	echo '正在停止 '${var} 
	ps -ef | grep ${var} | grep -v grep |awk '{print $2}' | xargs kill -9
	echo ${var} ' 停止成功'
done