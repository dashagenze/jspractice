const num1 = document.getElementById('firstNum'),
    num2 = document.getElementById('secondNum'),

    plus = document.getElementById('plus'),
    minus = document.getElementById('minus'),
    divide = document.getElementById('division'),
    multiply = document.getElementById('multiply');


plus.onclick = () => {
    num1.value = +num1.value + +num2.value;
    num2.value = '';
}

minus.onclick = () => {
    num1.value = +num1.value - +num2.value;
    num2.value = '';
}
divide.onclick = () => {
    if (+num2.value !== 0) {
        num1.value = +num1.value / +num2.value;
        num2.value = '';
    } else {alert('не делити на нол ;(')}

}
multiply.onclick = () => {
    num1.value = +num1.value * +num2.value;
    num2.value = '';
}











