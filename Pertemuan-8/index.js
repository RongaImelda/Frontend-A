// JavaScript Object & Conditional
// Deklarasi Object
// Object Literal
let john = {
    firstName: "John"
    age: 30,
    isMarried: true,
    grade [80, 90, 100],
    sayGreetings: function(){
        console.log("Hello my name is + this.firstName"); //method array
    },
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode: 95371,
    },
};
console.log(john);

// mengakses properti dalam object
// 1. Dot notation
console.log(john.firstName); //John
console.log(john.age); //30
john.age = 31; //ubah nilai
john.job = "Teacher"; //Tambah properti baru
console.log(john);

// 2. Bracket notation
console.log(john["isMarried"]); //true
john["nationality"] = "Indonesia"; //Tambah properti baru
console.log(john);

// Object method
john.sayGreetings();

// Object inside object
console.log(john.address.city)

//JavaScript Conditional
//1. if - else
//jika suhu hari ini lebih dari atau sama dengan 37,
//tampilkan suhu hari ini panas
//jika tidak tampilkan suhu hari ini dingin

let temp = 37;
if (temp >= 37){
    console.log("suhu hari ini panas");
} else {
    console.log("suhu hari ini dingin");
}

//2. if - else if - else
// jika nilai student 100-80 tampilkan grade A
// jika nilai dalam rentang 70-79 tampilkan grade B
// jika nilai 50-69 tampilkan grade C
// jika nilai di bawah 50 tampilkan grade D

let grade = 100
if(grade >= 80 && grade <= 100) {
    console.log("Grade A");
} else if(grade >= 70 && < 80) {
    console.log("Grade B");
} else if(grade >= 50 > 70) {
    console.log(Grade C);
} else {
    console.log("Grade D");
}

// Switch - case
// jika angka 1 tampilkan january
// jika angka 2 tampilkan februari
// jika angka 3 tampilkan maret
// :
// jika angka 12 tampilkan desember
let number = 2
switch(number){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("februari");
        break;
    case 3:
        console.log("maret");
        break; 
}