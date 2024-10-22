// Impor fungsi dari utils.js
import { yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest } from './utils.js';

// 1
yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3
let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area dengan radius 21: ${area21}, dan dengan radius 7: ${area7}`);

// 4
makeAjaxRequest('www.google.com');
