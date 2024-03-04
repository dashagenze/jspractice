let btn = document.getElementById('btn')

let numsNL = document.querySelectorAll('.num'),
numsDivs = Array.from(numsNL),
signsNL = document.querySelectorAll('.sign'),
signsDivs = Array.from(signsNL),
one = 1,
two = 2,
three = 3,
four = 4,
five = 5,
six = 6,
seven = 7,
eight = 8,
nine = 9,
zero = 0,
numArr = [one, two, three, four, five, six, seven, eight, nine, zero],
digitsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let signsArr = ['+', '-', '/', '*', '='];
let ttt = document.getElementById('ttt');





class Calc {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }




}

//!!!оптимизировать под знаки
function getNum(pressed) {
    for (let num of numArr) {
        if (Number(pressed.textContent) === num) {
            return pressed
        }
    }
    return pressed
}



let a = []
numsDivs.map(function returnPressedNum(item) {
    item.addEventListener('click', () => {
        // получила число, которое нажали
        let pressedItem = getNum(item);
        a.push(pressedItem.textContent);

        console.log(a.join(''));

        //изменила текстовое поле
        ttt.textContent += item.textContent

    })
})

btn.onclick = () => console.log(a);



function getNumber() {

}


function getSign(pressed) {
    for (let sign of signsArr) {
        if (pressed.textContent === sign) {
            return (pressed)
        }
    }
    return pressed
}




const copyURL = document.getElementById('copyURL');
const forward = document.getElementById('forward');
const back = document.getElementById('back');


copyURL.onclick = () => {
    console.log(location.href);
}
// forward.onclick = () => history.forward();
// back.onclick = () => history.back();








// const firstNumField = document.getElementById('firstNum');
// const secondNumField = document.getElementById('secondNum');
// const answerString = document.getElementById('answerString')
//
// const one = document.getElementById('1').id;
// const two = document.getElementById('2');
// const three = document.getElementById('3').id;
//
// const four = document.getElementById('4').id;
// const five = document.getElementById('5').id;
// const six = document.getElementById('6').id;
//
// const seven = document.getElementById('7').id;
// const eight = document.getElementById('8').id;
// const nine = document.getElementById('9').id;
//
// const zero = document.getElementById('0').id;
//
//
// let sign = document.querySelectorAll('.sign');

// console.log(one);
// console.log(typeof one);
// console.log(two);

// firstNumField.innerText = '';
// secondNumField.innerText = '';

// let twoo = toString(two.id);
// two.onclick = math(twoo);
//
// let btn = document.getElementById('ttt');
//
// btn.onclick =  () => {alert('workin')};
//
// two.onclick = (Math(two));

// function math (pressedNum1) {
//
//     pressedNum1 = pressedNum1.id
//
//     switch (pressedNum1) {
//         case '1': addToFirstField(pressedNum1)
//             break
//         case '2': addToFirstField(pressedNum1)
//             break
//         case '3': addToFirstField(pressedNum1)
//             break
//         case '4': addToFirstField(pressedNum1)
//             break
//         case '5': addToFirstField(pressedNum1)
//             break
//         case '6': addToFirstField(pressedNum1)
//             break
//         case '7': addToFirstField(pressedNum1)
//             break
//         case '8': addToFirstField(pressedNum1)
//             break
//         case '9': addToFirstField(pressedNum1)
//             break
//         case '0': addToFirstField(pressedNum1)
//             break
//     }
//
//     return firstNumField
//
// }
//
//
//
//
//
//
//
//
//
//
// function Math (pressedNum1, sign, pressedNum2) {
//     pressedNum1.onclick = addToFirstField(pressedNum1)
//     addSign(sign)
//     pressedNum2.onclick = addToSecondField(pressedNum2)
//     return pressedNum1
// }
//
// function addToFirstField (pressedNum1) {
//     pressedNum1 = pressedNum1.id;
//     firstNumField.innerText += pressedNum1;
//     return firstNumField
// }
//
// function addToSecondField (pressedNum2) {
//     pressedNum2 = pressedNum2.id;
//     firstNumField.innerText += pressedNum2;
//     return firstNumField
// }

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





