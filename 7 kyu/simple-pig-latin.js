// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str2){

  const strArr = str2.split(' ');
  const result = [];

   for (var i = 0; i < strArr.length; i++) {

     const backEnd = strArr[i].substring(1);
     const letter = strArr[i].substring(0, 1);

     result.push(backEnd + letter + 'ay');
     }

  return result.join(' ');
}
