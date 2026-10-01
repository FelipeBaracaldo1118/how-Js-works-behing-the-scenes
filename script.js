"use strict";
/** 
function calcAge(birthYear) {
  //inner scope can access to outer scopes, but not outer scopes can access to inner scopes. This also happens with functions
  const age = 2027 - birthYear;
  // the variable age, is accessible only inside this function, but the firstName variable since it's global scope that could be accessed from all parts of the code.
  function printAge() {
    //even if the variable is outside this function when it's called, it will look outside of it to search it and pass it as parameter
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //variables defined with var breakes the function scope it means that can be accessed from other blocks
      let millenail = true;
      const str = `Oh, and you're a milenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}
*/
/** 
let firstName = "Felipe";
//it doesn't matter that the variable is defined after being called. Because the function is called by itself after the variable declaration
calcAge(1999);
*/
/**
 * HOISTING
 * MAKE SOME TYPES OF VARIABLES USABLE IN THE CODE BEFORE THEY ARE ACTUALLY DECLARED.
 */

//FIRST HOISITNG SCENARIO
//To understand how hoisting works, we need to call the variable befor declaring it

//console.log(me);
//console.log(job);
//console.log(year);
var me = "Jonas"; //variables hoited are shown as undefined
let job = "Teacher"; //let and const brings the error before intializing the variable
const year = 1999;

//functions
// same as variables, since we create the function in three differente ways, when we use let and  const we are not able to access to them before declaring them
// but when we access using the reserved key function, we can use it before declaring it

// we need to take into account that every variable declared with var is undefined and it's origin is hoisted and we should no be able to use it and it's not a best practice about it
/** 
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
*/
/*const addExpr = function (a, b) {
  return a + b;
};**/
/** 
let addArrow = (a, b) => a + b;
*/
// As a Good practice, we should declare the variables at the top of the scope.
// Always declare all the variables before call them

/**
 * HOW THE THIS KEYWORD WORKS
 * special variable that is created for every execution context, Takes the value of the "owner" of the function in which the this keyword is used
 */

//TODO: THE VALUE OF this is NOT static. It depends on how the function is called, and its value is ony assigned when the function is actually called

// WAYS TO CALL FUNCTIONS
//1. Calling a function as a method
/** 
const jonas = {
  name: "Jonas",
  year: 1989,
  //the calcAge is the method
  //in this case this refers to the object jonas, and inside of it we are looking for the variable that the year is presented
  //this is used way better than calling it using the name object (jonas.year), this is because usually we create objects with a general name that can be more high level than an specific name and using this refers to the object indeed instead of the specific name
  calcAge: function () {
    return 2027 - this.year;
  },
};
*/
//2. normal functions = undefined on strict mode. if it's not on strict mode it will point to the global object in that case de browser window
//3. arrow functions = do not get owned this keyboard
//4. function called as a eventListener, then the this keyword will point to the element that the handler is attached to

//Practicing the STRICT METHOD
// 1. declaring it as a function, this will show the information but based on the previous learning the this method will be shown as undefined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1997);

//2. arrow function. Arrow function doesn't have in it vocabulary defined this keyword.
//in this case the arrow when calling the this method inside the arrow function, it will take it as the whole object on the browser, the complete window
const calcAgeArrow = (birthYear) => {
  console.log(2027 - birthYear);
  console.log(this);
};

calcAgeArrow(1999);

//when using it inside the object, if we do not specify were the this keyword is being used, this will give back the whole object
const jonas = {
  name: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};

jonas.calcAge();
