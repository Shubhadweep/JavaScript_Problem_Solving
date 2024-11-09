/*
What is the Output of the Following Javascript Code: 
console.log(1+"1");
console.log(1 * '1');
console.log(1 - '1');
 */

console.log(1 + "1"); // Output: "11"
console.log(1 * "1"); // Output: 1
console.log(1 - "1"); // Output: 0
/*
Explanation:
console.log(1 + "1");
JavaScript performs string concatenation when using the + operator and one of the operands is a string.
The number 1 is converted to a string and concatenated with "1".
Output: "11"

console.log(1 * '1');
JavaScript attempts to convert strings to numbers when using the * operator.
The string '1' is converted to the number 1 and then multiplied by 1.
Output: 1

console.log(1 - '1');
JavaScript converts the string '1' to a number when using the - operator.
The subtraction is performed as 1 - 1.
Output: 0
 */
