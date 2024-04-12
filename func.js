//задание 8.7.1
function printInfo () {
    console.log(`Name: ${this.name}, age: ${this.age}`);
}

const person {
    name: 'John',
    age: 20
}

printInfo.call(person)


//Задание 8.7.2
function calculate (a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

const values = [2, 3, "+"];
const result = calculate.apply(null, values);
console.log(result);


//задание 8.7.3
const users = [
    {name: 'Fer', age: 18},
    {name: 'David', age: 17},
    {name: 'Rose', age: 20},
    {name: 'Bolin', age: 33}
];

const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);
console.log(names);


//задание 8.7.4
function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    name: 'John',
    age: 20
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName('John Smith');
console.log(person.fullName);


//задание 8.7.5
function uniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    const sortedUniqueNumbers = uniqueNumbers.sort((a, b) => a - b);
    return sortedUniqueNumbers;
}