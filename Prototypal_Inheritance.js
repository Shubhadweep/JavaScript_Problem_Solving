/* Prototypal Inheritance: 
Prototypal inheritance in JavaScript allows an object to inherit properties and methods from another object. Unlike classical inheritance (where classes inherit from other classes), JavaScript objects can directly inherit from other objects, enabling a more flexible inheritance structure.*/
const employees = {
    name:'Santanu Chakraborty',
    dept:'IT',
    Qualification:(degree)=>{
        console.log("This Person's  Qualification is:", degree);
    }
}

console.log(employees);/* If we Print this in the console then we will get an [[Prototype]]: Object.
Every Object and arrays has its Own Property name [[Prototype]]: Object.
Within this Prototype object many methods and Properties are there and these methods and Properties can be
directly used as that Object or Array Properties.
 */

// Example: 1

let array = [1,2,3,4,5];
console.log(array);
array.push(6,7,8,9,10);
console.log(array);
/*Here if we Print the array in the console then we will get the same [[Prototype]]: Object,
Within this we will get to see the all array methods like Push,pop,reduce,sort etc.
So these all array methods are inherited from the [[Prototype]]: Object Property.
As the Same way object methods and Properties like hasOwnProperty(),all are inherited from [[Prototype]]: Object.
 */

/* Example: 2
We can also Create our Own Methods within the [[Prototype]]: Object */
let emp_OfficialDetails = {
    // Declearing a function within this Object:
    payTax(){
        console.log("Every Employee must need to pay the tax that is 10% of the Salary amount"); 
    }
}

/* Now for example there are many emplyees in the Office and Every employee must need to Pay tax that means
all other employees need to access the payTax() function that is Present in emp_OfficialDetails Object.
So we never gonna create payTax() method again again for every employees, we will directly inherite the payTax() method from the emp_OfficialDetails Object Using Prototypal Inheritance. 
*/
let employees1= {
    name:'Shubhadweep Santra',
    dept:'IT',
    Salary:12500,
    Address: 'Howrah - 1'

}
// We want to use payTax() function of emp_OfficialDetails object , So we need to set emp_OfficialDetails object as a Prototype of employee1 Object.

employees1.__proto__ = emp_OfficialDetails;// By using this we can use payTax() for all other employees.

console.log(employees1); /* Now we will be able to see payTax() within prototype object of employees1 and also we can access it directly, This is Called Prototypal Inheritance.
But You need to run it in the Browser Console to get the [[Prototype]]: Object ,not in the Node Environment*/

employees1.payTax();

/*Note: But For Example if Any employee has some tax deduction Policies so his/her tax rate may be different
Example: */
let employees2 = {
    name:'Rohan Santra',
    dept:'Sales',
    Address:'Kolkata',
    payTax : function(){
        console.log('This employee tax rate is 7%');
    }
    
}
employees2.__proto__ = emp_OfficialDetails;
/*Here both the Object employees2 and within its Prototye Having the Same Method PayTax(),
In this type of Case, always object's Own Method will be used or better to say Called */
employees2.payTax();
