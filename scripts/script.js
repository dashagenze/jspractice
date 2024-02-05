
const firstNumField = document.getElementById('firstNum');
const secondNumField = document.getElementById('secondNum');
const answerString = document.getElementById('answerString')

const one = document.getElementById('1').id;
const two = document.getElementById('2');
const three = document.getElementById('3').id;

const four = document.getElementById('4').id;
const five = document.getElementById('5').id;
const six = document.getElementById('6').id;

const seven = document.getElementById('7').id;
const eight = document.getElementById('8').id;
const nine = document.getElementById('9').id;

const zero = document.getElementById('0').id;


let sign = document.querySelectorAll('.sign');

console.log(one);
console.log(typeof one);
console.log(two);

firstNumField.innerText = '';
secondNumField.innerText = '';

// let twoo = toString(two.id);
// two.onclick = math(twoo);

let btn = document.getElementById('ttt');

btn.onclick =  () => {alert('workin')};

two.onclick = (Math(two));

function math (pressedNum1) {

    pressedNum1 = pressedNum1.id

    switch (pressedNum1) {
        case '1': addToFirstField(pressedNum1)
            break
        case '2': addToFirstField(pressedNum1)
            break
        case '3': addToFirstField(pressedNum1)
            break
        case '4': addToFirstField(pressedNum1)
            break
        case '5': addToFirstField(pressedNum1)
            break
        case '6': addToFirstField(pressedNum1)
            break
        case '7': addToFirstField(pressedNum1)
            break
        case '8': addToFirstField(pressedNum1)
            break
        case '9': addToFirstField(pressedNum1)
            break
        case '0': addToFirstField(pressedNum1)
            break
    }

    return firstNumField

}










function Math (pressedNum1, sign, pressedNum2) {
    pressedNum1.onclick = addToFirstField(pressedNum1)
    addSign(sign)
    pressedNum2.onclick = addToSecondField(pressedNum2)
    return pressedNum1
}

function addToFirstField (pressedNum1) {
    pressedNum1 = pressedNum1.id;
    firstNumField.innerText += pressedNum1;
    return firstNumField
}

function addToSecondField (pressedNum2) {
    pressedNum2 = pressedNum2.id;
    firstNumField.innerText += pressedNum2;
    return firstNumField
}

// function addSign (sign) {
//     sign.onclick =
//         function (){
//             if (sign == '*') {
//
//             } else if (sign == '/') {
//
//             } else if (sign == '+') {
//
//             } else if (sign == '-') {
//
//             } else {
//                 // alert('введите знак')
//             }
//         }
// }






//
// if (sign == '*') {
//     function multiply(a, b) {
//         return a * b
//     }
// } else if (sign == '/') {
//     function division(a, b) {
//         return a / b
//     }
// } else if (sign == '+') {
//     function sum(a, b) {
//         return a + b
//     }
// } else if (sign == '-') {
//     function minus(a, b) {
//         return a - b
//     }
// } else {
//     // alert('введите знак')
// }





