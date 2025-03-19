const { spiral } = require("../src/spiral.js");
console.assert(JSON.stringify(spiral([[4, 5], [6, 7]])) === "[4,5,7,6]", "Test Failed");
console.assert(JSON.stringify(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) === "[1,2,3,6,9,8,7,4,5]", "Test Failed");
console.assert(
  JSON.stringify(
    spiral([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
    ])
  ) === "[1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]",
  "Test Failed"
);
console.assert(JSON.stringify(spiral([[1]])) === "[1]", "Test Failed: Single element");
console.assert(JSON.stringify(spiral([[1, 2], [3, 4], [5, 6]])) === "[1,2,4,6,5,3]", "Test Failed: Rectangular matrix");