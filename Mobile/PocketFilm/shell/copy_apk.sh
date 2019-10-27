#!bin/bash
# 说明
echo '将新编译好的apk文件复制到本地public和服务器public目录下面'
mv ../platforms/android/app/build/outputs/apk/debug/app-debug.apk ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk
cp ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk ../../../Web/PocketFilm/public
scp ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk root@103.45.178.220:/usr/local/projects/PocketFilm/Web/PocketFilm/public
echo '已完成'