// solution to Silicon West FizzBuzz problem
const FizzBuzz = number => {
  let output = [];

  for (let i = 1; i <= number; i++) {
    if ((i % 2 === 0) && (i % 3 === 0)) {
      output.push("FizzBuzz")
    } else if ((i % 2 === 0) && !(i % 3 === 0)) {
      output.push("Fizz")
    } else if (i % 3 === 0) {
      output.push("Buzz")
    } else {
      output.push(i)
    }
  }
  return output
}
