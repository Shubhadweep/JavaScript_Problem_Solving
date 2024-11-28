/* Flatten a Nested Array
Problem: Flatten a multi-dimensional array into a single array.
Example:
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]
 */

let arr = [1, [2, [3, [4]], 5]];
let mergedArr = arr.flat(Infinity);
console.log("The Merged array is: ",mergedArr);