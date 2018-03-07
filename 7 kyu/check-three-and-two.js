// Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.
//
// For example:
//
// ['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
// ['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
// ['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

const checkThreeAndTwo = array => {
  //your code here
  let aArr = [];
  let bArr = [];
  let cArr = [];

  array.map(item => {
    if (item === 'a') {
      aArr.push(item);
    } else if (item === 'b') {
      bArr.push(item);
    } else if (item === 'c') {
      cArr.push(item);
    }
  });

  if (
    (aArr.length === 3 || bArr.length === 3 || cArr.length === 3) &&
    (aArr.length === 2 || bArr.length === 2 || cArr.length === 2)
  ) {
    return true;
  } else {
    return false;
  }
};
