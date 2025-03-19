const { drawCalendar } = require("../src/drawCalendar.js");
console.log(drawCalendar(2025, 3));
console.assert(drawCalendar(2025, 3).includes("March 2025"), "Test Failed");
console.assert(drawCalendar(2025, 2).includes("February 2025"), "Test Failed");