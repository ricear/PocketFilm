#!bin/bash
cd ../db_backup
rm -rf ./*
mongodump --host 47.240.95.27 --port 27017