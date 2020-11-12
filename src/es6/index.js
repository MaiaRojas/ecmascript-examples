function newFuction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'PE';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'oscar', age = 32, country = 'PE') {
    console.log(name, age, country);
}

newFuction();
newFunction2('Ricardo', '23', 'CO');

//
let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//Multi line
let Lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting \n' +
'industry. Lorem Ipsum.';
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum.`;

console.log(Lorem);

console.log(lorem2)

// Destructuring

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'PE',
};

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

// Operador de propagacion
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Ana'];

let education = ['David', ...team1, ...team2];

console.log(education)

// Variables

{ var global = 'Global Var' };

{ 
    let globalLet = 'Global Let';
    console.log(globalLet)
};

console.log(global);

const a = 'b'; //Constante que no cambia
a = 'a';
console.log(a)

// Arrow Functions
const names = [
    { name: 'Oscar', age: 32 },
    { name:  'Yesica', age: 27 }
];
let listOfNames1 = names.map(function(item) {
    console.log(item.name)
});

let listOfNames2 = names.map(item => console.log(item.name));

// const listOfNames3 = (name, age,country) => {
//     ...
// };

// const listOfNames4 = name => {
//     ...
// };

const square = num => num * num;

// Promises

const helloPromise = () => { // AF son fx anónimas que retorna un valor
    return new Promise((resolve, reject) => { // Dos estados Promesa resuelta o rechazada
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2))

// import hello from './module';
const hello = require('./module');
hello();