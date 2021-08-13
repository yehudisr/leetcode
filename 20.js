// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  // get num to array of digits
  const arr = num.toString().split('')
  // square each digit
  const squaredDigits = arr.map(n => n * n)
  //join digits
  const squared = squaredDigits.join('')
 //convert to integer
  return Number(squared)
    
  }