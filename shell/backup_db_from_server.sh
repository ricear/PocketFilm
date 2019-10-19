#!bin/bash
cd ../db_backup
rm -rf ./*
mongodump --host 103.45.251.79 --port 27017