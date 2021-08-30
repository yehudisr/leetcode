// Print numbers 1 to 100, returning fizz if the number is divisible by 3, buzz if it is divisible by 5, and fizz buzz if it is divisible by 3 and 5

// create function that takes in array
// loop over array for any number that is divisible by 3, return fizz
// for any number is divisible by 5, return buzz
// for any number divisible by 3 and 5, return fizz buzz

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function fizzbuzz(num){

//     if (num % 3 === 0) {
//         return "fizz"
//     } else if(num % 5 === 0){
//         return "buzz"
//     } else if (num % 3 === 0 && num % 5 === 0){
//         return "fizzbuzz"
//     } else {
//         return num
//     }

// }

// arr.map(fizzbuzz)


for(let i = 1; i <=100; i++){

    if (i % 15 === 0){
        console.log("fizzbuzz")
    } else if ( i % 3 === 0){
        console.log("fizz")
    } else if ( i % 5 === 0){
        console.log("buzz")
    } else{
        console.log(i)
    }
}