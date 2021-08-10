// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"




function longest(s1, s2) {
    // use set() to remove duplicates and create array
    // use sort to put in alphabetical order
    // use join to convert back into string
    return [...new Set(s1 + s2)].sort().join('')
  }