// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
  // TODO: Program me
  let zeros = [];
  let nonZeros = [];

  arr.map(item => {
   item === 0 ? zeros.push(item) : nonZeros.push(item);
  });

  return nonZeros.concat(zeros);
}


/////////// BEST PRACTICE //////////////
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
