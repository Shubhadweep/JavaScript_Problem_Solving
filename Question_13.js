/*
Write a Javscript function to count the occurances of each element in an array and store the count in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

 */

function countOccurance(arr){
    let count = {};

    for(let values of arr){
        count[values] = (count[values] || 0) + 1;
    }
    return count;
}

let array = [1,2,2,3,4,5,6,7,7,8,8,9,10,11,11,12]
console.log("The Occurance of each Array elements as a Object format: ",countOccurance(array));
