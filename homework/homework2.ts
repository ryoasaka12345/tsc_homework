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

class Rectangle extends Square {
	height: number;

	constructor(width, height) {
		super(width);
		this.height = height;
	}

	calcArea() {
		this.area = this.width * this.height;
		return this.area;
	}
}

const S1 = new Square(5);
const R1 = new Rectangle(5, 10);
const S2 = new Square(10);
const R2 = new Rectangle(10, 20);
let shapes = [S1, R1, S2, R2];
shapes.forEach(function (shape) {
	console.log(shape.calcArea());
});
