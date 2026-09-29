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
