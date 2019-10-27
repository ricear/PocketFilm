
#!bin/bash
db_name=$1
mongorestore -h 103.45.178.220:27017 -d $db_name ../db_backup/dump/$db_name