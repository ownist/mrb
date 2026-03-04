// tamplet string
let fName = "Shahed";
let lName = "Bishwas";

console.log(`I'm ${fName} ${lName}`);

console.log("-----------------------------------------------------");

/**
 * arrow function
 */

// regular function
// function sum() {
//   console.log("sum of the number");
// }

// arrow function
const sum = (a, b, c) => a + b + c;

const result = sum(2, 1, 3);
console.log(result);

console.log("-----------------------------------------------------");

const numbers = [1, 2, 3, 4, 5, 6];
// console.log(...numbers);

const newNumbers = [...numbers, 10, 20];
console.log(newNumbers);
