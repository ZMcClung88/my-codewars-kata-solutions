// Write a function called whatday() which returns the day according to the number
//
// 1 returns 'Sunday'
//
// 2 returns 'Monday'
//
// 3 returns 'Tuesday'
//
// 4 returns 'Wednesday'
//
// 5 returns 'Thursday'
//
// 6 returns 'Friday'
//
// 7 returns 'Saturday'
//
// if it's not a number between 1-7 return "Wrong, please enter a number between 1 and 7"

const whatday = (num) => {

  // put your code here
  if(num < 1 || num > 7) {return 'Wrong, please enter a number between 1 and 7'}

  const days = {
    '1': 'Sunday',
    '2': 'Monday',
    '3': 'Tuesday',
    '4': 'Wednesday',
    '5': 'Thursday',
    '6': 'Friday',
    '7': 'Saturday'
  }

  return days[num];
}
