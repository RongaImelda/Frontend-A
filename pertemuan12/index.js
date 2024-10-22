// String Literals, Arrow Function & 
// Default Parameter

// 1. String Literals
let fulName = "Imelda Ronga";
let age = 22;
let address = "Agape";

// halo nama saya imelda Ronga, umur saya 22 tahun
// dan saya tinggal di Agape
let kalimat =
"Halo nama saya" +
fulName +
", umur saya" +
age +
"tahun dan saya tinggal di" +
address;

console.log(kalimat);

// 2. eror function

function sayGreetings(fulName) {
    return 'Hello mu name is ${fulName}';
}

console.log(sayGreetings("Imelda Ronga"));

const sayGreetings2 = () => {
    return 'Hello my name is ${fulName}';
};

console.log(sayGreetings2("Imelda Ronga"));

// Arrow function pada IIFE
let output = (() => "Hello")();
console.log(output);

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let ooutput2 = numbers.map((item) => item);
console.log(output2);

// 3. Default parameter

const sayGreetings3 = (fulName) => {
    console.log('Halo nama saya ${fulName}');
}
console.log('Halo nama saya ${fulName}');

sayGreetings3();