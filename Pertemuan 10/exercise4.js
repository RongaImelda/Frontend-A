// Array Exercise
// No 1
let people1 = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people1.length; i++) {
    console.log(people1[i]);
}

console.log('-----------------');

// No 2
let people2 = ["Greg", "Mary", "Devon", "James"];

people2.forEach(function(person) {
    console.log(person);
});

console.log('-----------------');

// No 3
let people3 = ["Greg", "Mary", "Devon", "James"];

people3.shift();

console.log(people3); 

// no 4
let people = ["Greg", "Mary", "Devon", "James"];

people.pop();

console.log(people); 

console.log('-----------------');

// no 5
let newPeople = ["Greg", "Mary", "Devon", "James"];
newPeople.unshift("Matt");
console.log(newPeople); 

console.log('-----------------');

// no 6
let people5 = ["Matt", "Greg", "Mary", "Devon", "James"];

people5.push("Imelda");

console.log(people5);

console.log('-----------------');

// no 7
let people6 = ["Matt", "Greg", "Mary", "Devon", "James", "Imelda"];

for (let i = 0; i < people6.length; i++) {
    console.log(people6[i]);
    if (people6[i] === "Mary") {
        break; 
    }
}

console.log('-----------------');

// no 8
let people7 = ["Matt", "Greg", "Mary", "Devon", "James", "Imelda"];

let filteredPeople = people7.filter(person => person !== "Mary" && person !== "Matt");

console.log(filteredPeople); 

console.log('-----------------');

// no 9
let people8 = ["Matt", "Mary", "Imelda"];

let indexToRemove = people8.indexOf("Imelda");
if (indexToRemove !== -1) {
    people8.splice(indexToRemove, 1);
}
people8.push("Elizabeth", "Artie", "Imelda");

console.log(people8); 
console.log('-----------------');

//no 10
let people9 = ["Matt", "Mary", "Elizabeth", "Artie", "Imelda"];

let withBob = people9.concat("Bob");

console.log(withBob);

console.log('-----------------');

// Object exercise
// no 1
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

console.log(programming.languages); 

console.log('-----------------');

// no 2
programming["difficulty"] = 7;

console.log(programming.difficulty); 

console.log('-----------------');

// no 3

delete programming.jokes;

console.log(programming); 
console.log('-----------------');

// no 4

programming.isFun = true;

console.log(programming); 
console.log('-----------------');

// no 5

programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);

console.log(programming.languages); 

console.log('-----------------');
