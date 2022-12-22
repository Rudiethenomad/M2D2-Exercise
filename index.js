/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/ 


let dataType1 = "Numbers,";
let dataType2 = "Operators,";
let dataType3 = "Modulo,";
let dataType4 = "Operators-Precedence,";
let dataType5 = "Special-numbers,";
let dataType6 = "Strings,";
let dataType7 = "Booleans,";
let dataType8 = "Logic-operators,";

console.log ("There are some common datatypes in javaScript that are used regularly, they are a means to store variables for code, the main ones are.")
console.log (dataType1,  dataType2,  dataType3,  dataType4,  dataType5,  dataType6,  dataType7,  dataType8);
console.log("These can be used as storage trunks like for leggos and can be taken out to build whatever is needed for your project")

  



/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/


console.log ("Sometimes we must link together a number of datatypes to accomplish an outcome we call these Objects.  Like many parts used to make one car")
let carParts = {
    tramsMision:  "Five Speed",
    top: "convertable",
    engine:  "Six Liter"
}
console.log (carParts)


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20
console.log(sum) 

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log (x) 

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

 let name = "Jon"
console.log(name) 

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

console.log (4-sum);

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
 */

let name1 = "john"
    let name2 = "John"
    console.log (name1 === name2);
    console.log (name1.toLowerCase () === name2.toLowerCase());
    
    