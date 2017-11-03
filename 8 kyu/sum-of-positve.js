// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.

const positiveSum = arr => {
  let result = 0;

  arr.map(num => {
    if(Math.sign(num) === 1) {
      result += num;
    }
  })
  return result;
}
