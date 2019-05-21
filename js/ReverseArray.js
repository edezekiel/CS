function ReverseArray(array) {
  // return array.reverse()
  let reversed = []
  array.map((element) => {
    reversed.unshift(element)
  })
  return reversed
}
