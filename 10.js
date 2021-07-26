
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    let longest_common_prefix = "";
    let first_word = strs[0];
    
    for (let i = 0; i < first_word.length; i++) {
        const first_word_current_char = first_word[i]
        
        // Iterate over every other string 
        for(let j=1; j < strs.length; j++){
            const current_word = strs[j];

            const is_out_of_bounds  = i >= current_word.length; // if first word is a longer string than another string
            const is_char_different = current_word[j][i] !== first_word[i];
            
            if(is_char_different || is_out_of_bounds){
                return longest_common_prefix
            }
        }
        // If we've made it here, that means we iterated over all the strings anc checked their character
        longest_common_prefix += first_word_current_char;
    }
    return longest_common_prefix;
};