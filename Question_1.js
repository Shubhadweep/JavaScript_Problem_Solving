// Write a Function that takes a string as an input and returns the longest word from that string. if there are multiple longest words then return the first one encountered.
// * Constraints:
//    The input string may contain alphabetic characters,digits, spaces and Punctuations.
//    The input String is non empty
//    The input String may Contain Multiple words Separated by Spaces.

// * Notes:
//    ? If the input string is empty or contain only white Spaces ,the function should return False
//    ? The function should ignore leading and trailing white spaces while determining the longest words.

   function findLongestString(Str){
      if(Str.trim().length === 0){
         return false;
      }else{
         console.log("Your String is not Empty ");
      }

      let array = Str.trim().split(" ");
      console.log("Converting the String into an Array: ",array);

      let longestString = array.sort((a,b)=> b.length - a.length);
      console.log(longestString); // Descending order Sorting based on Length
      console.log("The Longest String is: ",longestString[0]);

   }
   let string = " I love my Country, Jai hind, Jai Bharat";
   findLongestString(string); // calling the function
