const fs = require ('fs');
var file = process.argv[2]
fs.readFile(file ,'utf-8' ,function callback (error, data){
    var lines = contents.toString().split('\n').length-1;
    console.log(lines);
}
 )