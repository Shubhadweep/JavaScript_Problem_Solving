/*
Write a function that calculates the Sum of a nested Array.
The Nested array may contain multile arrays.
 */

let arr1 = [[1,2,3,4,5],[6,7,8,9,10]];

function nestedArrSum(arr){

    let finalArr = arr1.flat();;
    console.log("The Array is: ",finalArr);

    let SumArr = finalArr.reduce((accum,value)=>{
        //console.log(value,accum);    
        return accum = accum + value;    
    },0);
    
    return SumArr
}


console.log("The Sum of the Nested Array is: ",nestedArrSum(arr1));
