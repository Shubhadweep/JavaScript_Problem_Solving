/*
Write a function called countChar that takes two separate arguments: a string and a character , the function should return the the numbers of times that specific character appears in the string.
To Do Constrains:
 The function should case sensitive
 The function should handle both upperCase and LowerCase Characters
 The character Parameter can be any printable ASCII character(the function should accept any Character that is part of the ASCII Character Set and is Printable)
 */

 function countChar(str,char){
    let string = str.toLowerCase();
    let character = char.toLowerCase();
    let arr = string.split('');
    //console.log(arr);

    let count = arr.reduce((accumulator,currentValue)=>{
        //console.log("The accumulator Value is: ",accumulator);
        if(currentValue === character){
            //console.log(accumulator);
            accumulator++;
        }
        return accumulator ;
    },0) /* 0 is initial Value*/
    console.log(`The ${char} is appear in the whole string : ${count} times`);
 }
 countChar("Shubhadweep","e");
