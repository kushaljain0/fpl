const { isPalindrom } = require("../src/isPalindrom.js");
console.assert(isPalindrom("racecar") === true, "racecar is a palindrom");
console.assert(isPalindrom("hello") === false, "hello is not a palindrom");
console.assert(isPalindrom("world") === false, "world is not a palindrom");
console.assert(isPalindrom("madam") === true, "madam is a palindrom");
