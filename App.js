var {readdirSync,statSync} = require('fs'),
{join} = require('path'),
paths = [];
module.exports = path => {
return Paths(path)
}
function Paths(path) {
readdirSync(path).forEach(file => {
var inn = inn = join(path,file);
if(inn.includes('node_modules')) paths.push({path:inn,size:(getSize(inn) / (1024*1024)).toFixed(2),})
else if (statSync(inn).isDirectory()) Paths(inn);
})
return paths
}
function size(dirPath, arrayOfFiles) {
var files = readdirSync(dirPath)
arrayOfFiles = arrayOfFiles || []
files.forEach(file => {
if (statSync(dirPath + "/" + file).isDirectory()) arrayOfFiles = size(dirPath + "/" + file, arrayOfFiles)
else arrayOfFiles.push(join(__dirname, dirPath, file))
})
return arrayOfFiles
}
function getSize(directoryPath) {
var arrayOfFiles = size(directoryPath),
totalSize = 0;
arrayOfFiles.forEach(filePath => totalSize += statSync(filePath).size)
return totalSize
  }