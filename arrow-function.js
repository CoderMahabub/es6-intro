//Function Declaraton 
function add(num1, num2) {
    return num1 + num2;
}

//Function Expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

//Function Expression (Anonymus)
const add3 = function (num1, num2) {
    return num1 + num2;
}

//Arrow Function (Mostly used Nowadays)
const add4 = (num1, num2) => num1 + num2;

const sum = add(10, 15);
const sum2 = add2(10, 15);
const sum3 = add3(10, 15);
const sum4 = add4(10, 15);
console.log(sum, sum2, sum3, sum4);