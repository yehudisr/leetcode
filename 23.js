// Write a function that takes an array A as an input and a number to search S and print its occurence!
// // # e.g. Input: A = [1, 3, 4, 5, 7, 5, 3], S = 5 and Output: Number 5 is at (4, 6) place


// loop through array
// print index when element equals the S input


// function index(arr,S){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===S) return i
//     }
//     return `Number ${S} is at ${i} place`
// }

function index(arr, S){
    let results = []
    let getIndex = arr.indexOf(S)
    while (getIndex != - 1){
        results.push(getIndex)
        getIndex = arr.indexOf(S, getIndex + 1)
    }
    //console.log(results)
    return `Number ${S} is at ${results} place.`
}

index([1, 3, 4, 5, 7, 5, 3], 5)