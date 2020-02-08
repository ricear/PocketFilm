#!bin/bash
# 说明
echo '将新编译好的apk文件复制到本地public和服务器public目录下面'
mv ../platforms/android/app/build/outputs/apk/debug/app-debug.apk ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk
cp ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk ../../../Web/PocketFilm/public/apks
scp ../platforms/android/app/build/outputs/apk/debug/PocketFilm.apk root@47.240.95.27:/usr/local/projects/PocketFilm/Web/PocketFilm/public/apks
echo '已完成'
echo '将新编译好的browser文件复制到服务器html目录下面'
scp -r ../platforms/browser/www/* root@47.240.95.27:/usr/local/projects/PocketFilm/MobileWeb/PocketFilm/html
echo '已完成'