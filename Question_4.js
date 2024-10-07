/*
Write an function that sort an array of numbers in ascending Order.
//To-do requirements:
 * It should return a new array of numbers with ascending Order.
 * It Should not Change the original Array
 * You are Not allowed to use the build in Sort() method.
 */
function ascendingSort(arr){
    return arr.sort((a,b)=>a-b);
}
let noArr = [10,90,50,70,30,20,40,80,100];
 let resultArr = ascendingSort(noArr);
 console.log("The Sorted New Array is: ",resultArr,noArr);