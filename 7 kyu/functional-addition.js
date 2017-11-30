// Create a function add(n)/Add(n) which returns a function that always adds n to any number
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

const add = (n) => {
  return (v) => {return v + n}
}

/////////// BEST PRACTICE //////////////
function add(n) {
  return function (m) {
    return n+m;
  }
}
