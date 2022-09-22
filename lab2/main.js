
const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;

const makeCalendar = require("./lab-two").makeCalendar;

const readline = require("readline-sync");

//makeCalendar(2022);

/*
const getDayOfTheWeekForUserDate = () => {
    const year = readline.question("Enter a year:  ");
    const month = readline.question("Enter a month:  ");
    const day = readline.question("Enter a day:  ");
    return getDayOfTheWeek(month, day, year);
};

getDayOfTheWeekForUserDate;
*/

const year = readline.question("Enter a year:  ");

const month = readline.question("Enter a month:  ");

const day = readline.question("Enter a day:  ");

    
console.log(getDayOfTheWeek(month, day, year));


//const answer = readline.question("enter date: ")
//console.log("You answered :" + answer)