/*
Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal(i.e., contain the same elements in the same order), and false otherwise.
 */

function arraysAreEqual(arr1,arr2){
    if(arr1.length === arr2.length){
       return arr1.every((currentValue,index,array)=>{ // Three parameters can be passed in every method, just for testing here we pass array.
        console.log(currentValue,index,array); 
        return  currentValue === arr2[index];
        //console.log("Arrays are not equal");
       });
    }else{
        console.log("These two array lengths are not equal,so arrays are not equal");
        return false;
    }
}

let Arr1 = [1,2,3];
let Arr2 = [1,2,3];

console.log("The two arrays Comparison result is: ",arraysAreEqual(Arr1,Arr2));
