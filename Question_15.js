/*
Write a function isEmptyObject that takes an object as input and determines wheather it is empty or not. An empty object is defined as an object with no own Properties.
 */

function isEmptyObject(obj){
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            console.log("The object is Not empty");
            return true;
        }else{
            console.log("The obj is Empty");
            return false;   
        }
    }
}

let Students = {
    Name:"Shubhadweep Santra",
    Age:26,
    Qualification:"MCA",
    College:"RCCIIT"
}
isEmptyObject(Students);

// let Teachers = {};
// isEmptyObject(Teachers);