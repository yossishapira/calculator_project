
import { question } from "readline-sync";
import { inputAdd,inputSubtraction,inputDivision,inputMultiplicatio,inputHolding, } from "./client.js";
const menu = question(`Enter the desired account action: 
To connect, press 1: 
To subtract, press 2: 
To divide, press 3: 
To multiply press 4: 
For strength, press 5: 
To the root of the straw 6:
    `)

if (menu === "1"){
    inputAdd()

}
if (menu === "2"){
    inputSubtraction()
}

if (menu === "4"){
    inputDivision()
}

if (menu === "3"){
    inputMultiplicatio()
}
if (menu === "5"){
    inputHolding()
}
if (menu === "6"){
    inputRoot()
}