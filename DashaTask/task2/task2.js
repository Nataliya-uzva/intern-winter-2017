/*a, b, c: Extended;
    j: 0..1;
    w: Boolean;
    m, n: Byte;

в JS существуют схожие типы данных
Extended - number
0..1 - Math.random()
boolean - boolean
byte - number

var str = "my string"
var num = 2;
str = num; // str === 2
str = "new";
num = str; // num === "new"
Не существует только перечисления, но для этого используем 0..1 - Math.random()
*/


// Напишите программу, которая считывает из заданного текстового файла
// слова и записывает в новый текстовый файл только те из них, которые начинаются с указанной буквы.
function writeSpecailWord(letter, text) {
    arr = text.split(" ");
    str = "";
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) result.push(arr[i]);
        //str += arr[i] + " ";
    }
    return result;
}