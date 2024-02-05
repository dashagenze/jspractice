const one = document.getElementById('1'),
    two = document.getElementById('2'),
    three = document.getElementById('3'),
    four = document.getElementById('4'),
    five = document.getElementById('5'),
    six = document.getElementById('6'),
    seven = document.getElementById('7'),
    eight = document.getElementById('8'),
    nine = document.getElementById('9'),
    zero = document.getElementById('0');

const plus = document.getElementById('+'),
    equals = document.getElementById('='),
    minus = document.getElementById('-'),
    division = document.getElementById('/'),
    multiply = document.getElementById('*');

const NumField = document.getElementById('ttt');
NumField.textContent = '';


one.onclick = () => add(one);
two.onclick = () => add(two);
three.onclick = () => add(three);
four.onclick = () => add(four);
five.onclick = () => add(five);
six.onclick = () => add(six);
seven.onclick = () => add(seven);
eight.onclick = () => add(eight);
nine.onclick = () => add(nine);
zero.onclick = () => add(zero);

plus.onclick = () => addSign(plus);
minus.onclick = () => addSign(minus);
multiply.onclick = () => addSign(multiply);
division.onclick = () => addSign(division);

equals.onclick = function () {console.log(+(NumField.textContent))};

console.log(2 + 2);


// one.onclick = () => firstNumField.style.backgroundColor = 'red'


function add (pressed) {
    NumField.innerText = +(pressed.id);
    return NumField
}

function addSign (sign) {
    switch (sign.id) {
        case '+': NumField.innerText = sign.id
            break
        case '*': NumField.innerText = sign.id
            break
        case '-': NumField.innerText += sign.id
            break
        case '/': NumField.innerText += sign.id
            break
    }
}


// switch (pressed) {
// case '1': NumField.innerText += pressed.id;
//     break
// case '2': add(pressed)
//     break
// case '3': add(pressed)
//     break
// case '4': add(pressed)
//     break
// case '5': add(pressed)
//     break
// case '6': add(pressed)
//     break
// case '7': add(pressed)
//     break
// case '8': add(pressed)
//     break
// case '9': add(pressed)
//     break
// case '0': add(pressed)
//     break
// }
