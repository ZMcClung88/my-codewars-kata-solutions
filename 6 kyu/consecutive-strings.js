// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

const longestConsec = (strarr, k) => {
  if(strarr === [] || k > strarr.length || k <= 0) { return ""; }
  let str = "";
    for(let i = 0; i < strarr.length; i++){
      let tem = strarr.slice(i,i+k).join("");
      if(tem.length > str.length) {
        str = tem;
      }
    }
    return str;
}
