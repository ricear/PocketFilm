#!bin/bash
# 说明
echo '本程序是停止推荐程序：包括掌上影视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上影视：movie
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部推荐程序：sh stop_recommender.sh.sh
echo 启动掌上影视推荐程序：sh stop_recommender.sh.sh movie
echo 启动掌上影视、掌上戏曲推荐程序：sh stop_recommender.sh.sh movie,drama
echo ''

# 程序
string=$1
array=[]
if [ ! $1 ]; then
	string="movie,drama,piece"
fi
ps -ef | grep 'start_recommender'${var} | grep -v grep |awk '{print $2}' | xargs kill -9
array=(${string//,/ })
for var in ${array[@]}
do
	# 停止服务
	echo '正在停止 '${var} 
	ps -ef | grep "recommender.py "${last} | grep -v grep |awk '{print $2}' | xargs kill -9
	echo ${var} ' 停止成功'
done
