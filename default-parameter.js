
function add(num1, num2 = 0) {// Default Value set kora jay es6 e
    // option 3

    //Option 2
    // num2 = num2 || 0;

    //Option 1
    // if (num2 == undefined || num1 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

//Another Option
function fullName(firstName, LastName = 'Chowdhury') {
    const name = firstName + ' ' + LastName;
    return name;
}
console.log(fullName("Rahim"));// Second Name na deyai Defaul second name niye nise.
