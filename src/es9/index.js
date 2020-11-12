// Spread operator
const obj = {
    name: 'Oscar',
    age: 32,
    
};

let { name, ...rest } = obj;
console.log(name);

const obj1 = {
    ...obj,
    country: 'ḾX',
};

console.log(obj1.country)

// Promise finally

const helloWorld = () =>  new Promise ((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))
});

helloWorld()
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => console.log('Finish'));

    //Regex

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const match = regexData.exec('2018-04-20');

    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year, month, day)