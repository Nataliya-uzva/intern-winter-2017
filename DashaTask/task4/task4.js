/*Определите результат выполнения следующей программы:

program test5:
type
TwoByte = array[0..4] of Byte; 0..255
var
Wrd: String; строка
TwoBytePtr : ^TwoByte;  // указатель (типизированный ^тип )
begin
Wrd := 'abcde';
TwoBytePtr := @Wrd;   // @ - Обозначение адреса переменной, типизированной константы, подпрограммы, метода
(записыв ASCII код в массив TwoByte)

Write (TwoBytePtr^[1] - Ord ('a')]); ASCII код символа 'a'
ReadLn;
end.*/


function test5() {
    var TwoByte = new Array();
    var Wrd = 'abcde';
    var TwoBytePtr = {
        mas: TwoByte
    };

    // var helpArr = [];
    for (var i = 0; i < Wrd.length; i++) {
        TwoBytePtr.mas.push(Wrd.charCodeAt(i));
    }
    var temp = TwoBytePtr.mas[1] - "a".charCodeAt(0)
    console.log(temp);
}

console.log("task1");
test5();


// Напишите процедуру, которая объединяет линейный и
// циркулярный списки в один линейный.

class Node {
    constructor() {
        this.value = Math.round(Math.random() * 10);
        this.next = null;
    }
}

class SingleList {
    costructor() {
        this.head = null;
        this.current = null;
    }
    create() {
        this.head = this.current = new Node();
        //Math.round(Math.random() * 10
        for (let i = 0; i < 2; i++) {
            let temp = new Node();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = null;
        return this.head;
    }
}

class CycleList {
    costructor() {
        this.head = null;
        this.current = null;
    }
    create() {
        this.head = this.current = new Node();
        for (let i = 0; i < 2; i++) {
            let temp = new Node();
            this.current.next = temp;
            this.current = temp;
        }
        this.current.next = this.head;
        return this.head;
    }
}

class Merge {
    constructor(listS, listC) {
        this.headS = listS;
        this.headC = listC;
    }
    create() {
        let newList = this.headS;
        while (this.headS.next !== null) {
            this.headS = this.headS.next;
        }
        this.headS.next = this.headC;

        return newList;
    }
}

var list = new SingleList(),
    listCycle = new CycleList();

var headS = list.create(),
    headC = listCycle.create();

console.log("task2");
console.log(headS, headC);
var merge = new Merge(headS, headC);
console.log(merge.create());