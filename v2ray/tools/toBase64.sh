#!/bin/bash
cd ..
path=`pwd`
echo '编码开始'
BASE64_STR=`base64 ${path}/account.md`
echo '编码成功'
echo '开始写入...'
echo ${BASE64_STR} > ${path}/all.txt
echo '写入完成!'
