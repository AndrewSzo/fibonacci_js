// program to generate fibonacci series up to a certain number

// take input from the user
const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

// display numbers
console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
