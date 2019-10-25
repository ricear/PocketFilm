#!bin/bash
# 说明
echo '本程序是启动爬虫程序'
echo '影视：腾讯视频(tencent)、优酷视频(youku)、爱奇艺视频(iqiyi)、最大资源(zuida)、酷云资源(kuyun)、永久资源(yongjiu)、ok资源(ok)、135资源(ziyuan135)、33uu资源(ziyuan33uu)'
echo '电视：好趣网(tv)'
echo '戏曲：戏曲屋(drama)'
echo '小品：小品屋(piece)、相声小品网(piece2)'
echo ''
echo 示例：
echo 启动全部爬虫：sh start_spiders.sh
echo 启动腾讯视频爬虫：sh start_spiders.sh tencent
echo 启动腾讯视频、优酷视频爬虫：sh start_spiders.sh tencent,youku
echo ''

# 程序
current_path=$("pwd")
parent_current_path=$(dirname ${current_path})
echo ${parent_current_path}
cd ${parent_current_path}
string=$1
array=[]
if [ ! $1 ]; then
	string="tencent,youku,iqiyi,zuida,kuyun,yongjiu,ok,ziyuan135,ziyuan33uu,tv,drama,piece,piece2"
elif [ $1 == 1 ]; then
	string="tencent,youku,iqiyi,zuida,kuyun,yongjiu"
elif [ $1 == 2 ]; then
	string="ok,ziyuan135,ziyuan33uu,tv,drama,piece,piece2"
elif [ $1 == 'temp' ]; then
	string="drama,iqiyi,ok,piece,piece2,tencent,ziyuan33uu,ziyuan135"
fi
array=(${string//,/ })
for var in ${array[@]}
do
	# 启动服务
	echo '正在启动 '${var} 
	# 获取当前目录
	file=${parent_current_path}/documentations/logs/${var}.txt
	# -f 参数判断 $file 是否存在
	if [ ! -f ${file} ]; then
 	touch ${file}
	fi
	nohup /Library/Frameworks/Python.framework/Versions/3.7/bin/scrapy crawl ${var} > ${file} &
	echo ${var} ' 启动成功'
done