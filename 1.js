//Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

///////    !!!!!! You can return the answer in any order !!!!!!!!     //////

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoNums(nums, target){
    // loop over nums to get first numbers

    for(let i = 0; i < nums.length; i++){
    // loop over nums again to get second numbers
    for(let j = 0; j < nums.length; j++){
        if (nums[i]+ nums[j]=== target)
        return [i,j]
    }
    //  if num1 and num2 equal target, return num1 and num2
}
}