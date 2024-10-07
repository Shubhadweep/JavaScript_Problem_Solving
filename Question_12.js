/*
Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

# The input array may contain both Positive and negative integers.
# The Array May be empty.
# The Input Array may contain dublicate values.
*/

function findMin(arr){
   let sortArr = arr.sort((a,b)=>{
        return b - a;
    });
    return sortArr[sortArr.length-1];
}
//Another Method: 
function findMinimum(arr){
    let minValue = Math.min(...arr);
    console.log("The Minimum Value of the Given array is: ",minValue);   
}
findMinimum([30,20,10,-10,-30,80]);
console.log("The minimum value of the Given Array is: ",findMin([50,-10,20,-30,80]));
