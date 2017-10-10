// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

const order = words => {
  let sorted = [],
      split = words.split(' ');
  for ( var i = 0, length = split.length; i < length; i++ ) {
    for ( var s = 0, slength = split[ i ].length; s < slength; s++ ) {
      if ( ! isNaN( split[ i ].charAt( s ) ) ) {
        sorted[ parseInt( split[ i ].charAt( s ), 10 ) - 1 ] = split[ i ];
      }
    }
  }
  return sorted.join(' ');
}
