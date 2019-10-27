#!bin/bash
pid=`ps -ef | grep "mongod" | grep -v grep |awk '{print $2}'`
echo $pid