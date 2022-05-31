// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// P - Hours, minutes and seconds 
// R - Return time in milliseconds 
// E - See above 
// P - Convert all units of time measurement to milliseconds then add together

function past(h, m, s) {
    let hourMili, minuteMili, secMili, totalMili;
    hourMili = h * 3.6e6;
    minuteMili = m * 60000;
    secMili = s * 1000;
    totalMili = hourMili + minuteMili + secMili;
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
        return "Input outside of constraints";
    } else {
        return totalMili;
    }
}
