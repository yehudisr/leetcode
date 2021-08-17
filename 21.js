
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// initialize sum
// break up number using modulo - avoid changing number to string/ array
// if sum is equal to 1, its happy and we return true
// if sum is between 1 and 4 it will get stuck in loop, return false
// make recursive call to function, so that sum can be split, squared and summed again

var isHappy = function(n) {
  
    let sum = 0
    while (n > 0) {
      let i = n % 10
      n = Math.floor(n / 10)
      sum += i * i
    }
    if (sum === 1) {
      return true
    } else if (sum > 1 && sum <= 4) {
      return false
    }
    return isHappy(sum)
   
   }