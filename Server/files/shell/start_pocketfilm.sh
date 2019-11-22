#!bin/bash
# 说明
echo '本程序是启动掌上系列程序，包括掌上、掌上影视、掌上电视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上：www
echo 掌上影视：movie
echo 掌上电视：tv
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部程序：sh start_pocketfilm.sh
echo 启动掌上影视：sh start_pocketfilm.sh movie
echo 启动掌上影视、掌上电视：sh start_pocketfilm.sh movie,tv
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
		# 启动服务
		echo '正在启动 www '
		nohup java -Dfile.encoding=UTF-8 -jar ../jars/www-0.0.1-SNAPSHOT.jar > ../documentations/www.txt &
		echo 'www 启动成功'
	elif [ $var == movie ]; then
		# 启动服务
		echo '正在启动 movie '
		nohup java -Dfile.encoding=UTF-8 -jar ../jars/movie-0.0.1-SNAPSHOT.jar > ../documentations/movie.txt &
		echo 'movie 启动成功'
	elif [ $var == tv ]; then
		# 启动服务
		echo '正在启动 tv '
		nohup java -Dfile.encoding=UTF-8 -jar ../jars/tv-0.0.1-SNAPSHOT.jar > ../documentations/tv.txt &
		echo 'tv 启动成功'
	elif [ $var == drama ]; then
		# 启动服务
		echo '正在启动 drama '
		nohup java -Dfile.encoding=UTF-8 -jar ../jars/drama-0.0.1-SNAPSHOT.jar > ../documentations/drama.txt &
		echo 'drama 启动成功'
	elif [ $var == piece ]; then
		# 启动服务
		echo '正在启动 piece '
		nohup java -Dfile.encoding=UTF-8 -jar ../jars/piece-0.0.1-SNAPSHOT.jar > ../documentations/piece.txt &
		echo 'piece 启动成功'
	fi
done