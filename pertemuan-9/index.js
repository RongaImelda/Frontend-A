// javascript loop

//Array Object
// di saat bahas loop pasti berhubungan dengan array

//let students = [ 
   // {
        //id 1,
        //firstName: "John",
        //grade: 80,
    //},
    //{
        //id 2,
        //firstName: "Jane",
        //grade: 90,

    //},
    //{
        //id 3,
        //firstName: "Bob",
        //grade: 100,
    //},
//];

//console.log (students);

// 1. for - loop
//for(let i=0; i<students.length; i++) {
    //console.log (students[i]);
//}

// 2. while - loop
//let i = 0
//while (i < students.length) {
    //console.log (students[i].firstName);
    //i++;
//}

// 3. do - while - loop
//let i = 0;
//do{
    //console.log(students[i].firstName);
    //i++;
//} while (i < students.length);

// 4. Array built-in method
// 4.a foreach()

//students.forEach(function (item){
    //console.logg(item.firstName);
//});

// 4.b map()
//let output = students.map(function (item){
    //return item.firstName
//});
//console.log(output);

//4.c filter()

//let output1 = students.filter(function (item){
    //return item.grade >=90;
//}); 
//console.log(output1);

// 4.d find()
//let output2 = students.find(function (item){
    //return item.grade >=90;
//}); 
//console.log(output2);

// 4.e findIndex()
//let output3 = students.findIndex(function (item){
    //return item.firstName === "Jane";
//}); 
//console.log(output2);

// mini exercise
let contries = [];

// 1. cari index dari negara indonesia
// 2. dengan menggunakan filter tampilkan semua negara yang berakhiran "sia"