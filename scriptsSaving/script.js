// let age = prompt('Назовите свой возраст', '20');
// let name = prompt('Назовите свое имя!', 'Фуф Барович');
let h1 = document.getElementById('heading');
let h2 = document.getElementById('h2');
let plussum = document.getElementById('sum')
let button = document.getElementById('button');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let body = document.getElementById('body');

let name = document.getElementById('name');
let age = document.getElementById('age');



let savingsArea = document.getElementById('savings');
let form = document.getElementById('form1');


function serializeForm(formNode) {
    const { elements } = formNode

    Array.from(elements)
        .forEach((element) => {
            const { name, value } = element
            console.log({ name, value })
        })
}


function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}

const applicantForm = document.getElementById('form1')
applicantForm.addEventListener('submit', handleFormSubmit)





// function addtoSavings () {
//     typeof +plussum.textContent == 'number' ?
//     savingsArea.textContent ++ : form.style.backgroundColor = 'purple';
//     return savingsArea.textContent
// }
//
// form.onsubmit = addtoSavings();

button.onclick = () => console.log(name);

try {
    if (name != null) {
        if (typeof +age == 'number') {
            if (age >= 18) {
                adultStyle(name)
            } else if (age < 18 && age != null) {
                minorStyle(name)
            } else alertIncorrect()
        }
    } else alertIncorrect()
} catch (err) {console.log(err.name)}


function adultStyle (name) {
    h1.innerText = `Здрастуйте, ${name}🤝`;
    img1.src = 'pics/offic.png';
    img2.src = 'pics/suitcase.png';
    body.style.backgroundImage = 'linear-gradient(#CFD9DF, #E2EBF0)';
    body.style.backgroundSize = 'contain'

    h1.style.fontFamily = 'Times New Roman, serif';
    h1.style.color = '#554E55';
    h2.style.fontFamily = 'Times New Roman, serif';
    h2.style.color = '#554E55';

}

function minorStyle (name) {
    h1.innerText = `Приветик, ${name}🥺`
    img1.src = 'pics/dream.png';
    img2.src = 'pics/pigmoney.png';
    body.style.backgroundImage = 'linear-gradient(#9795f0, #fbc8d4)';
    body.style.backgroundSize = 'contain'

    h1.style.fontFamily = '"Comic Sans MS", serif';
    h1.style.color = '#EA64E9'
    h2.style.fontFamily = '"Comic Sans MS", serif';
    h2.style.color = '#EA64E9'
}

// function alertIncorrect (){ alert('Пожалуйста, перезагрузите страницу и введите свои данные :)') }


