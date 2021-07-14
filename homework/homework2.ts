/*
Design and implement classes Square and Rectangle 
with constructors to set width for Square and width, height for Rectangle.
Square and Rectangle has a method to calculate the area for them.
Create an array contain list of Square and Rectangle.
Output area of each element in the arrays to console log.
*/

class Square {
	width: number;
	area: number;

	constructor(width) {
		this.width = width;
	}

	calcArea() {
		this.area = this.width ** 2;
		return this.area;
	}
}

class Rectangle {
	width: number;
	height: number;
	area: number;

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	calcArea() {
		this.area = this.width * this.height;
		return this.area;
	}
}

const sqrl = new Square(5);
const rect = new Rectangle(5, 10);
let areas: Array<number>;
areas = [sqrl.calcArea(), rect.calcArea()];
console.log(areas);
