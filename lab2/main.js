const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;

const makeCalendar = require("./lab-two").makeCalendar;

const readline = require("readline-sync");

const getDayOfTheWeekForUserDate = () => {
  const year = readline.question("Enter a year:  ");
  const month = readline.question("Enter a month:  ");
  const day = readline.question("Enter a day:  ");
  console.log(getDayOfTheWeek(month, day, year));
};

makeCalendar(2022);

getDayOfTheWeekForUserDate();
