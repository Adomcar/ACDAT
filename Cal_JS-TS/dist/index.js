"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let currentInput = '0';
let operator = '';
let previousInput = '';
function appendToDisplay(value) {
    let update = false;
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '0' && currentInput !== '') {
            if (previousInput !== '' && operator !== '') {
                calculate();
            }
            previousInput = currentInput;
            operator = value;
            currentInput = '0';
        }
    }
    else {
        update = true;
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        }
        else {
            currentInput += value;
        }
    }
    if (update) {
        updateDisplay();
    }
}
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}
function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    }
    else {
        currentInput = '0';
    }
    updateDisplay();
}
function calculate() {
    if (previousInput !== '' && currentInput !== '0' && currentInput !== '' && operator !== '') {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Error: División por cero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    setupEventListeners();
});
function setupEventListeners() {
    const buttonsContainer = document.querySelector('.buttons');
    if (buttonsContainer) {
        buttonsContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'BUTTON') {
                const action = target.dataset.action;
                const value = target.dataset.value;
                if (action === 'clear') {
                    clearDisplay();
                }
                else if (action === 'delete') {
                    deleteLast();
                }
                else if (action === 'calculate') {
                    calculate();
                }
                else if (value) {
                    appendToDisplay(value);
                }
            }
        });
    }
    setupKeyboardEvents();
}
function setupKeyboardEvents() {
    const keyboardEvents$ = (0, rxjs_1.fromEvent)(document, 'keydown');
    keyboardEvents$
        .pipe((0, rxjs_1.debounceTime)(50), (0, rxjs_1.map)(event => event.key))
        .subscribe(key => {
        switch (key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                appendToDisplay(key);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                appendToDisplay(key);
                break;
            case 'Enter':
            case '=':
                calculate();
                break;
            case 'Escape':
            case 'c':
            case 'C':
                clearDisplay();
                break;
            case 'Backspace':
                deleteLast();
                break;
        }
    });
}
//# sourceMappingURL=index.js.map