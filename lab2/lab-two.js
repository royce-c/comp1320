//module.exports = {isLeapYear, getMonthCode, convertDayOfTheWeekNumber, getDayOfTheWeek, makeCalendar};

const isLeapYear = (year) => {
  if (year % 4 != 0) {
    return false;
  } else if (year % 100 != 0) {
    return true;
  } else if (year % 400 != 0) {
    return false;
  } else return true;
};

const getMonthCode = (month, year) => {
  const monthChart = {
    "january": 1,
    "february": 4,
    "march": 4,
    "april": 0,
    "may": 2,
    "june": 5,
    "july": 0,
    "august": 3,
    "september": 6,
    "october": 1,
    "november": 4,
    "december": 6,
  };

  let monthCode = monthChart[month.toLowerCase()];

  if ((month == "January" || month == "February") && isLeapYear(year)) {
    monthCode = monthCode - 1;
  }

  const firstTwoDigits = String(year).slice(0, 2);

  if (firstTwoDigits == 16 || firstTwoDigits == 20) {
    monthCode = monthCode + 6;
  } else if (firstTwoDigits == 17 || firstTwoDigits == 21) {
    monthCode = monthCode + 4;
  } else if (firstTwoDigits == 18) {
    monthCode = monthCode + 2;
  }

  //console.log(firstTwoDigits)
  //console.log(monthCode)

  return monthCode;
};

const convertDayOfTheWeekNumber = (dayOfTheWeekNumber) => {
  const dayOfWeekChart = {
    0: "saturday",
    1: "sunday",
    2: "monday",
    3: "tuesday",
    4: "wednesday",
    5: "thursday",
    6: "friday",
  };

  return dayOfWeekChart[dayOfTheWeekNumber];
};

const getDayOfTheWeek = (month, day, year) => {
  const lastTwoDigits = String(year).slice(-2);

  const twelvesInLastTwoDigits = parseInt(lastTwoDigits / 12);

  const divisionRemainder = lastTwoDigits % 12;

  const foursInRemainder = parseInt((lastTwoDigits % 12) / 4);

  const monthCode = getMonthCode(month, year);

  const dayOfTheWeekNumber =
    (twelvesInLastTwoDigits +
      divisionRemainder +
      foursInRemainder +
      day +
      monthCode) %
    7;

  return convertDayOfTheWeekNumber(dayOfTheWeekNumber);
};

//console.log(getDayOfTheWeek("February", 16, 1789));

const makeCalendar = (year) => {
  const monthChart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const daysInMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(year)) {
    daysInMonthList[1] = 29;
  }
  //console.log(daysInMonthList)

  for (month of monthsList) {
    //console.log("Month: " + month)
    //console.log(daysInMonthList[month - 1])

    let day = 1;

    while (day <= daysInMonthList[month - 1]) {
      console.log(
        month +
          "-" +
          day +
          "-" +
          year +
          " is a " +
          getDayOfTheWeek(monthChart[month - 1], day, year) +
          "."
      );
      day += 1;
    }
  }
};

//makeCalendar(2019);

module.exports = {
  //isLeapYear,
  //getMonthCode,
  //convertDayOfTheWeekNumber,
  getDayOfTheWeek,
  makeCalendar,
};
