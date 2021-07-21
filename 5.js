
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence fo the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second without their order changing.


var isSubsequence = function(s, t) {
    // "abc",  "ahbgdc"
    
    // abc       a(h)b(gd)c
    
    let i = 0
    let j = 0
    
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i += 1
            j += 1
        } else {
            j += 1
        }
    }
    
    return i === s.length
};
  