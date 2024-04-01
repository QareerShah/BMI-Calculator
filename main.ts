#! /usr/bin/env node

        //    BMI CALCULATOR

import inquirer from "inquirer";

console.log("\n\tWelcome to qareerulain -CLI-number-guessing-game\n\t");

const answer = await inquirer.prompt([
    {
        name: "weightInKg",
        type: "number",
        message: "Enter your weight in Kg:",
    },

    {
        name: "heightInM",
        type: "number",
        message: "Enter your height in (m):",
    },
    
]);

let bmi = answer.weightInKg / (answer.heightInM * answer.heightInM);
console.log(`your bmi is ${bmi}`);
