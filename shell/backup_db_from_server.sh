#!bin/bash
cd ../db_backup
rm -rf ./*
mongodump --host 103.45.178.220 --port 27017