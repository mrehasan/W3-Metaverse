import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
console.clear();
console.log(chalk.green("Press CTRL + C to exit"));
const rainbow = chalkAnimation.rainbow('             -- Welcome To ATM Machine -- Press Enter '); // Animation starts
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 0);
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2);
const user = {
    name: "mhasan",
    acHolder: "Muhammad Rehman Hassan",
    pin: 5555,
    accNumb: "PK001",
    balance: 30000,
};
let pinValidator = (pin) => {
    if (pin == user.pin) {
        return true;
    }
    else {
        console.log(chalk.red("Invalid Pin"));
    }
};
let userValidator = (username) => {
    if (username === user.name) {
        return true;
    }
    else {
        console.log(chalk.red("Invalid Username"));
    }
};
let loginDetails = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Username',
        validate: userValidator
    },
    {
        type: 'password',
        name: 'pin',
        message: "Enter Your Password",
        mask: '*',
        validate: pinValidator
    }
];
inquirer.prompt(loginDetails).then((answers) => {
    console.log(chalk.greenBright(" Welcome to the ATM : " + user.acHolder));
    console.log(chalk.greenBright(" Your Account Number is : " + user.accNumb));
    console.log(chalk.greenBright(" Your Account Balance is Rs : " + user.balance) + chalk.greenBright(" Rs "));
    let atmfunction = [
        {
            name: 'atmFunction',
            type: 'list',
            choices: ["Withdraw Funds", "Transfer Funds"]
        }
    ];
    inquirer.prompt(atmfunction).then((answers) => {
        if (answers.atmFunction === "Withdraw Funds") {
            let withdrawDetails = [
                {
                    name: 'withdraw',
                    type: 'list',
                    choices: ['500', '1000', '5000']
                }
            ];
            inquirer.prompt(withdrawDetails).then((answers) => {
                if (answers.withdraw === '500' || '1000' || '5000') {
                    console.log(chalk.greenBright(" You have successfully withdrawn : ") + chalk.red(answers.withdraw) + chalk.red(" Rs, "));
                    console.log(chalk.greenBright(" Your Remaining Balance is : ") + chalk.red((user.balance) - answers.withdraw) + chalk.red(" Rs "));
                }
                else {
                    return false;
                }
            });
        }
        if (answers.atmFunction === "Transfer Funds") {
            let transferDetails = [
                {
                    name: 'tDetails',
                    type: 'list',
                    choices: ["Jamal", "Mohsin"]
                },
                {
                    name: 'amount',
                    type: 'input',
                    message: 'Enter the Amount'
                }
            ];
            inquirer.prompt(transferDetails).then((answers) => {
                if (answers.amount > user.balance) {
                    console.log(chalk.red("Insufficient Account Balance"));
                }
                else if (answers.tDetails === 'jammal' || 'Mohsin' && answers.amount) {
                    console.log(chalk.greenBright(" Funds : ") + chalk.red(answers.amount) + chalk.red(" Rs, ") + chalk.greenBright(" Has Been Transfered to : ") +
                        chalk.blueBright(answers.tDetails));
                    console.log(chalk.greenBright(" New Balance : ") + chalk.red((user.balance) - answers.amount));
                }
                else {
                    return false;
                }
            });
        }
    });
});
