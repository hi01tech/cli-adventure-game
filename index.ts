#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// print a welcome message
console.log(chalk.rgb(236,93,183).bold('\n\t\t     <<<==================================>>>\n\t'));
console.log(chalk.rgb(231,161,176) .bold(`\t<<<========== `+chalk.rgb(255,255,146).bold(`Welcome To "hi01tech" ADVENTURE GAME`)+chalk.rgb(231,161,176) .bold( ` ==========>>>\n\t`)));
console.log(chalk.rgb(236,93,183).bold('\t\t     <<<==================================>>>\n\t'));

// Make class of Player
class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string){
        this.name = name;
    }
    fuelDecrese (){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease (){
        this.fuel = 100
    }

}

// Make class of Opponent
class Opponent {
    name: string;
    fuel: number = 100;

    constructor(name: string){
        this.name = name;
    }
    fuelDecrese (){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

// Input about player name
let player = await inquirer.prompt([
    {
        name:"user_name",
        type:"input",
        message: "Please enter your name: "

    }
]);

// Input about opponent
let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message: "Select Your Opponent: ",
        choices : [{ value: 'Skeleton'  },{ value: 'Zombie' },{value: 'Robots'  }]


    }
]);

// Gather data from user 
let p1 = new Player(player.user_name);
let o1 = new Opponent(opponent.select);

// starting game using do while loop
do{
    //  'Skeleton'
    if(opponent.select === 'Skeleton' ){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "What would you like to do ?",
              choices: [{ value: 'Attack'  },{ value: 'Drink Portion' },{ value: 'Run For Your Life..' }]
    
            }
        ])
        if(ask.opt ===  "Attack" ){
           let num = Math.floor(Math.random() *2)
           if (num > 0){
              p1.fuelDecrese()
             console.log(chalk.rgb(241,179,179).bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
             console.log(chalk.rgb(241,179,179).bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));
             
             if(p1.fuel <= 0)
                {console.log(chalk.bold.rgb(255,237,0)`You Loose!! , Better Luck Next Time`)
                 process.exit ()
                }
            }
           if (num <= 0){
              o1.fuelDecrese()

              console.log(chalk.rgb(241,179,179) .bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
              console.log(chalk.rgb(241,179,179) .bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));

             if(o1.fuel <= 0)
                {console.log(chalk.bold.rgb(154,240,0)`  You Win !! `)
                 process.exit ()
                }
           }
        }
        else if (ask.opt === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.rgb(241,179,179).bold`\n You drink health portion your fuel is `+ chalk.bold.rgb(255,255,146)(`${p1.fuel}\n`));
        }
        else if(ask.opt === "Run For Your Life.."){
            console.log(chalk.bold.rgb(253,71,3)`\n  You Loose!! Better Luck Next Time\n`);
            process.exit ()
        }
    }
    // 'Zombie'
    if(opponent.select === 'Zombie' ){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "What would you like to do ?",
              choices: [{ value: 'Attack'  },{ value: 'Drink Portion' },{ value: 'Run For Your Life..' }]
    
            }
        ])
        if(ask.opt ===  "Attack" ){
           let num = Math.floor(Math.random() *2)
           if (num > 0){
              p1.fuelDecrese()
             console.log(chalk.rgb(241,179,179).bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
             console.log(chalk.rgb(241,179,179).bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));
             
             if(p1.fuel <= 0)
                {console.log(chalk.bold.rgb(255,237,0)`You Loose!! , Better Luck Next Time`)
                 process.exit ()
                }
            }
           if (num <= 0){
              o1.fuelDecrese()

              console.log(chalk.rgb(241,179,179) .bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
              console.log(chalk.rgb(241,179,179) .bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));

             if(o1.fuel <= 0)
                {console.log(chalk.bold.rgb(154,240,0)`  You Win !! `)
                 process.exit ()
                }
           }
        }
        else if (ask.opt === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.rgb(241,179,179).bold`\n You drink health portion your fuel is `+ chalk.bold.rgb(255,255,146)(`${p1.fuel}\n`));
        }
        else if(ask.opt === "Run For Your Life.."){
            console.log(chalk.bold.rgb(253,71,3)`\n  You Loose!! Better Luck Next Time\n`);
            process.exit ()
        }
    }
    // 'Robots'
    if(opponent.select === 'Robots' ){
        let ask = await inquirer.prompt([
            {
              name: "opt",
              type: "list",
              message: "What would you like to do ?",
              choices: [{ value: 'Attack'  },{ value: 'Drink Portion' },{ value: 'Run For Your Life..' }]
    
            }
        ])
        if(ask.opt ===  "Attack" ){
           let num = Math.floor(Math.random() *2)
           if (num > 0){
              p1.fuelDecrese()
             console.log(chalk.rgb(241,179,179).bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
             console.log(chalk.rgb(241,179,179).bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));
             
             if(p1.fuel <= 0)
                {console.log(chalk.bold.rgb(255,237,0)`You Loose!! , Better Luck Next Time`)
                 process.exit ()
                }
            }
           if (num <= 0){
              o1.fuelDecrese()

              console.log(chalk.rgb(241,179,179) .bold(`\n  "${p1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${p1.fuel}`));
              console.log(chalk.rgb(241,179,179) .bold(`  "${o1.name}" fuel is  `) +chalk.rgb(7,185,252) .bold (`${o1.fuel}\n`));

             if(o1.fuel <= 0)
                {console.log(chalk.bold.rgb(154,240,0)`  You Win !! `)
                 process.exit ()
                }
           }
        }
        else if (ask.opt === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.rgb(241,179,179).bold`\n You drink health portion your fuel is `+ chalk.bold.rgb(255,255,146)(`${p1.fuel}\n`));
        }
        else if(ask.opt === "Run For Your Life.."){
            console.log(chalk.bold.rgb(253,71,3)`\n  You Loose!! Better Luck Next Time\n`);
            process.exit ()
        }
    }
    
} 
while(true)

