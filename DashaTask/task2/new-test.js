#!/usr/bin/node

var fs = require('fs');
var file = process.argv[2];
var text = fs.readFileSync(file, 'utf8');
console.log("Our file" + text);
var letter = process.argv[3];
console.log('letter ' + letter);
var newText = writeSpecailWord(letter, text);
console.log("result: " + newText);


function writeSpecailWord(letter, text) {
    arr = text.split(" ");
    str = "";
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) result.push(arr[i]);
    }
    return result;
}

fs.writeFileSync('writeme.txt', newText);
