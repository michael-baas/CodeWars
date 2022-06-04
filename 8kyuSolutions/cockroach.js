// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


// P - number 
// R - new speed in cm/s 
// E - see above 
// P need to multiply number by 27.7778 to return in cm/s

function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.7778);
}