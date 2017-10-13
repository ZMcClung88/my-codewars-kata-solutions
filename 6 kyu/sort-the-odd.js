// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortArray = array => {
  // Return a sorted array.
  const oddSort = array.filter(odd_num).sort(ascending);


  function ascending (a,b) {
    return a > b;
  }

  function odd_num (num) {
    return num % 2 !== 0
  }

  function reorder_odds (num) {
    return odd_num(num) ? oddSort.shift() : num;
  }

    return array.map(reorder_odds);


}
