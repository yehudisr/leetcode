// Write a function that takes an array A as an input and a number to search S and print its occurence!
// // # e.g. Input: A = [1, 3, 4, 5, 7, 5, 3], S = 5 and Output: Number 5 is at (4, 6) place


// loop through array
// print index when element equals the S input


function index(arr,S){

    for(let i = 0; i < arr.length; i++){
        if(arr[i]===S) return i
    }
    return `Number ${S} is at ${i} place`
}