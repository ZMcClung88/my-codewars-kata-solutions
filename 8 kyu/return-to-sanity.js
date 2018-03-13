// This function returns something strange. What's wrong?

// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }

//VVVVVVVVVVVVVVVVVVV\\

const mystery = () => new Object({ sanity: 'Hello' });
