// Complete the function which converts a binary number (given as a string) to a decimal number.

// P string of 1's and 0's to represent a binary number
// R the decimal representation of the binary number.
// E "1001001" -> 73
// P Check each char of string to see if it's a 1 or a 0. If it's a 1
// add 2^(index)

function binToDec(bin){
  // ...
  let dec = 0;
  for(i=0; i < bin.length; i++){
    if(bin[i] == 1){
      dec += 2**i
    }
  }
  return dec
}

