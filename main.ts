#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Player{
    name:string
    fuel:number = 100
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent{
    name:string
    fuel:number = 100
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

console.log(chalk.yellowBright.bold.italic.underline("\t\t*****************************WELCOME TO Syeda Huma ADVENTURE GAME**********************************"));

let player = await inquirer.prompt (
        {
            name:"name",
            type:"input",
            message:chalk.magentaBright.bold("Please Enter Your Name: ")
        }
)


let opponent = await inquirer.prompt(
    {
        name:"select",
        type:"list",
        message:chalk.yellowBright.bold("Please Select Your Opponent: "),
        choices:["Skeleton" , "Assassin" , "Zombie"]
    }
)

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
console.log(chalk.blueBright.italic(`\t\t ${p1.name} VS ${o1.name}`))

do {
if (opponent.select == "Skeleton") {
    
    let ask = await inquirer.prompt(
        {
            name:"option",
            type:"list",
            message:chalk.greenBright.bold("What Do you Want to do? "),
            choices:["Attack" , "Drink Portion" , "Run For Your Life.."]
        }
    )
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random()*2)
        if(num > 0) {
             p1.fuelDecrease()
             console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`))
             console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`))
             if (p1.fuel <= 0) {
                console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
                process.exit()
             }
        }
        if(num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`))
            if (o1.fuel <= 0) {
                console.log(chalk.greenBright.bold.italic("\t\t\tYou Win!!"))
                process.exit()
             }
       }
    }
    if (ask.option == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.gray(`\t\tYou Drink Healthy Portion. Your fuel is ${p1.fuel}`))
    }
    if (ask.option == "Run For Your Life..") {
        console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
        process.exit()
    }
}
//assassian
if (opponent.select == "Assassin") {
    
    let ask = await inquirer.prompt(
        {
            name:"option",
            type:"list",
            message:chalk.greenBright.bold("What Do you Want to do? "),
            choices:["Attack" , "Drink Portion" , "Run For Your Life.."]
        }
    )
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random()*2)
        if(num > 0) {
             p1.fuelDecrease()
             console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`))
             console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`))
             if (p1.fuel <= 0) {
                console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
                process.exit()
             }
        }
        if(num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`))
            if (o1.fuel <= 0) {
                console.log(chalk.greenBright.bold.italic("\t\tYou Win!!"))
                process.exit()
             }
       }
    }
    if (ask.option == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.gray(`\t\tYou Drink Healthy Portion. Your fuel is ${p1.fuel}`))
    }
    if (ask.option == "Run For Your Life..") {
        console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
        process.exit()
    }
}
//zombie
if (opponent.select == "Zombie") {
    
    let ask = await inquirer.prompt(
        {
            name:"option",
            type:"list",
            message:chalk.greenBright.bold("What Do you Want to do? "),
            choices:["Attack" , "Drink Portion" , "Run For Your Life.."]
        }
    )
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random()*2)
        if(num > 0) {
             p1.fuelDecrease()
             console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`))
             console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`))
             if (p1.fuel <= 0) {
                console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
                process.exit()
             }
        }
        if(num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`))
            if (o1.fuel <= 0) {
                console.log(chalk.greenBright.bold.italic("\t\tYou Win!!"))
                process.exit()
             }
       }
    }
    if (ask.option == "Drink Portion") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.gray(`\t\tYou Drink Healthy Portion. Your fuel is ${p1.fuel}`))
    }
    if (ask.option == "Run For Your Life..") {
        console.log(chalk.redBright.bold.italic("\t\tYou Loose! Better Luck Next Time"))
        process.exit()
    }
}
}
while(true);