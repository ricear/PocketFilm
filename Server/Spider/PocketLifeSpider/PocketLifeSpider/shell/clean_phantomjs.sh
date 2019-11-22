#!/bin/bash
p_name=phantomjs
pro="$(ps -A|grep "$p_name"|head -n1)"
time="$(echo $pro|awk '{
        split($3,tab,/:/); if (tab[2]+tab[1]*60>=1) {print 1}else{print 0}
}')"
pid="$(echo $pro|awk '{print $1}')"
echo $time
if [ $time = '1'  ]
then
kill -9 $pid
fi
