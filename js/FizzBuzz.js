console.log("FizzBuzz")

const FizzBuzz = number => {
  for (let i = number; i > 0; i--) {
    if ((i % 2 === 0) && (i % 3 === 0)) {
      console.log("FizzBuzz", i)
    } else if ((i % 2 === 0) && !(i % 3 === 0)) {
      console.log("Fizz", i)
    } else {
      console.log("Buzz", i)
    }
  }
}
