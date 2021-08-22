// simple add using arrow funciton
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
// console.log(sum);

// simple multiply using arrow function
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mul = multiply(3, 3, 3);
// console.log(mul);

// Single Parameter
const fiveTimes = (num) => num * 5;
const output = fiveTimes(5);
// console.log(output);

// Single parameter another option
const tenTimes = num => num * 10;
const output2 = tenTimes(5);
// console.log(output2);

//Without parameter of Arrow Function
const getName = () => 'Brandon Sam';
const myName = getName();
// console.log(myName);

//Arrow Function for Big Calculation or Multiline Operation
const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    const total = result * mul;
    return total;
}
const total = doMath(12, 5);
console.log(total);


