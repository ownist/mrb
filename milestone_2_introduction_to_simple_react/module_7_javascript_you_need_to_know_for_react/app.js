// variable
let name = "Shahed";
name = "Shahed Bishwas";

// condition
let num = 50;

if (num >= 20 || num <= 30) {
  console.log("yess");
} else {
  console.log("noo");
}

console.log("-----------------------------------------------------");

// array
const friends = ["shahed", "niloy", "sabbir", "siam"];
// friends.push('lahid')
// friends.pop()
// friends.unshift("dabokacho");
// friends.shift();
// console.log(friends.slice(0, 2));
// console.log(friends.splice(2, 3));

// loop
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  console.log(element);
}

console.log("-----------------------------------------------------");

// function
function sum(a, b) {
  const result = a + b;
  // console.log(...arguments);
  return result;
}

const output = sum(2, 4);
console.log(output);

console.log("-----------------------------------------------------");

// object
const person = {
  name: "Shahed",
  age: 17,
  friends: friends,
};

console.log(person.friends[0]);
