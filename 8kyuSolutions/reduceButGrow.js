//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// P - non-empty array of integers
// R - the  result of multiplying each array item
// E - [1,2,3,4a] => 1 * 2 * 3 * 4 = 24
// P - use reduce method to multiply values

function grow(x){
  return x.reduce((c,acc) => c * acc )
}
