#!/usr/bin/env node

var fs = require('fs');

var inFile = process.argv[2];
var outFile = process.argv[3];

var arr = [];

var rl = require('readline').createInterface({
  input: fs.createReadStream(inFile || './example.txt')
});

rl.on('line', function (line) {
  var a = line.split(',', 2).map(Number);
  arr.push({latitude: a[0], longitude: a[1]});
});

rl.on('close', function ()  {
  fs.writeFile(outFile || './out.json', JSON.stringify(arr), function (err) {
    if (err) throw err;
    console.log('The coordinates have been converted.');
  });
});
