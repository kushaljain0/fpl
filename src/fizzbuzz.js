function fizzBuzz() {
  console.log(
    Array.from({ length: 100 }, 
      (_, i) => (++i % 15 && ["", "Fizz", "Buzz", "FizzBuzz"][(i % 3 === 0) + 2 * (i % 5 === 0)]) || "FizzBuzz").join("\n")
  );
}

module.exports = { fizzBuzz };