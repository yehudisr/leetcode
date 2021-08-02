// binarySearch, accepts a sorted array adn value and returns the index at which the value exits. Otherwise, return -1. 
//example: binarySearch([1,2, 3, 4, 5], 2) // 1


//create a starter at beginning of array, and one at end of array
// create middle point - if middle point equals value, return index
// if value is too small, move start up past middle
// if value is too big, move end down before middle

function binarySearch(arr, val){
  
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
   
   // whilst start is smaller than end 
    while(arr[middle] !== val && start < end) {
        if (val < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
    //reset middle
    middle = Math.floor((start + end) / 2) 
    }
   return (arr[middle]=== val) ? middle : -1
}