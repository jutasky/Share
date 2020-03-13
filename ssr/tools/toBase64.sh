#!/bin/bash
basepath=$(cd `dirname $(readlink -f $0)`;cd ..; pwd)
base64 --wrap=0 "$basepath/account.md" > "$basepath/all.txt"
echo '写入完成!'
