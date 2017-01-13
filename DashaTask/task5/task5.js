/*Опишите объектный тип AllAboutChar, который используется для хранения
символьного значения и содержит методы определения, является ли заданный символ буквой,
цифрой или прописной буквой.*/
class AllAboutChar {
	constructor (symbol)
	{
		this.symbol = symbol;
	}

	isLetter() {
		return /^[a-zA-Z]$/.test(this.symbol);
	}
	isDigit() {
		return /^[0-9]$/.test(this.symbol);
	}
	isBigLetter() {
		return /^[A-Z]$/.test(this.symbol);
	}
}
console.log("task 1");
var char = new AllAboutChar('s');
console.log("is " + char.symbol + " a letter? " + char.isLetter());
console.log("is " + char.symbol + " a digit? " + char.isDigit());
console.log("is " + char.symbol + " a big letter? " + char.isBigLetter());


//Дайте определение виртуального метода.
class A {
	constructor(a) {
		this.a = a;
	}
	isIt() {
		console.log("Is AAAA");
	}
}

class B extends  A {
	constructor(b) {
		super(b);
	}
	isIt() {
		console.log("Is BBBBB");
	}
}

console.log("task 2");
var a = new A(2);
a.isIt();
var b = new B(3);
a = b;
a.isIt();