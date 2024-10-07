// Calculate the Aveage:
/*
Write a function that takes array of numbers as input and returns the average of those numbers.

# The Function should Accept:
  * An array of numbers as input.
  * Calculate the sum of all the numbers in the Array.
  * Divide the sum by the total number of elements in the array 
    to find the average.
 */

    function findAverage(arr){
       let sum =  arr.reduce((accum,values,index)=>{
        console.log(accum,index,values);
        
            return accum + values;
        },0);
        console.log("The Sum of array elements: ",sum);
        
        return sum / arr.length;
    }

console.log("The average of the elements of the Given Array: ",findAverage([1,2,3,4]));
