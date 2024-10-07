/*
write a function that takes non-negative number as input and returns its factorial. The factorial of non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1. 

# The Function Should work for any non-negative integer input.
 */

function findFactorial(num){
    
        let result = 1;

        for(let i = num; i>=1; i--){
            console.log(i);
             result = result * i;
        }
        return result;
    }


console.log("The Factorial value of the given Number is: ",findFactorial(5));
