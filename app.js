let firstNumber;
let secondNumber;
let operator = '';
let displayValue = '';
let numberLength = 0;

function add(num1, num2) {
    return String(Number(num1) + Number(num2));
}

function subtract(num1, num2) {
    return String(Number(num1) - Number(num2));
}

function multiply(num1, num2) {
    return String(Number(num1) * Number(num2));
}

function divide(num1, num2) {
    if(num2 == '0') return 'nice try';
    return String(Number((num1 / num2).toFixed(10)));
}

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
    }
}

const buttons = document.querySelectorAll('.operand');
const display = document.querySelector('#display');


//  all clear button
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    displayValue = '';
    numberLength = 0;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
});

// operand buttons
buttons.forEach( button => {
    button.addEventListener('click', () => {
        if(numberLength !== 12) {
            if(numberLength == 0) {
                display.textContent = '';
            }
            display.textContent += button.value;
            displayValue = display.textContent;
            numberLength++;
        }
    });
});

// event listeners for operator buttons
const operators = document.querySelectorAll('.operator');

operators.forEach( operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        console.log(operatorBtn)
            if(operator !== '') {
                secondNumber = displayValue;
                let result = operate(operator, firstNumber, secondNumber)
                firstNumber = result;
                operator = operatorBtn.value;
                displayValue = '0';
                display.textContent = `${result}`;
                numberLength = 0;
            }
            else {
                console.log(displayValue)
                firstNumber = displayValue;
                operator = operatorBtn.value;
                displayValue = '0';
                display.textContent = '0';
                numberLength = 0;
            }
    })
})

// event listener for equals
const equalsBtn = document.querySelector('.equals');

equalsBtn.addEventListener('click', () => {
    if(firstNumber !== '' && operator !== '') {
        secondNumber = displayValue;
        let result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;
        firstNumber = result;
        displayValue = result;
        operator = '';
        secondNumber = '';
        numberLength = 0;
    }
})

// sign button
const signBtn = document.querySelector('#sign');

signBtn.addEventListener('click', () => {
    console.log(displayValue)
    if(displayValue !== '0') {
        oppositeValue = String(Number(displayValue) * -1);
        displayValue = oppositeValue;
        display.textContent = oppositeValue;
    }
})