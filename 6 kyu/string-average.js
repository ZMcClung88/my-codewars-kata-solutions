// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:
//
// "zero nine five two" -> "four"
//
// If the string is empty or includes a number greater than 9, return "n/a"

const averageString = str => {
  let numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  sum = 0;
  strArr = str.split(' ');

  for(var i = 0; i < strArr.length; i++){
    if(numObj[strArr[i]] === undefined){
      return 'n/a'
    }
    else{
      sum += numObj[strArr[i]]
    }
  }

  let results = Math.floor(sum/strArr.length);

  for(var key in numObj){
    if(results === numObj[key]){
      return key;
    }
  }
}
