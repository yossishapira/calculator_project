import { question } from "readline-sync";
import { add, subtraction, division, multiplication, holding, root } from "./calculator.js";


function asKTwoNumbers() {
    const number1 = Number(question("Press first number "))
    const number2 = Number(question("Press number two "))
    return { number1, number2 }
}

export function inputAdd() {
    const { number1, number2 } = asKTwoNumbers()
    const addNumbers = add(number1, number2)
    console.log(number1, "+", number2, "=", addNumbers)
}

export function inputSubtraction() {
    const { number1, number2 } = asKTwoNumbers()
    const subtractionNumbers = subtraction(number1, number2)
    console.log(number1, "-", number2, "=", subtractionNumbers)
}

export function inputDivision() {
    const { number1, number2 } = asKTwoNumbers()
    const divisionNumbers = division(number1, number2)
    console.log(number1, "/", number2, "=", divisionNumbers)
}

export function inputMultiplicatio() {
    const { number1, number2 } = asKTwoNumbers()
    const multiplicationNumbers = multiplication(number1, number2)
    console.log(number1, "*", number2, "=", multiplicationNumbers)
}

export function inputHolding() {
    const { number1, number2 } = asKTwoNumbers()
    const holdingNumbers = holding(number1, number2)
    console.log(number1, "holding", number2, "=", holdingNumbers)
}

export function inputRoot() {
    const number1 = question("Press number ")
    const rootNumbers = root(number1)
    console.log("root", number1, "=", rootNumbers)
}

