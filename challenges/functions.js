// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function bake(param1, param2, callback) {
  brownies(param1, param2);
}
  function brownies(param1, param2) {
    console.log(param1 + param2);
  }

  function macaroons(param1, param2) {
    console.log(param1 + param2);
  };


bake('eggs', 'milk', 'macaroons');


function consume(param1, param2, callback) {
  console.log(param1 + param2)
}
  function add(param1, param2) {
  console.log(param1 + param2);
}
  function multiply(param1, param2, callback) {
  console.log(param1 * param2);
  };


  


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:When my myFunction is invoked the 2 pass compiler looks looks for a reference. It looks up myFunction. It knows that nestedFunction is invoked and looks for it's reference. 
//It can't find a reference so it goes to the next function to find it. It grabs the reference from where it orignated because lexicolscope. Closures are awesome little backpacks that store info for later.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

