// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
nestedFunction and internal variable are defined inside myFunction so nestedFunction can access the variable that declared in the same parent function which is myFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let nums = [1, 2, 3];

function summation(numb) {
  let counter = nums.reduce((acc, val) => acc + val);
  return counter + numb;
}

console.log(summation(4));
