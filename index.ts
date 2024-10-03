#! /usr/bin/env node

import inquirer from "inquirer";

//Asking users with the help of inquirer
const answers = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional Statement
if (answers.operators === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operators === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operators === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operators === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Please choose a valid operator");
}
