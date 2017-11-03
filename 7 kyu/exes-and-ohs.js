// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true //

const XO = str => {
    //code here
    let strArr = str.toLowerCase().split('');
    let xArr = [];
    let oArr = [];
    let result = '';

    strArr.map(letter => {
      if(letter === 'x') {
        xArr.push(letter);
      } else if(letter === 'o') {
        oArr.push(letter);
      }
    });


    if(xArr.length === 0 && oArr.length === 0) {
      result = true;
    } else if(xArr.length === oArr.length) {
      result = true;
    } else {
      result = false;
    }

    return result;
}


//////////////// BEST PRACTICE //////////////////////////
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
