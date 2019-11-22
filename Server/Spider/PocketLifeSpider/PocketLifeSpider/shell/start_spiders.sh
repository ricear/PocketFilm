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
cd '/usr/local/projects/PocketFilm/Spider/PocketLifeSpider/PocketLifeSpider/shell'
current_path=$("pwd")
parent_current_path=$(dirname ${current_path})
echo ${parent_current_path}
cd ${parent_current_path}
string=$1
if [ ! $2 ]; then
	type="all"
else
	type=$2
fi
array=[]
if [ $1 == "all" ]; then
	string="tencent,youku,iqiyi,zuida,kuyun,yongjiu,ok,ziyuan135,ziyuan33u,ziyuan40,drama,piece,piece2,piece3,piece4"
elif [ $1 == 'daily' ]; then
	string="drama,piece,piece2"
elif [ $1 == 'temp' ]; then
	string="drama,piece3,piece4"
fi
array=(${string//,/ })
if [ $type == 'all' ]; then
# 爬取全部数据
i=0
while :
do
	var=${array[$i]}
	if [ $i == 0 ]; then
	last=${var}
	fi
   	#监控服务是是否存活，这里是通过监控端口来监控服务，这里也可以替换为其他服务
	pid=`ps -ef | grep "scrapy crawl ${last} -a target=all" | grep -v grep |awk '{print $2}'`
	echo "scrapy crawl ${last}"
	echo $pid
	if [ ! $pid ]
	then
	# 启动服务
	echo ${last}' 运行完成，正在启动 '${var} 
	# 获取当前目录
	file=${parent_current_path}/documentations/logs/${var}-${type}.txt
	# -f 参数判断 $file 是否存在
	if [ ! -f ${file} ]; then
 	touch ${file}
	fi
	nohup /usr/local/python3/bin/scrapy crawl ${var} -a target=all > ${file} 2>&1 &
	echo ${var} ' 启动成功'
	i=$(($i+1))
	echo $i
	if [ $i == ${#array[@]} ]; then
	break
	fi
	last=$var
	fi
	sleep 10
done
else
# 爬取最新数据
while :
do
i=0
while :
do
	var=${array[$i]}
	if [ $i == 0 ]; then
	last=${var}
	fi
    	#监控服务是是否存活，这里是通过监控端口来监控服务，这里也可以替换为其他服务
	pid=`ps -ef | grep "scrapy crawl ${last} -a target=latest" | grep -v grep |awk '{print $2}'`
	echo "scrapy crawl ${last} -a target=latest"
	echo $pid
	if [ ! $pid ]
	then
	# 启动服务
	echo ${last}' 运行完成，正在启动 '${var} 
	# 获取当前目录
	file=${parent_current_path}/documentations/logs/${var}-${type}.txt
	# -f 参数判断 $file 是否存在
	if [ ! -f ${file} ]; then
 	touch ${file}
	fi
	nohup /usr/local/python3/bin/scrapy crawl ${var} -a target=latest > ${file} 2>&1 &
	echo ${var} ' 启动成功'
	i=$(($i+1))
	echo $i
	if [ $i == ${#array[@]} ]; then
	break
	fi
	last=$var
	fi
	sleep 10
done
sleep 600
done
fi
