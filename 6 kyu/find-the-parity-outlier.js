// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
//
// For example:
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
//
// Should return: 11
//
// [160, 3, 1719, 19, 11, 13, -21]
//
// Should return: 160

const findOutlier = integers =>{
  //your code here
  let odd = [];
  let even = [];

  integers.map(function(n) {
    if(n % 2 === 0) {
      even.push(n)
    } else {
      odd.push(n);
    }
  })

  return odd.length > even.length ? even[0] : odd[0];
}
