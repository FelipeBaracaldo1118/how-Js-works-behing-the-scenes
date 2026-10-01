//* MEMORY MANAGEMENT: is how the JS engine allocates spaces memory for creating variables and then free's up memory space when it's not longer need it.
//* memory is automatically managed by JS behind the scenes
//* Every value we create in JS goes through a memory lifecycle

//* whenever we assign a value to a new variable, the engine automatically allocates a piece of memory to store the value

//* while code is running, the value is writen, read and update in the allocated piece of memory

//* when a value is not needed anymore the value os deleted from memory to free up memory

// JAVASCRIPT DEVIDES THE MEMORY IN TO, PRIMITIVE VALUES (STRING, NUMBER, BOOOLEAN, UNDEFINED...) AND OBJECTS(OBJECT LITERAL, ARRAYS, FUNCTIONS ...).
//* the primitives are stored on the callstack as the same as the references objects (THIS IS VERY IMPORTANT), objects are stored in (HEAP)

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
//* While using objects we are not able to assign modify the properties as a normal variable, because the original variables will be modified, instead of creating a new variable that allows to reach it on different ways

//const marriedJessica = jessica;
//marriedJessica.lastName = "Davies";

console.log("before:", jessica);

//* WE ARE ABLE TO CREATE FUNCTIONS TO MODIFY THEM AND LET THE OBJECT HAVE ACTUALLY "TWO VERSIONS" OF IT SELF

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
//* BASICALLY WE CREATE THE FUNCTION JUST TO CREATE A NEW OBJECT BASED ON THE ORIGINAL, WITHOUT TOUCHING IT AND JUST EDITING THE NEW ONE SO THE FIRST INFO CREATED STILL BEING THE SAME IN THE HEAP
const marriedJessica = marryPerson(jessica, "Davis");

console.log("After: ", marriedJessica);

//TODO: WE CAN CREATE A TRUE COPY OF THE OBJECT

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = { ...jessica2 }; //*spread operator, just create a copy of the argument we pass. taking as base the original object.
jessicaCopy.lastName = "MacCourtney";

//* we can also push new values to the properties and also create new properties for a object.
//! IF WE ADD NEW VALUES TO AND OBJECT NESTED TO THE MAIN COPY OBJECT, THE CHANGES WILL BE ALSO REFLECTED ON THE ORIGINAL OBJECT BY ITSELF. THIS BECAUSE WHEN WE COPY THE PROPERTIES OF THE ORIGINAL OBJECT THE CHANGES WILL POINT TO THE ORIGINAL ONE
// TODO: TO BE MORE CLEAR, THIS MEANS THAT BOTH COPY AND ORIGINAL ONE ARE POITING TO THE SAME ARRAY WHEN WE JUST COPY USING THE SPREAD OPERATOR.THIS IS CALLED SHALLOW COPY
//* WHEN WHE NEED TO CREATE DE DEAP COPY OR CLONE WE CREATE IT IN A DIFFERENT WAY
const jessicaClone = structuredClone(jessica2);

jessicaClone.family.push("Mary");
jessicaClone.family.push("Felipe");
console.log(jessicaClone, jessica2);
