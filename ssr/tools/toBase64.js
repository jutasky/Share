console.log('nodejs的base64编码有缺失，暂时不要使用');
return;
const base64 = require('base64-url')
const path = require('path')
const fs = require('fs')

var dir = path.resolve(__dirname, '..')

console.log('读取ssr列表中...')
fs.readFile(dir + '/account.md', function (err, data) {
    if (err) {
        return console.error(err)
    }

    console.log('开始转化为base64编码...')
    var ssr_base64 = base64.encode(data.toString())
    console.log('转换成功！')
    fs.writeFile(dir + '/all.txt', ssr_base64,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('写入完成！')
    })
});

