const person = {
  name: "shahed",
  age: 17,
  friends: ["sabbir", "niloy", "siam"],
  family: {
    "father name": "momin uddin",
    "mother name": "safia khatun",
  },
};

// const jsonData = JSON.stringify(person);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);

// keys and values
// const keys = Object.keys(person);
// console.log(keys);

// const values = Object.values(person.family);
// console.log(values);

const products = [
  { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
  { name: "realme", brand: "xiaomi", price: 15000, color: "sky blue" },
  { name: "honor x6c", brand: "honor", price: 14203, color: "blue" },
  { name: "iPhone 16", brand: "apple", price: 100000, color: "black" },
  { name: "s24", brand: "samsung", price: 150000, color: "gray" },
];

const newData = {
  name: "walton",
  brand: "waltoni",
  price: 10000,
  color: "sada",
};

const newArr = [...products, newData];
console.log(products);
console.log(newArr);

console.log("--------------------------------");

const remainingProduct = products.filter((p) => p.brand !== "xiaomi");

const newProducts = [...remainingProduct, newData];
console.log(newProducts);
