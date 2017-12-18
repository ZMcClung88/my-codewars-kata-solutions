// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!
//

const past = (h, m, s) => {
  //#Happy Coding! ^_^
  let secMil = s * 1000;
  let minMil = m * 60000;
  let hourMil = h * 3600000;

  return secMil + minMil + hourMil;
}



///////////// BEST PRACTICE ////////////////
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
