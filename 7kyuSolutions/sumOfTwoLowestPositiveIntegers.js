// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// P - An Array
// R - Integer
// E - See Above
// P - Determine lowest number by comparing each number vs current lowest number, if a new number becomes the lowest number, take the previous lowest number and put that into the lower number variable. At the end of the Array, add lower and lowest number and return them.

function sumTwoSmallestNumbers(numbers) {
    //Code here
    let lower = Infinity;
    let lowest = Infinity;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lower = lowest;
            lowest = numbers[i];
        } else if (numbers[i] < lower) {
            lower = numbers[i];
        }
    }
    return lowest + lower;
}