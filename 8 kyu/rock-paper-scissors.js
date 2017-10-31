// Rock Paper Scissors
//
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples:
//
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps=(p1,p2)=>p1==p2?'Draw!':`Player ${/sp|pr|rs/.test(p1[0]+p2[0])?1:2} won!`;


//////////////// BEST PRACTICE //////////////////////
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
