// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

const isIsogram = (str) => {
  //...
  str = str.toLowerCase();
  let matches = 0;
  for(let o = 0; o < str.length; o++){
     //for every o element, compare to every i element:
     for(let i = 0; i < str.length; i++){
       if(str[i] === str[o]){
         matches++;
       }
     }
     if(matches > 1){
       return false;
     } else {
       //reset matches so it doesn't keep accumulating
       matches = 0;
     }
  }
  return true;
}
