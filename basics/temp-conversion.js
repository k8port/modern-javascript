const F = 'f';
const K = 'k';
const C = 'c';
const FV = 32;
const KV = 459.67;
const CONVERSION_FRACTION = 5/9;

let fahrenheit = 50;  // 0c, 273.15k
// calculate celsius and store in variable, then print
// formula: (fahrenheit - 32) * 5/9 = celsius
let celsius = (fahrenheit - FV) * CONVERSION_FRACTION;
console.log(celsius + C);

// calculate kelvin and store in variable, then print
// formula: (fahrenheit - 32) * 5/9 + 273.15 = kelvin
let kelvin = (fahrenheit + KV) *  CONVERSION_FRACTION;
console.log(kelvin + K);

