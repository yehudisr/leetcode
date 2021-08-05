// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


var singleNumber = function(nums) {
    let num = {}
    for(let i = 0 ; i < nums.length ; i++){
    let item = nums[i]
    if(num[item]){
    num[item]++
    }
    else{
    num[item] = 1
    }
    }
    for(let key in num){
    if(num[key] == 1)
    return key
    }
    
    };