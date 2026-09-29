"use strict";

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

let firstName = "Felipe";
//it doesn't matter that the variable is defined after being called. Because the function is called by itself after the variable declaration
calcAge(1999);

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
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

let addArrow = (a, b) => a + b;

// As a Good practice, we should declare the variables at the top of the scope.
// Always declare all the variables before call them
