const numbers = [23, 65, 99, 32, 32, 32, 32, 42, 42, 53, 4, 43, 100];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(32, 65, 77);
// console.log(max);

// ... Collect elements only from an array
const maxArray = Math.max(...numbers);
// console.log(maxArray);

numbers.push(105);
// console.log(numbers);

const numbers2 = [...numbers, 88];
numbers.push(105);
console.log(numbers);
console.log(numbers2);
