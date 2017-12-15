// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
  let joinArr = arr1.concat(arr2);
  let sum = 0;
  joinArr.map(num => sum += num);
  return sum;
}
