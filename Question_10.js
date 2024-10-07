/*
Write a function that takes a number as input and returns the sum of its digits.
# The input number will always be a positive number.
# The input number can have multiple digits.
# The output should be the sum of all the digits in the input nuumber.
 */

function doSum(num){
    console.log("The type of num: ",typeof num);
    let numArray = Array.from(String(num),Number); //Converting the num into integer Array
    console.log("The Number in Array Format: ",numArray);

    let calculateSum = numArray.reduce((accum,currentNum)=>{
        //console.log(accum,currentNum);
        return accum = accum + currentNum;
    },0);

    return calculateSum;
}

console.log("The Sum of the Given Number: ",doSum(1234));


