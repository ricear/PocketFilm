#!bin/bash
# 说明
echo '本程序是启动掌上系列程序，包括掌上、掌上影视、掌上电视、掌上戏曲、掌上小品'
echo ''
echo 对应代码
echo 掌上：www
echo 掌上影视：album
echo 掌上电视：tv
echo 掌上戏曲：drama
echo 掌上小品：piece
echo 示例：
echo 启动全部程序：sh start_pocketfilm.sh
echo 启动掌上影视：sh start_pocketfilm.sh album
echo 启动掌上影视、掌上电视：sh start_pocketfilm.sh album,tv
echo ''

# 程序
string=$1
array=[]
if [ ! $1 ]; then
	string="www,album,tv,drama,piece"
fi
array=(${string//,/ })
for var in ${array[@]}
do
	if [ $var == www ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../WWW/target/www-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
		# 启动服务
		echo '正在启动 www '
		nohup java -jar ../jars/www-0.0.1-SNAPSHOT.jar >> ../documentations/www.txt &
		echo 'album 启动成功'
	elif [ $var == album ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Movie/target/album-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
		# 启动服务
		echo '正在启动 www '
		nohup java -jar ../jars/www-0.0.1-SNAPSHOT.jar >> ../documentations/album.txt &
		echo 'album 启动成功'
	elif [ $var == tv ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../TV/target/tv-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
		# 启动服务
		echo '正在启动 www '
		nohup java -jar ../jars/tv-0.0.1-SNAPSHOT.jar >> ../documentations/tv.txt &
		echo 'album 启动成功'
	elif [ $var == drama ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Drama/target/drama-0.0.1-SNAPSHOT.jar ../jars/
		echo 'jar 包获取成功'
		# 启动服务
		echo '正在启动 www '
		nohup java -jar ../jars/drama-0.0.1-SNAPSHOT.jar >> ../documentations/drama.txt &
		echo 'album 启动成功'
	elif [ $var == piece ]; then
		# 获取jar包
		echo '正在获取 jar 包'
		cp ../../Piece/target/piece-0.0.1-SNAPSHOT.jar
		echo 'jar 包获取成功'
		# 启动服务
		echo '正在启动 www '
		nohup java -jar ../jars/piece-0.0.1-SNAPSHOT.jar >> ../documentations/piece.txt &
		echo 'album 启动成功'
	fi
done 