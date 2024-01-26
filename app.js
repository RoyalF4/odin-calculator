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
    hasDecimal = false;
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
                firstNumber = displayValue;
                operator = operatorBtn.value;
                displayValue = '0';
                display.textContent = '0';
                numberLength = 0;
                hasDecimal = false;
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
    if(displayValue !== '0') {
        oppositeValue = String(Number(displayValue) * -1);
        displayValue = oppositeValue;
        display.textContent = oppositeValue;
    }
})

// decimal button
const decimalBtn = document.querySelector('.decimal');
let hasDecimal = false;

decimalBtn.addEventListener('click', () => {
    if(!hasDecimal) {
        console.log(display.textContent)
        if(display.textContent == '0') {
            displayValue = '0.';
            display.textContent = displayValue;
            numberLength = 2;
        }
        else {
            displayValue += '.';
            display.textContent = displayValue;
            numberLength++;
        }
        hasDecimal = true;
    }
})

// backspace 
const backspaceBtn = document.querySelector('.backspace');

backspaceBtn.addEventListener('click', () => {
    if(displayValue.length == 1) {
        displayValue = '0';
        display.textContent = '0';
        numberLength = 0;
    }
    if(displayValue.length > 1) {
        newValue = displayValue.slice(0, displayValue.length - 1);
        removedValue = displayValue.slice(displayValue.length - 1)
        if(removedValue == '.') {
            hasDecimal = false;
        }
        displayValue = newValue;
        display.textContent = newValue;
        numberLength--;
    }
})