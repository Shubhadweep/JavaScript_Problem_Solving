/*
Write a function that takes an array of numbers as input and returns the max number from the Array.
 */

function findMax(arr){

    return Math.max(...arr);

}

let array = [450,750,888,1025,999,1599,2000];

console.log(findMax(array));

