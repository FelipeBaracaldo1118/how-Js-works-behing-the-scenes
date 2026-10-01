"use strict";

const felipe = {
  firstName: "Felipe",
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2027 - this.year);
    // using it inside the function, will be placed as undefined. and we are not gonna be able to use it

    //TODO: if we creat a new variable and assign the this reserved keyword, we could access to all the information related with the object and then use it inside the function, basically calling it in a different way will grant access to it
    const self = this;
    const isMilenial = () => {
      //console.log(this.year >= 1981 && this.year <= 1996)
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMilenial();
  },
  greet: function () {
    const greet = () => {
      console.log(`Hey ${this.firstName}`);
    };
    greet();
  },
};
//even if the arrow function calls the this method. since this word isn't part of it's syntaxis it will look for it's parents to call the method. This will show the object instead the function we are calling it
//when we try to access to a property that doesn't exist on an object we don't get an error we get undefined

//! we should try to avoid declaring functions with arrow functions as objects, because this will not have the reserved keyword this to implement the method.
//* We are going to be able to access faster to the this method when using arrow functions inside the normal function declaration because it will search to it's parents information to bring it when it's being called
felipe.calcAge();
felipe.greet();

// functions also have access to arguments keyword, not only for this keyword
//arguments keyword is only available on regular functions as this method

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
//todo: now a days there is a new way to access to arguments instead of using the arguments keyword
addExpr(2, 5);
//* Even if we don't assign the values to a variable for the function, those values still been stored for a further use, they are not getting ignored, and they are stored in an array.

addExpr(2, 4, 8, 10);
//* when we have more than 1 line of code, we need to explicity return. call the return method
var addArrow = (a, b) => {
  console.log(arguments);
  //! as same as the this method. Inside the arrow functions there's no syntax to the arguments keyword/method.

  return a + b;
};
