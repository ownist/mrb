// false value
// 0 -0 '' false null undefined NaN

const test = "shahed";

// if (test) {
//   console.log("its truthy");
// } else {
//   console.log("its falsy");
// }

test ? console.log("yup") : console.log("nope");

const num = 12;
const result = num >= 10 && num <= 20 ? "true" : "false";
console.log(result);

console.log("--------------------------");

const isActive = true;
const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user");

// isActive ? showUser() : hideUser();

// isActive && showUser();

isActive || hideUser();

const n = "10";
console.log(+n);
