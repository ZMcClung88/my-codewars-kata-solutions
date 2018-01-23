// Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
//
// Example
// summy("1 2 3")  ==> 6

const summy = stringOfInts => {
  let strArr = stringOfInts.split(" ");
  let results = 0;

  strArr.map(item => {
    if(!isNaN(item)){
      results += Number(item);
    }
  })
  return results;
};
