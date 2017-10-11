// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
//
// For example, when an array is passed like [19,5,42,2,77], the output should be 7.
//
// [10,343445353,3453445,3453545353453] should return 3453455.
//
// Hint: Do not modify the original array.

const sumTwoSmallestNumbers = numbers => {
  let ordered = numbers.sort(function(a,b){return a-b;});
  let result = 0;

  for(var i = 0; i < ordered.length; i++) {
    if(i === 0) {
      result+=ordered[0];
    }
    if(i === 1) {
      result+=ordered[1];
    }
  }
  return result;
//Code here
};
