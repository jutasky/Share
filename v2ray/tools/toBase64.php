<?php

function _e($str) {
    echo $str . PHP_EOL;
}

$dir = realpath(__DIR__ . '/..') . DIRECTORY_SEPARATOR;
_e('读取ssr列表中...');
$ssr_list = file_get_contents($dir . 'account.md');
_e('开始转化为base64编码...');
$ssr_base64 = base64_encode($ssr_list);
if(is_bool($ssr_base64)) {
    _e('转换失败');
    exit(1);
}else {
    _e('转换成功！');
}
_e('开始写入all.txt');
$bool = file_put_contents($dir . 'all.txt', $ssr_base64);
if(is_bool($bool)) {
    _e('写入失败');
    exit(1);
}else {
    _e('写入完成！');
}

