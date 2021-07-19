// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(first, second){
  // good luck. Add any arguments you deem necessary.
  // break down first integer into obj
  // second loop to see if the second integer has same numbers as first
  let str1 = first.toString()
  let str2 = second.toString()
  
  if (str1.length !== str2.length) return false
 
  
  let countNum1 = {}
  let countNum2 = {}
  
  for (let i = 0; i < str1.length; i++){
      let num = str1[i];
      countNum1[num] ? countNum1[num]+=1 : countNum1[num] = 1;
  }
   
  for (let j = 0; j < str2.length; j++){
      let num = str2[j];
     countNum2[num] ? countNum2[num]+=1 : countNum2[num] = 1;
  }
  
  for (let key in countNum1){
      if (countNum1[key] !== countNum2[key]) return false
  }
  return true
}