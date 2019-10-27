#!bin/bash
# 说明
echo '本程序是复制掌上系列jar包，包括掌上、掌上影视、掌上电视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上：www
echo 掌上影视：movie
echo 掌上电视：tv
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部程序：sh copy_jars.sh
echo 启动掌上影视：sh copy_jars.sh movie
echo 启动掌上影视、掌上电视：sh copy_jars.sh movie,tv
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
	if [ $var == www ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../WWW/target/www-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
	elif [ $var == movie ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Movie/target/movie-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
	elif [ $var == tv ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../TV/target/tv-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
	elif [ $var == drama ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Drama/target/drama-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
	elif [ $var == piece ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Piece/target/piece-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
	fi
done