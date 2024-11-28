/* What is the OutPut of the Following Program: */
let student1 = {Name:"Shubhadweep",Roll_No:94};
let student2 = student1;
student2.Name = "Sandipta";

console.log("The Output of Student1: ",student1);
console.log("The Output of Student2: ",student2);

/*The Output of Student1:  { Name: 'Sandipta', Roll_No: 94 }
The Output of Student2:  { Name: 'Sandipta', Roll_No: 94 }
Explanation: 
In JavaScript, objects are assigned by reference, not by value. Changes to one reference affect all other references to the same object.
 */