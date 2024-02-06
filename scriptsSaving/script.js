let h1 = document.getElementById('heading');
let h2 = document.getElementById('h2');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let body = document.getElementById('body');


// NAME AND AGE FORM

const MAINFORM = document.getElementById('MAINFORM');
MAINFORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(MAINFORM);

    const name = formData.get('name');
    const age = formData.get('age');
    console.log(typeof name)
    console.log( name)

    try {
        if (name != '') {
            if (typeof +age == 'number') {
                if (age >= 18) {
                    adultStyle(name)
                } else if (age < 18 && age != '') {
                    minorStyle(name)
                } else alertIncorrect()
            }
        } else alertIncorrect()
    } catch (err) {console.log(err.name)}

});


// SAVINGS FORM

const SAVINGS_FORM = document.getElementById('savingsForm')
SAVINGS_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SAVINGS_FORM);

    const addedSum = formData.get('money');
    let savingsSum = document.getElementById('savings');

    addToElement(savingsSum, addedSum);
});

function addToElement (field, addedSum) {
    let initialSavingsfield = field.textContent;
    initialSavingsfield = +initialSavingsfield
    function plus(initial, added) {
        return +initial + +added
    }
    field.textContent = plus(initialSavingsfield, addedSum);
}


// INTERFACES BASED ON A USER

function adultStyle (name) {
    MAINFORM.style.display = 'none';
    SAVINGS_FORM.style.display = 'block';
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
    MAINFORM.style.display = 'none';
    SAVINGS_FORM.style.display = 'block';
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

function alertIncorrect (){ alert('Пожалуйста, перезагрузите страницу и введите свои данные :)') }


