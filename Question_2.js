/*
You are require to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:
  The input string should be converted in to a hashtag format and each word of the string is capitalized and concatenated with each other without any spaces.
  If the length of the input string is greater than 280 characters or if the given string is empty or contains only white spaces then the function should return false.
  otherwise the function should return generated hash tag prefixed with #.
 */

  // Method: 1
  function generateHash(str){
    if(str.length > 280 || str.length === 0){
        return false;
    }else{
        console.log("You have entered a valid String");
    }
    let hashStr = str.split(" ");
    console.log("The String is converted into Array: ",hashStr);
    hashStr = hashStr.map((currentStr) => currentStr.replace(currentStr[0], currentStr[0].toUpperCase()));
    hashStr = hashStr.join('');
    return (`#${hashStr}`)
  }
  let string = "my name is shubhadweep"
let result = generateHash(string);
console.log("The HashTag format of the given string is: ",result);


// Method: 2

let str = "happiness is just a State of mind";

function generateHashTag(String){
    if(String.length > 280 || String.length === 0){
        console.log("You have entered an invalid Sentence");
        return false;   
    }else{
        
        console.log("You have entered a valid String");

        let hashTag = String.split(' ');
        //console.log(hashTag);
        let caps = hashTag.map(value=>{return value.replace(value.charAt(0),value.charAt(0).toUpperCase())});
        console.log("Converting first Character of Each words in to capitalize: ",caps);

        let hashSentance = caps.join('');

        console.log(`The Final hash format Sentance: ",#${hashSentance}`);  
    }
}
   console.log(generateHashTag(str));
