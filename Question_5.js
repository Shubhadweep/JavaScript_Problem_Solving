/*
write a function to determine Wheather a given string is a palindrome or not. A Palindrome is a word, phase, number or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

# The input string may contain letters, digits, spaces, punctuation and special characters.

# The function should be case-insensitive, meaning "Racecar"
and "racecar" should be considered the same.

# Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.

# The function should return true if the input string is a palindrome and false otherwise.
*/ 

function checkPalindrome(str){
    let trimStr = str.trim().toLowerCase();
    console.log("The String after trim and lowerCase Convertion: ",trimStr);

    let revStr = trimStr.split('').reverse().join('');
    console.log("The Reverse String is:",revStr);

    // Checking Palindrome or not: 
    if(trimStr === revStr){
        console.log("The Given String is a Palindrome");
        
        return true;
    }else{
        console.log("The String is not a Palindrome");
        return false;
    }    
}

console.log(checkPalindrome("Madam"));
