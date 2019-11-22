#!/bin/bash
# 说明
echo '本程序是启动推荐程序：包括掌上影视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上影视：movie
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部推荐程序：sh start_pocketfilm.sh
echo 启动掌上影视推荐程序：sh start_pocketfilm.sh movie
echo 启动掌上影视、掌上戏曲推荐程序：sh start_spiders.sh movie,drama
echo ''

# 程序
cd '/usr/local/projects/PocketFilm/files/shell'
current_path=$("pwd")
parent_current_path=$(dirname ${current_path})
parent_parent_current_path=$(dirname ${parent_current_path})
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
	string="movie,drama,piece"
elif [ $1 == 'temp' ]; then
	string="movie,drama,piece"
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
	pid=`ps -ef | grep "recommender.py ${last} ${type}" | grep -v grep |awk '{print $2}'`
	echo "python3 recommender.py ${last} ${type}"
	echo $pid
	if [ ! $pid ]
	then
	# 获取当前目录
	file=${current_path}/nohup-${var}-${type}.txt
	echo ${file}
	# -f 参数判断 $file 是否存在
	if [ ! -f ${file} ]; then
 	touch ${file}
	fi
	# 启动服务
	echo ${last}' 运行完成，正在启动 '${var} 
	nohup /usr/local/python3/bin/python3 ${parent_parent_current_path}/Recommender/recommender.py ${var} $type >/dev/null 2>${file} &
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
	pid=`ps -ef | grep "recommender.py ${last} ${type}" | grep -v grep |awk '{print $2}'`
	echo "python3 recommender.py ${last} ${type}"
	echo $pid
	if [ ! $pid ]
	then
	# 获取当前目录
	file=${current_path}/nohup-${var}-${type}.txt
	echo ${file}
	# -f 参数判断 $file 是否存在
	if [ ! -f ${file} ]; then
 	touch ${file}
	fi
	# 启动服务
	echo ${last}' 运行完成，正在启动 '${var} 
	nohup /usr/local/python3/bin/python3 ${parent_parent_current_path}/Recommender/recommender.py ${var} $type >/dev/null 2>${file} &
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
