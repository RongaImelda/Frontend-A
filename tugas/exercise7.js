// 1. Menggunakan destructuring pada parameter object
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  retirement > 0 
    ? console.log(`${firstName} retires in ${retirement} years`)
    : console.log(`${firstName} is already retired.`);
}

yearUntilRetirement({ year: 1987, firstName: 'John' });

// --------------------------------------------

// 2. Menggunakan rest operator untuk menangkap sisa parameter
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); // Output: 28

// --------------------------------------------

// 3. Menggunakan destructuring dengan default value pada object
const phi = 3.14;
let radius = 0;

const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
// Output: Area with 21 radius: 1384.74, and area with 7 radius: 153.86

// --------------------------------------------

// 4. Menggunakan default value pada parameter method
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
}

makeAjaxRequest('www.google.com');  // Output: www.google.com GET

// --------------------------------------------
// Destructuring pada Array dan Object
// --------------------------------------------

// 5. Destructuring Array
const fruits = ['Apple', 'Banana', 'Orange'];
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // Output: Apple
console.log(secondFruit); // Output: Banana

// 6. Destructuring Object
const person = { name: 'John', age: 30 };
const { name, age } = person;

console.log(name);  // Output: John
console.log(age);   // Output: 30

// 7. Destructuring dengan Default Value pada Array
const [a = 5, b = 7] = [1];
console.log(a);  // Output: 1
console.log(b);  // Output: 7

// 8. Destructuring dengan Default Value pada Object
const { userName = 'Anonymous', userAge = 18 } = { userAge: 20 };
console.log(userName);  // Output: Anonymous
console.log(userAge);   // Output: 20

// 9. Destructuring dengan Rest Operator pada Array
const [firstNum, ...restNums] = [10, 20, 30, 40];
console.log(firstNum);  // Output: 10
console.log(restNums);  // Output: [20, 30, 40]

// 10. Destructuring dengan Rest Operator pada Object
const { cityName, ...otherDetails } = { cityName: 'New York', country: 'USA', population: 8000000 };
console.log(cityName);   // Output: New York
console.log(otherDetails); // Output: { country: 'USA', population: 8000000 }
