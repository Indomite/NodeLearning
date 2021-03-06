/**
 * fs.stat 检测是文件还是目录
 * fsmkdir 创建目录
 * fs.writeFile 创建写入文件
 * fs.appendFile 追加文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名
 * fs.rmdir 删除目录
 * fs.unlink 删除文件
 */

const fs = require('fs');

fs.stat('./package.json', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
})