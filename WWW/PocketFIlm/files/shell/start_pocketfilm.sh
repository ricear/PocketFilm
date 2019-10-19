#!bin/bash
# 获取jar包
echo '正在获取 jar 包'
cp ../../Movie/target/movie-0.0.1-SNAPSHOT.jar ../jars/ 
cp ../../TV/target/tv-0.0.1-SNAPSHOT.jar ../jars/ 
cp ../../Drama/target/drama-0.0.1-SNAPSHOT.jar ../jars/ 
cp ../../Piece/target/piece-0.0.1-SNAPSHOT.jar ../jars/ 
echo 'jar 包获取成功'

# 启动服务
echo '正在启动 movie '
nohup java -jar ../jars/movie-0.0.1-SNAPSHOT.jar >> ../documentations/movie.txt &
echo 'movie 启动成功'

echo '正在启动 tv'
nohup java -jar ../jars/tv-0.0.1-SNAPSHOT.jar >> ../documentations/tv.txt &
echo 'tv 启动成功'

echo '正在启动 drama '
nohup java -jar ../jars/drama-0.0.1-SNAPSHOT.jar >> ../documentations/drama.txt &
echo 'drama 启动成功'

echo '正在启动 piece '
nohup java -jar ../jars/piece-0.0.1-SNAPSHOT.jar >> ../documentations/piece.txt &
echo 'piece 启动成功'