// Triangular number is any amount of points that can fill an equilateral triangle.

// Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

// alt text

// Hint!
// T(n) = n * (n + 1) / 2,
// n - is the size of one side.
// T(n) - is the triangular number.
// Given a number T from interval [1..2147483646], find if it is triangular number or not.

// P - integer greater than 0 
// R - true of false
// E - See above 
// P - Loop through to check if the function works or not




function isTriangular(t) {
    for (let i = 1, n = 1; i <= t; n++) {
        i = (n * (n + 1)) / 2;
        if (i == t) return true;
    }
    return false;
}
