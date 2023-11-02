const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

function timeWord(time) {
  const hoursInWords = [
    "midnight",
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
    "noon"
  ];

  const minutesInWords = [
    "o'clock",
    "oh one",
    "oh two",
    "oh three",
    "oh four",
    "oh five",
    "oh six",
    "oh seven",
    "oh eight",
    "oh nine",
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

  const [hour, minute] = time.split(":").map(Number);

  const period = hour < 12 ? "am" : "pm";

  if (minute === 0) {
    if (hour === 0 || hour === 12) {
      return hoursInWords[hour];
    } else {
      return `${hoursInWords[hour]} ${period}`;
    }
  } else if (minute <= 29) {
    return `${hoursInWords[hour]} ${
      minutesInWords[minute]
    } ${period}`;
  } else {
    return `${hoursInWords[hour + 1]} ${
      minutesInWords[60 - minute]
    } ${period}`;
  }
}

module.exports = timeWord;
