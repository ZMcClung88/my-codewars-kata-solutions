// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!

const capitalize = (str) => {
  let evenArr = str.split('');
  let oddArr =  str.split('');

  for(var i = 0; i < evenArr.length; i++) {

    if(i === 0 || i % 2 === 0) {
      evenArr[i] = evenArr[i].toUpperCase();
    }
  }
  for(var j = 0; j < oddArr.length; j++) {

    if(j % 2 !== 0) {
      oddArr[j] = oddArr[j].toUpperCase();
    }
  }
  return new Array(evenArr.join(''), oddArr.join(''));
}
