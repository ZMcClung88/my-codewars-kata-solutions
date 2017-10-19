// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.

const invert = array => {
  let inverted = [];

  array.map(num => {
    inverted.push(parseInt(-num));
  })
  return inverted;
}
