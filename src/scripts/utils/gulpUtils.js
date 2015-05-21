//var jschardet = require('jschardet')
var fs = require('fs')
var readline = require('readline')
var iconv = require('iconv-lite')
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

var chardet = require('chardet')


//console.log(chardet.detect(new Buffer('hello there!')));
// or
//chardet.detectFile('/path/to/file', function(err, encoding) {});
//// or
//chardet.detectFileSync('/path/to/file');
var encode = chardet.detectFileSync('/works/temp/my-templates/dcd.shtml')

var rStream = fs.createReadStream('/works/temp/my-templates/dcd.shtml')

.pipe(iconv.decodeStream(encode))
    .pipe(iconv.encodeStream('utf8'))
    .pipe(fs.createWriteStream('/utf8file.html'));