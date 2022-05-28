// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!


// P - 2 numbers greater than 0 
// R - number of papers needed
// E - See above
// P - if n & m are greater than 0, multiply n by m for the total number of required blank pages.

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}   