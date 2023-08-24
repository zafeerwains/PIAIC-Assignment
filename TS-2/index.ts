// Exercise 1:  Write a program that calculates the area of a rectangle.
var length: number = 5
var width: number = 5
var area: number = length * width
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
var heightOfCube: number = +prompt("Enter the height of the cube");
var lengthOfCube: number = +prompt("Enter the length of the cube");
var widthOfCube: number = +prompt("Enter the width of the cube");
var volumeOfCube: number = lengthOfCube * heightOfCube * widthOfCube;
console.log(`The volume of the cube is: ${volumeOfCube}`);
//Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
var num: number = +prompt("Enter the number");
if (num > 0) console.log("positive number")
else if (num < 0) console.log("Negative number")
else if (num === 0) console.log("Zero number")
// Exercise 4:   Write a program that checks if a given number is even or odd.
var numCheck: number = +prompt("Enter the number");
if (numCheck % 2 === 0) console.log("Even number")
else console.log("Odd number")
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
var age: number = +prompt("Enter the age");
if (age >= 18) console.log("Eligible for Vote")
else console.log("Not eligible for vote")
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
var result: number = ((10 + 5) * 3 - 2) / (4 % 3) - 7
console.log("The result is=>", result);

