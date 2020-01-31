#!bin/bash
db_name=$1
mongorestore -h 149.129.94.197:27017 -d $db_name ../db_backup/dump/$db_name