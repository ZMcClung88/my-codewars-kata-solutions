// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
//
// C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:
//
// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
// C# method calling example:
//
// string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]

// Return an array
const fizzbuzz = (n) =>{
  //
  let results = [];

  for(var i = 1; i <= n; i++) {
   if(i % 15 === 0) {
     results.push('FizzBuzz');
   } else if(i % 5 === 0) {
     results.push('Buzz');
   } else if (i % 3 === 0) {
     results.push('Fizz');
   } else {
     results.push(i);
   }
  }
  return results;
}
