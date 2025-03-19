const { quadraticEquation } = require("../src/quadraticEquation.js");
console.assert(JSON.stringify(quadraticEquation(1, -8, 72)) === "[]", "Test Failed");
console.assert(JSON.stringify(quadraticEquation(1, 12, 36)) === "[-6]", "Test Failed");
console.assert(JSON.stringify(quadraticEquation(1, 6, 1)) === "[-0.1715728752538097,-5.82842712474619]", "Test Failed");
console.assert(JSON.stringify(quadraticEquation(1, 0, -4)) === "[2,-2]", "Test Failed: Roots should be 2 and -2");
console.assert(JSON.stringify(quadraticEquation(1, 2, 1)) === "[-1]", "Test Failed: Root should be -1");
console.assert(JSON.stringify(quadraticEquation(1, -3, 2)) === "[2,1]", "Test Failed: Roots should be 2 and 1");