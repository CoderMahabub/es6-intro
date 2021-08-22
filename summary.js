// const , let
// const type variable maximum
// Variable ke jodi reassign kora dorkar hole let use kora jete parbe
let prioPerson = 'Kolsum Begum';
prioPerson = 'Another Person';
const hubby = 'permanent';

//Default parameter
function calculate(x, y, z = 0) {

}

//Template String
const myPeople = `My Lovely person is ${hubby} and his fullName ${prioPerson} and her priopersion is someone is 
second line`;
// console.log(myPeople);

// Arrow Function
const getName = (fist, last) => `My full name is ${fist} ${last} `;
const fullName = getName('abdul', 'kuddus');
console.log(fullName);

// Big arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    let total = result * 5;
    return total;
}
const total = doMath(12, 5);
console.log(total);

// ... Collect elements only from an array
const numbers = [23, 65, 99, 32, 32, 32, 32, 42, 42, 53, 4, 43, 100];
const maxArray = Math.max(...numbers);
console.log(...numbers);
console.log(maxArray);

