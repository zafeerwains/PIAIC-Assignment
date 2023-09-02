"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
const useSpliceMethod = (arr, index, value) => {
    arr.splice(index, 0, value);
    return arr;
};
console.log('Modified Array:', useSpliceMethod([42, 422, 4, 2, 4, 5, 3, 3], 3, 4));
const shoppingCart = [];
const addToCart = (item) => {
    const existingItem = shoppingCart.find((i) => i.name === item.name);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    }
    else {
        shoppingCart.push(item);
    }
};
const removeFromCart = (itemName) => {
    const itemIndex = shoppingCart.findIndex((item) => item.name === itemName);
    if (itemIndex !== -1) {
        shoppingCart.splice(itemIndex, 1);
    }
};
const updateQuantity = (item) => {
    const existingItem = shoppingCart.find((i) => i.name === item.name);
    if (existingItem) {
        existingItem.quantity = item.quantity;
    }
};
const printCartContents = () => {
    console.log("Shopping Cart Contents:");
    shoppingCart.forEach((item) => {
        console.log(`${item.name} - Quantity: ${item.quantity}`);
    });
};
addToCart({ name: 'paper', quantity: 2 });
addToCart({ name: 'Pencil', quantity: 3 });
addToCart({ name: 'Rubber', quantity: 7 });
printCartContents();
removeFromCart('Pencil');
updateQuantity({ name: 'Rubber', quantity: 5 });
printCartContents();
//  Write a program that uses a while loop to print the first 25 integers.
let i = 1;
while (i <= 25) {
    console.log(`${i}`);
    i++;
}
//  Write a program that uses a while loop to print the first 10 even numbers.
let e = 1;
let count = 0;
while (e <= 100 && count != 10) {
    if (e % 2 === 0) {
        console.log(e + ' is even number');
        count++;
    }
    e++;
}
//  Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(a) {
    let fac = 1;
    if (a >= 0) {
        while (a != 0) {
            fac = fac * a;
            a--;
        }
        return fac;
    }
    else {
        console.log('Enter a positive integer plz');
        return 0;
    }
}
const fact = factorial(6);
console.log(fact); // 720
const fact1 = factorial(-6);
console.log(fact1);
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function remNegNum(a) {
    for (let index = 0; index < a.length; index++) {
        if (a[index] < 0) {
            a.splice(index, 1);
            index = --index;
        }
    }
    return a;
}
const array1 = remNegNum([3, -4, 43, -4, 3, -34, 3, -33, 43, -434, 34, -34, 34, -3, 4]);
console.log(array1);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sum(a) {
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        sum = sum + a[index];
    }
    return sum;
}
const array2 = sum([3, -4, 43, -4, 3, -34, 3, -33, 43, -434, 34, -34, 34, -3, 4]);
console.log(array2);
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function tempConv(a) {
    let F;
    for (let index = 0; index < a.length; index++) {
        F = (a[index] * 9 / 5) + 32;
        a[index] = F;
    }
    return a;
}
const array = tempConv([-1, -2, -6, 3, -3, 2, -6, -8, 33, -4, 2, -2]);
console.log(array);
