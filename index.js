// Get display element
const display = document.getElementById('display');

// Get all buttons
const btnAC = document.getElementById('btnAC');
const btnDE = document.getElementById('btnDE');
const btnDot = document.getElementById('btnDot');
const btnDivide = document.getElementById('btnDivide');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnMultiply = document.getElementById('btnMultiply');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnMinus = document.getElementById('btnMinus');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnPlus = document.getElementById('btnPlus');
const btnDoubleZero = document.getElementById('btnDoubleZero');
const btnZero = document.getElementById('btnZero');
const btnEqual = document.getElementById('btnEqual');

// Event listeners for buttons
btnAC.addEventListener('click', function() {
    display.value = '';
});

btnDE.addEventListener('click', function() {
    display.value = display.value.toString().slice(0, -1);
});

btnDot.addEventListener('click', function() {
    display.value += '.';
});

btnDivide.addEventListener('click', function() {
    display.value += '/';
});

btn7.addEventListener('click', function() {
    display.value += '7';
});

btn8.addEventListener('click', function() {
    display.value += '8';
});

btn9.addEventListener('click', function() {
    display.value += '9';
});

btnMultiply.addEventListener('click', function() {
    display.value += '*';
});

btn4.addEventListener('click', function() {
    display.value += '4';
});

btn5.addEventListener('click', function() {
    display.value += '5';
});

btn6.addEventListener('click', function() {
    display.value += '6';
});

btnMinus.addEventListener('click', function() {
    display.value += '-';
});

btn1.addEventListener('click', function() {
    display.value += '1';
});

btn2.addEventListener('click', function() {
    display.value += '2';
});

btn3.addEventListener('click', function() {
    display.value += '3';
});

btnPlus.addEventListener('click', function() {
    display.value += '+';
});

btnDoubleZero.addEventListener('click', function() {
    display.value += '00';
});

btnZero.addEventListener('click', function() {
    display.value += '0';
});

btnEqual.addEventListener('click', function() {
    
    try{
        display.value = eval(display.value);
    }
    catch(err){
        const messages = [
            "Hmm... Something went wrong here.",
            "Oh no! This expression seems invalid.",
            "Uh-oh! That's not quite right."
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        const errorMessage = messages[randomIndex];
        alert(`"${errorMessage}"`);
    }
});
