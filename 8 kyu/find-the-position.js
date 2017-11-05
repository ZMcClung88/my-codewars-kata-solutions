// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"
//
// This kata is meant for beginners. Rank and upvote to bring it out of beta

const position = letter => {
//Write your own Code!
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1).toString() + '';
}
