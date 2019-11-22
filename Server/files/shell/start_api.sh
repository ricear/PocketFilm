#!/bin/bash

#检查是否是root用户
if [ $(id -u) != "0" ]
then
        echo "Not the root user! Try using sudo command!"
        exit 1
fi
while :
do
	#监控服务是是否存活，这里是通过监控端口来监控服务，这里也可以替换为其他服务
	pid=`ps -ef | grep "app.js" | grep -v grep |awk '{print $2}'`
	echo $pid
	if [ ! $pid ]; then
	echo $(date +%T%n%F)" Restart api Services " >> api.log
	#重启服务
	nohup /usr/local/software/node-v10.16.3-linux-x64/bin/node /usr/local/projects/PocketFilm/Web/PocketFilm/app.js > nohup-api.out 2>&1 &
	fi
	sleep 10
done
