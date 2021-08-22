//Breakup With Var
let balance = 1240;
balance = 1340;
const userName = "janpakhi Potas Potas";
const weTogether = 'ami' + ' ' + userName;
console.log(weTogether);

//userName = 'moyna pakhi';

const numbers = [42, 423, 4234, 42, 42, 42];
// numbers = [434,42,424,43]; //not allowed
numbers.push(444);
numbers[1] = 333;

const student = { roll: 101, name: 'moifz', job: 'intern' };
student.name = 'mofazzal';
// student = { roll: 101, name: 'mofazzal', job: 'intern' };// Not Allowed
//Traditional For Loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
    console.log(sum);
}