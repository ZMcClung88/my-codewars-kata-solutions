// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''

const list = names => {
  //your code here
  let string = '';

  for(i = 0; i < names.length; i++) {
    if(i >= names.length - 2) {
      string += names[i]['name'] + ' & '
    } else {
      string += names[i]["name"] + ', ';
    }
  }

  return string.slice(0, string.length - 3);
}
