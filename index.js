// expecting time to be a string in the format like '8:15' or '12:30'
const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine"
];
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  } else {
    const arr = time.split(":").map(num => parseInt(num));
    let hour_adjust = arr[0];
    if (arr[1] > 30) hour_adjust++
    const hour = numberWords[hour_adjust % 24];

    if (arr[1] === 0) {
      return `${hour} o'clock`;
    } else if (arr[1] === 15) {
      return `quarter past ${hour}`;
    } else if (arr[1] < 30) {
      return `${numberWords[arr[1]]} past ${hour}`;
    } else if (arr[1] === 30) {
      return `half past ${hour}`;
    } else if (arr[1] === 45) {
      return `quarter to ${hour}`;
    } else {
      const min = 60 - arr[1];
      return `${numberWords[min]} to ${hour}`;
    }
  }

}

module.exports = { convertTimeToWords };