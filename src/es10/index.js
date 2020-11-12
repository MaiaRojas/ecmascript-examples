
// Method flat
let arr1  = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];

console.log(arr1.flat(2))

var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

let arr2 = [1, 2, 3 ];

console.log(arr2.flatMap(value => [ value, value * 2]));

// Trim
let hello = '        hello World            1  ';
console.log(hello);
console.log(hello.trim())
console.log(hello.trimStart());
console.log(hello.trimEnd());

//OPtional catch biding
try {
    
} catch {
    error
}

// array to object
let entries = [['name', 'oscar'], ["age", 32]];
console.log(Object.fromEntries(entries));
