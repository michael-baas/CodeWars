// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// 
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// P - String of space separated numbers
// R - the highest and lowest number in that string
// E - see above
// P - split string into array, spread array into Math.min()/ Math.max() 

function highAndLow(numbers){
  let ary = numbers.split(" ")
  let min = Math.min(...ary)
  let max - Math.max(...ary)
  return `${max} ${min}`
}
