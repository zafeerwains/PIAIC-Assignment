"use strict";
// //  Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// var tempCel: number = 37
// var intoFah: number = tempCel * (9 / 5) + 32
// console.log('converted into Fahrenheits', intoFah)
// var tempFah: number = 37
// var intoCel: number = (tempFah - 32) * 5 / 9;
// console.log('converted into Celcius', intoCel)
// // Write a program that calculates the percentage.
// var totalNum: number = +prompt("enter a total  Number ");
// var obtainedNum: number = +prompt("enter a  Number recieved");
// var percentage: number = (totalNum / obtainedNum) * 100
// console.log('The percentageis =>', percentage)
// // Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// var days: number = +prompt("Enter the Days")
// var weeks: number = days / 7
// weeks = Math.floor(weeks)
// var weekDays: number = weeks * 7
// var remainingDays = days - weekDays
// console.log("Weeks=>", weeks, ",Days=>", remainingDays);
// // Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// var totalPrice: number = +prompt("Enter the price")
// if (totalPrice > 100) {
//     var discount: number = totalPrice * .10
// }
// else {
//     discount = totalPrice * .05
// }
// var priceAfterDiscount: number = totalPrice - discount
// console.log(`The total price is ${totalPrice} and a discount of ${discount} is applied on it and now you have to after ${priceAfterDiscount}`)
// // Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
// var userAge: number = +prompt("ENter your age")
// userAge < 13
//     ? console.log("You are a child")
//     : userAge < 20
//         ? console.log("You are a teenager")
//         : console.log("You are an adult");
// // Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
// var temperature: number = +prompt("Enter the temperature in Celsius");
// if (temperature <= 0) {
//     console.log("It's very cold. Wear heavy winter clothes.");
// } else if (temperature <= 10) {
//     console.log("It's cold. Wear warm clothes and a jacket.");
// } else if (temperature <= 20) {
//     console.log("It's cool. A light jacket or sweater should be enough.");
// } else if (temperature <= 30) {
//     console.log("It's warm. Wear light clothing.");
// } else {
//     console.log("It's hot. Wear light and breathable clothes.");
// }
// // Write a program that checks if a given number is divisible by 3, 5, both, or neither.
// var numberToCheck: number = +prompt("Enter a number");
// if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5.");
// } else if (numberToCheck % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else if (numberToCheck % 5 === 0) {
//     console.log("The number is divisible by 5.");
// } else {
//     console.log("The number is not divisible by either 3 or 5.");
// }
// // Write a program that checks if the given year is a leap year or not.
// var yearToCheck: number = +prompt("Enter a year");
// if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
//     console.log(`${yearToCheck} is a leap year.`);
// } else {
//     console.log(`${yearToCheck} is not a leap year.`);
// }
// // Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
// var dayNumber: number = +prompt("Enter a number (1-7) to represent the day of the week");
// if (dayNumber === 1) {
//     console.log("Sunday");
// } else if (dayNumber === 2) {
//     console.log("Monday");
// } else if (dayNumber === 3) {
//     console.log("Tuesday");
// } else if (dayNumber === 4) {
//     console.log("Wednesday");
// } else if (dayNumber === 5) {
//     console.log("Thursday");
// } else if (dayNumber === 6) {
//     console.log("Friday");
// } else if (dayNumber === 7) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid input. Please enter a number between 1 and 7.");
// }
// // Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax .Where the tax amount will be calculated by the amount of bill.
// // var unitsConsumed: number = +prompt("Enter the number of units consumed");
var unitsConsumed = 300;
var baseRate = 0.0;
var taxRate = 0.0;
if (unitsConsumed <= 100) {
    baseRate = unitsConsumed * 10.0; // Assuming the rate per unit is 1.0
}
else if (unitsConsumed <= 200) {
    baseRate = unitsConsumed * 15;
}
else if (unitsConsumed <= 500) {
    baseRate = unitsConsumed * 20;
}
else {
    baseRate = unitsConsumed * 25;
}
if (baseRate > 0) {
    taxRate = baseRate * 0.1;
    if (unitsConsumed > 200) {
        taxRate = baseRate * 0.15;
    }
    if (unitsConsumed > 500) {
        taxRate = baseRate * 0.25; // 25% tax for the third case
    }
}
var totalAmount = baseRate + taxRate;
console.log(`Total amount: $${totalAmount.toFixed(2)}`);
