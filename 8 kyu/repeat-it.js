// Create a function called repeatIt that takes in a string and a number (n).
//
// The function should return a string that repeats the initial passed in string (n) number of times.
//
// EXAMPLE:
//
// If you pass in string "Hi" with a number (2)
//
// --> "HiHi"
//
// If anything other than a string is passed in you should return "Not a string"

const repeatIt = (str, n) => {
    let solution = "";
    if (typeof str == "string"){
        for(i=1; i <= n; i++) {
            solution = solution + str;
        }
        return solution;
    }
    else {
        return "Not a string";
    }
  };
