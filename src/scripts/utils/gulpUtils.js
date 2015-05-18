//var jschardet = require('jschardet')
var fs = require('fs')
var readline = require('readline')

//var rStream = fs.createReadStream('/works/temp/my-templates/dcd.shtml')
//
//
//
//rStream.on('error', function (err) {
//   console.log(err)
//})
//
//var rl = readline.createInterface({
//    input:rStream,
//    output: process.stdout,
//    terminal: false
//});
//
//rl.on('line',function(line){
//    
//})

var chardet = require('chardet');


//console.log(chardet.detect(new Buffer('hello there!')));
// or
//chardet.detectFile('/path/to/file', function(err, encoding) {});
//// or
//chardet.detectFileSync('/path/to/file');
console.log(chardet.detectFileSync('/works/temp/my-templates/dcd.shtml'))