// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
//
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

const sumDigits = number => {
  let numStr = number + '';
  let numArr = numStr.split('');
  let results = 0;

  numArr.map(item => {
    if (item !== '-') {
      results += Number(item);
    }
  });

  return results;
};

//////////// BEST PRACTICE \\\\\\\\\\\\
const sumDigits = number => {
  return Math.abs(number).toString().split('').reduce(function(a, b) {
    return +a + +b;
  }, 0);
};
