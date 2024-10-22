// 1
const calculateAge = (birthYear) => 2019 - birthYear;

// 2
const yearUntilRetirement = ({ year, firstName }) => {
  let age = calculateAge(year);
  let retirement = 60 - age;

  retirement > 0 
    ? console.log(`${firstName} retires in ${retirement} years`)
    : console.log(`${firstName} is already retired.`);
}

// 3
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// 4
const phi = 3.14;
const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

// 5
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
}

// Ekspor semua fungsi
export { calculateAge, yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest };
