// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "


const doubleChar = (str) => {
  // Your code here
  let strArr = str.split('');
  return strArr.map(function(char) {
    return char + char;
  }).join('');
}
