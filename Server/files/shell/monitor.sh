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
	pid=`ps -ef | grep "mongod" | grep -v grep |awk '{print $2}'`
	if [ ! $pid ]; then
	echo $(date +%T%n%F)" Restart mongodb Services " >> mongodb.log
	#重启服务
	sudo /usr/local/software/mongodb-linux-x86_64-4.0.13/bin/mongod --config=/usr/local/etc/mongod.conf
	fi
	sleep 1
done
