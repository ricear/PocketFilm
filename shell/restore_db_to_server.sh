
#!bin/bash
db_name=$1
mongorestore -h 198.55.122.32:27017 -d $db_name ../db_backup/dump/$db_name