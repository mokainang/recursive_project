function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}
console.log(isLeapYear(2008));
console.log(isLeapYear(2025));