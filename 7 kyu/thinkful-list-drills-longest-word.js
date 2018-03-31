// Write a function longest() that takes one argument, a list of words, and returns the length of the longest word in the list.
//
// For example:
//
// >>> words = ['simple', 'is', 'better', 'than', 'complex']
// >>> longest(words)
// 7
// Do not modify the input list.

const longest = words => {
  let longLength = 0;

  words.map(word => {
    word.length > longLength ? (longLength = word.length) : null;
  });

  return longLength;
};

function longest(words) {
  return words.reduce((a, b) => Math.max(a, b.length), 0);
}
