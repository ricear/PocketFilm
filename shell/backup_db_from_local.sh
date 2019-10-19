#!bin/bash
cd ../db_backup
rm -rf ./*
mongodump --host 127.0.0.1 --port 27017