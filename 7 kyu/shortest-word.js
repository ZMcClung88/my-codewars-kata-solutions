// x Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

const findShort = s => {
  let wordLength = 10;
  s = s.split(' ');

  s.map(word => {
    if(word.length < wordLength) {
      wordLength = word.length;
    }
  })

  return wordLength;
}
