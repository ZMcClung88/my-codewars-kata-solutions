// Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
//
// If the array is empty, you should return 0.

const evenLast = (numbers) => {
  // Good luck
  let sum = 0;
  let last = numbers[numbers.length - 1];

  if(numbers.length === 0) { return 0 }

  for(var i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum * last;
}

/////////// BEST PRACTICE //////////////
function evenLast(numbers) {
  var arr = numbers.filter(  (currentValue, index, array) => index % 2 === 0).reduce( (sum,val)=>sum+val,0);
  var rst = (numbers.length > 0)?(arr*numbers[numbers.length-1]):0;
  return rst;
}
