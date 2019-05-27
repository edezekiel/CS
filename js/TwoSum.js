function twoSum(array, sum) {
  console.log(array, sum)

  // loop over each element
  let answer = []
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if ((array[i] + array[k]) === sum) {
        let elements = []
        elements.push(array[i])
        elements.push(array[k])
        answer.push(elements)
        console.log(answer)
      }
    }
  }
  // add to other elements
  return answer
  // if sum = four, add two to array
  // return pairs that add up to sum
}
