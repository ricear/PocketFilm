#!/bin/bash

# 启动所有爬虫
nohup sh start_spiders.sh all all >/dev/null 2>nohup-all-all.out &
nohup sh start_spiders.sh all latest >/dev/null 2>nohup-all-latest.out &
nohup sh start_spiders.sh daily all >/dev/null 2>nohup-daily-all.out &
nohup sh start_spiders.sh daily latest >/dev/null 2>nohup-daily-latest.out &
