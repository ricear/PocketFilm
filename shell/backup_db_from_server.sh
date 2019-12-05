#!bin/bash
cd ../db_backup
rm -rf ./*
mongodump --host 103.45.172.213 --port 27017