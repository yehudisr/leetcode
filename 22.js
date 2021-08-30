// Print numbers 1 to 100, returning fizz if the number is divisible by 3, buzz if it is divisible by 5, and fizz buzz if it is divisible by 3 and 5

// create function that takes in array
// loop over array for any number that is divisible by 3, return fizz
// for any number is divisible by 5, return buzz
// for any number divisible by 3 and 5, return fizz buzz

arr = [1, ... 100]

function fizzbuzz(num){

    if (num % 3 === 0) {
        return "fizz"
    } else if(num % 5 === 0){
        return "buzz"
    } else if (num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    } else {
        return num
    }

}

arr.map(fizzbuzz)
