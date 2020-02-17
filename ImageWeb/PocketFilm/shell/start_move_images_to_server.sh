#!/bin/bash

local_file_path='/Users/weipeng/Personal/Projects/PocketFilm/ImageWeb/PocketFilm/images'
server_file_path='/usr/local/projects/PocketFilm/ImageWeb/PocketFilm/images'
while :
do
	file_list=`ls ${local_file_path}`
   	for file in ${file_list}
	do 
	 	scp ${local_file_path}/${file} root@47.240.95.27:${server_file_path}
	 	rm -rf ${local_file_path}/${file}
	done
	sleep 1
done
