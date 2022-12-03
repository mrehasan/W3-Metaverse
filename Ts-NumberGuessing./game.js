import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold("Welcome to Number Guessing Game"));
let randomNum = Math.floor(Math.random() * 15) + 1;
let guessNum = await inquirer.prompt([{
        name: "guess",
        type: "number",
        message: "Enter a number Between 1 to 15 : "
    }]);
let guessedNum = guessNum.guess;
function win() {
    if (guessedNum === randomNum) {
        console.log(chalk.green("Hurray You have Guessed the Number ") + chalk.bgBlue(randomNum));
    }
    else {
        console.log(chalk.yellow("Your Number was: ") + chalk.bgBlue(guessedNum) + chalk.red(" Sorry, You have Failed to Guess the Number :") + chalk.bgBlue(randomNum));
    }
}
win();
