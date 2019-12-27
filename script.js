/**
 * AGENDA
 * 1) synchronise input range and display of length. 
 * 2) copy text on clicking "click to copy" space.
 * */ 


/* variables */
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|\/?><:;,";
const LOWER_CASE = lowercase.split("");
const UPPER_CASE = lowercase.toUpperCase().split("");
const NUMBERS = numbers.split("");
const SYMBOLS = symbols.split("");
const rangeSlider = document.querySelector('.length-range input');
const lengthDisplay = document.getElementById('number-of-chars-display');
const display = document.querySelector(".display");
const displayInput = document.getElementById('display-input');
const uppercaseCheckbox = document.getElementById('check1');
const lowercaseCheckbox = document.getElementById('check2');
const numbersCheckbox = document.getElementById('check3');
const symbolsCheckbox = document.getElementById('check4');
const generate = document.getElementById('generate');
/* variables */


/* Event Listeners */
rangeSlider.addEventListener('input', updatelength);
display.addEventListener('click', copyPassword);
generate.addEventListener('click', generatePassword)
/* Event Listeners */

/* Event Handlers */
function updatelength(e) {
    lengthDisplay.innerText = e.target.value.toString();
}

function copyPassword(e) {
    displayInput.select();
    document.execCommand('copy');
}

function generatePassword(e) {
    const value = rangeSlider.value;
    const isUppercaseNeeded = uppercaseCheckbox.checked;
    const isLowercaseNeeded = lowercaseCheckbox.checked;
    const isNumbersNeeded = numbersCheckbox.checked;
    const isSymbolsNeeded = symbolsCheckbox.checked;
    const FINAL_ARRAY = [];
    if(!isLowercaseNeeded && !isUppercaseNeeded && !isNumbersNeeded && !isSymbolsNeeded)
        return;
    isLowercaseNeeded && FINAL_ARRAY.push(...LOWER_CASE);
    isUppercaseNeeded && FINAL_ARRAY.push(...UPPER_CASE);
    isNumbersNeeded && FINAL_ARRAY.push(...NUMBERS);
    isSymbolsNeeded && FINAL_ARRAY.push(...SYMBOLS);
    let password = "";
    for(let i = 0 ; i < value ; i++)
        password += FINAL_ARRAY[Math.floor(Math.random() * FINAL_ARRAY.length)];
    displayInput.value = password;
}
/* Event Handlers */s