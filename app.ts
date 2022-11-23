import inquirer from "inquirer";
import chalk from "chalk";


    let firstNumber = await inquirer.prompt([{
        name:"Val1",
        type:"number",
        message:"Enter the First Value :"
    }]);

    let operators:any = await inquirer.prompt([{
        name:"Operation",
        type:"list",
        choices:["Addition","Subtract","Divide","Multiply"]
    }]);
    
    let secondNumber = await inquirer.prompt([{
        name:"Val2",
        type:"number",
        message:"Enter the Second Value :"
    }]);
    
    let firstVal:number =  firstNumber.Val1;
    let secondVal:number = secondNumber.Val2;

function calc():any{

    if(operators.Operation == "Addition" ){
    
    return(chalk.bgCyan("Your Answer is : " + chalk.black(firstVal+secondVal)));
}
else if (operators.Operation == "Subtract"){

    return(chalk.bgCyan("Your Answer is : " + chalk.black(firstVal-secondVal)));
}
else if (operators.Operation == "Divide"){

    return(chalk.bgCyan("Your Answer is : " + chalk.black(firstVal/secondVal)));
}
else if(operators.Operation == "Multiply"){

    return(chalk.bgCyan("Your Answer is : " + chalk.black(firstVal*secondVal)));

}
else{
    return ("error")
}

}

console.log(calc());


