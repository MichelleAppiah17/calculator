// Define variables to store the current and previous numbers and operator
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Get references to the number buttons and operator buttons
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Add event listeners to the number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.innerText;
        updateDisplay();
    });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber === '') return;
        if (previousNumber !== '') {
            calculate();
        }
        operator = button.innerText;
        previousNumber = currentNumber;
        currentNumber = '';
    });
});

// Add event listener to the equals button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    calculate();
});

// Add event listener to the clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
});

// Function to update the calculator display
function updateDisplay() {
    let screen = document.getElementById('screen');
    screen.value = currentNumber;
}

function del() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(previous) || isNaN(current)) return;
    let result;
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
    updateDisplay();
}
