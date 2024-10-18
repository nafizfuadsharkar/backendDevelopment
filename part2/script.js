// // Node.js basics
// // Introduction to Node js
// // Installing Node.js and npm
// // working with modules
// // file system operations
// // understanding HTTP module

// // NodeJS intro
// // it's not a language, not a technology, not library , not software
// // it's a JS runtime evironment
// // Ryan Dahl - halay banaiche nodejs , from google chrome V8 engine.

// // installing nodejs and npm
// // download nodejs , check in cdm node -v.
// // npm is like a store , from where we can download or upload package of code.
// // start with : npm init ; in terminal

// // file system
// const { log } = require("console");
// const fs = require("fs");
// // writefile
// // copyfile
// // appendfile
// // rename
// // unlink

// fs.writeFile("hey.txt", "Hello Word, how are you", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.appendFile("hey.txt", "ami bhalo achi.", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.copyFile('hello.txt',"./copy/chacha.txt",function(err){
//     if (err) console.error(err);
//     else console.log("done");
// });

// // unlink means delete 
// fs.unlink('hello.txt',function(err){
//     if (err) console.log(err);
//     else console.log("done")
// });

// // blank folder dlt korbe 
// fs.rmdir('./copy',{recursive:true}, function(err){
//     if(err) console.error(err);
//     else console.log('Removed');
// })
// // rmdir er jaygay rm dile any folder dlt korbe 
// // lear how to make folder, read kmne korbo, fs diye. 

// http - protocol 
const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hello World");
})

server.lesten(300);