const hello = require("../es6/module");

// Includes
let numbers = [1, 2, 3, 4, 5, 6, 7]

if(numbers.includes(7)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra el valor 7')
}

// Power **
let base = 4;

let exponent = 3;
let result = base ** exponent;
console.log(result)

// Object entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);

const keys = Object.keys(data);
console.log(keys)

// padding: 

const string = 'Hello';
console.log(string.padStart(7, 'hi'));4
console.log(string.padEnd(12, '-----'));

const obj = {
    data: 'd',
}

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true) 
            ? setTimeout(() => console.log('Hello'), 3000) 
            : reject(new Error('Test err'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (err) {
        console.log(err)
    }
}

anotherFunction();
