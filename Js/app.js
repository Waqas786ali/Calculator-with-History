// ================================ VARIABLES ============================
// Screen
const lcd = document.querySelector('.display');

// ======================= Buttons ====================

// Function Buttons
const resetButton = document.getElementById('reset');
const deleteButton = document.getElementById('delete');
const enterButton = document.getElementById('enter');

// Operaters Buttons
const devideButton = document.getElementById('devide');
const multiplyButton = document.getElementById('multiplay');
const subsButton = document.getElementById('subs');
const sumButton = document.getElementById('sum');
const commaButton = document.getElementById('comma');

// Numbers Buttons
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const zeroButton = document.getElementById('zero');

// History
const history = document.getElementById('history');

// ================================ FUNCTIONALITY ============================

let buttonName = [oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton, zeroButton,commaButton, subsButton, sumButton, multiplyButton, devideButton];


// let display = lcd.innerText;
buttonName.forEach(element => {

    element.addEventListener('click', () => {
        lcd.innerText += element.innerHTML

        // Condition for the Text Size in Calculater LCD 
        if (lcd.textContent.length >= 10) {
            lcd.style.fontSize = "25px"
        }

    })

});


let results = [];

function calculate(operater) {
    let a = Number(lcd.innerText.split(operater)[0]);
    let b = Number(lcd.innerText.split(operater)[1]);
    // let c = Number(lcd.innerText.split(operater)[2]);

    const id = uuidv4();


    if (operater === '+') {
        results.push({
            id: id,
            operater: operater,
            a: a,
            b: b,
            result: a+b,
        });
    }
    if (operater === '-') {
        results.push({
            id: id,
            operater: operater,
            a: a,
            b: b,
            result: a-b,
        });
    }
    if (operater === '/') {
        results.push({
            id: id,
            operater: operater,
            a: a,
            b: b,
            result: a/b,
        });
    }
    if (operater === '*') {
        results.push({
            id: id,
            operater: operater,
            a: a,
            b: b,
            result: a*b,
        });
    }


    // Finding Index Of Array to Print the Current Value 
    const resultIndex = results.findIndex(function (result) {
        return result.id === id;
    });

    lcd.innerText = results[resultIndex].result;
    createHistory(resultIndex);

}

// Enter the Button to see the result 
enterButton.addEventListener('click', () => {
    let ope = ['+','-','/','*'];
    ope.forEach((e) => {
        if (lcd.textContent.includes(e)) {
            calculate(e);
        }
    });
})

// ===================================================================

// Delete and Reset
deleteButton.addEventListener('click', () => {
    lcd.textContent = lcd.textContent.slice(0, -1);
})

resetButton.addEventListener('click', () => {
    lcd.textContent = ''
})


// create History
function createHistory(index) {
    let p = document.createElement('p');
    history.appendChild(p);
    p.innerText = `${results[index].a} ${results[index].operater} ${results[index].b} = ${results[index].result}` 
}