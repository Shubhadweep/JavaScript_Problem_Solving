/*
Write a function that takes a string as input and returns the count of vowels in that string. Consider a,e,i,o,u as vowels(both lowercase and uppercase).

# The input String may contain letters in both uppercase and lowercase.
# The output Should be a non-negative integer representing the count of vowels in the input string.
*/

function countVowels(str){
    let vowels = ['a','e','i','o','u'];
    let arrStr = str.split('');
    console.log("The String after Converting it into Array: ",arrStr);
    let count = 0;
    for(let char of arrStr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;    
}

console.log("The count of Vowels in the given String: ",countVowels('Shubhadweep'));
