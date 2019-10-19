#!bin/bash
db_name=$1
mongorestore -h 127.0.0.1:27017 -d $db_name ../db_backup/dump/$db_name