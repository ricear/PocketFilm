#!bin/bash
db_name=$1
mongorestore -h 47.240.95.27:27017 -d $db_name ../db_backup/dump/$db_name