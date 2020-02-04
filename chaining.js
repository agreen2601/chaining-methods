const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order
const descending = integers.sort((a,b) => b - a);
console.log("Sort the numbers in descending order", descending);


// Remove any integers greater than 19.
const removeBiggens = descending.filter(number => number < 19);
console.log("Remove any numbers greater than 19", removeBiggens);


// Multiply each remaining number by 1.5 and then subtract 1.
const multiplyNums = removeBiggens.map(num => (num * 1.5) - 1);
console.log("Multiply each remaining number by 1.5 and then subtract 1.", multiplyNums);


// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const sum = multiplyNums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Then output (either in the DOM or the console) the sum of all the resulting numbers.", sum);


// All 4 methods in 1
const allTogetherNow = integers.sort((a,b) => b - a).filter(number => number < 19).map(num => (num * 1.5) - 1).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("All 4 methods in 1", allTogetherNow)