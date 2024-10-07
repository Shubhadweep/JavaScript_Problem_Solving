/*
Write a function that removes duplicate elements from an Array.
 */

function removeDuplicate(arr){
    // using Set method we can remove duplicasy very easily:

    let newArr = new Set(arr);
    console.log("After Removing duplicate elements: ",newArr);

    let array = [...newArr]; // Using Spread Operator
    //console.log("The new Array after removing all duplicate elements: ",array);
    return array;   
}

let arr1 = [1,2,2,3,3,4,5,5,6,6,7,8,9,10];
console.log("Array after removing Duplicate elements: ",removeDuplicate(arr1));
