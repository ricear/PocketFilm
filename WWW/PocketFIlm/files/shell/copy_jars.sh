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
# 获取 jar 包
for var in ${array[@]}
do
	# 获取jar包
	echo '正在获取 '$var' 包'
	if [ $var == www ]; then
		cp ../../WWW/target/www-0.0.1-SNAPSHOT.jar ../jars/
	elif [ $var == movie ]; then
		cp ../../Movie/target/movie-0.0.1-SNAPSHOT.jar ../jars/
	elif [ $var == tv ]; then
		cp ../../TV/target/tv-0.0.1-SNAPSHOT.jar ../jars/
	elif [ $var == drama ]; then
		cp ../../Drama/target/drama-0.0.1-SNAPSHOT.jar ../jars/
	elif [ $var == piece ]; then
		cp ../../Piece/target/piece-0.0.1-SNAPSHOT.jar ../jars/
	fi
	echo $var' 包获取成功'
done

# 上传 jar 包
if [ ! $1 ]; then
# 将 jar 包上传到服务器
	echo '正在将 jar 包上传到服务器'
	scp ../jars/*.jar root@47.240.95.27:/usr/local/projects/PocketFilm/files/jars/
	echo '已完成'
else
for var in ${array[@]}
do
	# 将 jar 包上传到服务器
	echo '正在将 '$var' 包上传到服务器'
	scp ../jars/${var}-*.jar root@47.240.95.27:/usr/local/projects/PocketFilm/files/jars/
	echo '已完成'
done
fi