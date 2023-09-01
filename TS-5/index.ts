// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var n: number = +prompt("enter the nth number ")
var sum: number = 0
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}
console.log('The sum of all even numbers', sum)

// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var totalNumber: number = +prompt("enter the Number  ")
var sum: number = 0
for (let i = 0; i <= totalNumber; i++) {
    if (i % 2 === 0) {
        console.log("even number", i);
    }
}

// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var arr: number[] = [11, -3, 44, -42, 40, 42, -24, 9, -4]
var count: number = 0
console.log('arr', arr)
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr[count] = arr[i]
        count++
    }
}
arr.length = count;
console.log('arr', arr)

// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
var r: number = +prompt("Enter the radius")
var area: number = Math.PI * r * r
console.log(`Area is ${area}`)

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var arrOfGrades: number[] = [23, 56, 76, 37, 78, 33, 35, 24, 54, 39, 53, 87]
for (let i = arrOfGrades.length - 1; i >= 0; i--) {
    if (arrOfGrades[i] < 50) {
        arrOfGrades.splice(i, 1)
    }
}
console.log('The Number Graeter or equal to 50=>', arrOfGrades)

// Write a program that uses a function to find the largest element in an array of numbers.
const largestNumberFind = (arr: number[]) => {
    var largestNumber: number = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
    return largestNumber
}
const arrayOfNumbers: number[] = [32, 74, 5, 34, 6, 34, 52, 96, 67, 75, 87, 74]
var largestNumber: number = largestNumberFind(arrayOfNumbers)
console.log('largest numer=>', largestNumber) 
