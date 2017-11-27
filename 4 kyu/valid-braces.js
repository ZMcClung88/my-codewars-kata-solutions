// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?
//
// A string of braces is considered valid if all braces are matched with the correct brace.
//
// Examples
//
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

const validBraces = (braces) => {

  const bracesKey = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  let bracesArr = [];

  for (var i = 0; i < braces.length; i++) {

    if (bracesKey.hasOwnProperty(braces.charAt(i))) {
      bracesArr.push(braces.charAt(i));
    } else {
      if (bracesKey[bracesArr.pop()] !== braces.charAt(i)) {
          return false;
      }
    }
  }
  return !bracesArr.length;
};
