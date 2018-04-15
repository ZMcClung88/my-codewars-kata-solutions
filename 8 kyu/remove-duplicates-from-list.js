// Complete the functionthat removes duplicates from a list of numbers.
//
// The order of the sequence needs to stay the same.

const distinct = a => Array.from(new Set(a));

////////// ANOTHER EXAMPLE \\\\\\\\\\
const distinct = a => [...new Set(a)];
