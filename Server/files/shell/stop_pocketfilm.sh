#!bin/bash
# 说明
echo '本程序是终止掌上系列程序，包括掌上、掌上影视、掌上电视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上：www
echo 掌上影视：movie
echo 掌上电视：tv
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部程序：sh stop_pocketfilm.sh
echo 启动掌上影视：sh stop_pocketfilm.sh movie
echo 启动掌上影视、掌上电视：sh stop_pocketfilm.sh movie,tv
echo ''

# 程序
string=$1
array=[]
if [ ! $1 ]; then
	string="www,movie,tv,drama,piece"
fi
array=(${string//,/ })
for var in ${array[@]}
do
	echo 正在终止 ${var}
	ps -ef | grep ${var}'-' | grep -v grep |awk '{print $2}' | xargs kill -9
	echo ${var} 已终止
done