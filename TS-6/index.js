"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
const arr = [432, 42, -342, 2, -342, -5, 4, -3, 32, -4, 43, 7, 5, 3];
var filteredArr = arr.filter((num) => num > 0);
console.log('filtered Array ', filteredArr);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var givenArr = [1, 2, 3, 4, 5];
givenArr.map((eachNumber, i) => givenArr[i] = eachNumber * 2);
console.log('givenArr', givenArr);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const arrOfFruits = ["apple", "banana", "cherry", "date", "grape"];
const filteredArrOfFruit = arrOfFruits.filter((fruit) => fruit.length > 5);
console.log('filtered Array Of Fruit ', filteredArrOfFruit);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArrOfNumber = arrOfNumber.filter((number) => number % 2 === 0).map((number) => number * number);
console.log('filteredArrOfNumber', filteredArrOfNumber);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const arrInCalsius = [0, 10, 20, 30, 40];
const arrInFahrenheit = arrInCalsius.map((Celsius) => (Celsius * 9 / 5) + 32);
console.log('Temprature in Fahrenheit', arrInFahrenheit);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const arrayOfNumber = [3, 6, 9, 12, 15, 18];
const oddDoubleNumber = arrayOfNumber.filter((number) => number % 2 !== 0).map((number) => number * 2);
console.log('odd Double Number Array', oddDoubleNumber);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arrOfNames = ["Alice", "Bob", "Charlie", "David", "Emily"];
arrOfNames.forEach((name, i) => arrOfNames[i] = name + "!");
console.log('array Of Names', arrOfNames);
arrOfNames.forEach((name) => console.log(name + "!"));
