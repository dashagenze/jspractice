let h1 = document.getElementById('heading');
let h2 = document.querySelectorAll('h2.h2')
console.log(h2.length)

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let body = document.getElementById('body');

let spends = [];


// TWO EVENTS ON SPENDING SUBMIT: LOG EXPENSE AND SUBTRACT FROM SAVES

const SPENDINGS_FORM = document.getElementById('SPENDINGS_FORM')

SPENDINGS_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SPENDINGS_FORM);
    const spend = +(formData.get('spend'));

    spends.unshift(spend);

    let expenses;
    expenses = document.getElementById('spendingsField');
    expenses.textContent = spends.join('; ');
});

SPENDINGS_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SPENDINGS_FORM);
    const spend = +(formData.get('spend'));

    let savingsSum = document.getElementById('savings');

    function minusSpend (sum, spend) {
        let saved = sum.textContent;
        saved = +saved
        function minus(initial, spent) {
            return +initial - +spent
        }
        sum.textContent = minus(saved, spend);
    }
    minusSpend(savingsSum, spend);
});



// NAME AND AGE FORM

const MAINFORM = document.getElementById('MAINFORM');
MAINFORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(MAINFORM);

    const name = formData.get('name');
    const age = formData.get('age');

    try {
        if (name !== '') {
            if (age >= 18) {
                adultStyle(name)
            } else if (age < 18 && age !== '') {
                minorStyle(name)
            } else alertIncorrect()
        }
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

})

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
    SPENDINGS_FORM.style.display = 'block';
    h1.innerText = `Здрастуйте, ${name}🤝`;
    img1.src = 'pics/offic.png';
    img2.src = 'pics/suitcase.png';
    body.style.backgroundImage = 'linear-gradient(#CFD9DF, #E2EBF0)';
    body.style.backgroundSize = 'contain'

    h1.style.fontFamily = 'Times New Roman, serif';
    h1.style.color = '#554E55';
    h2[0].style.display = 'block';
    h2[0].style.fontFamily = 'Times New Roman, serif';
    h2[0].style.color = '#554E55';
    h2[1].style.display = 'block';
    h2[1].style.fontFamily = 'Times New Roman, serif';
    h2[1].style.color = '#554E55';

}

function minorStyle (name) {
    MAINFORM.style.display = 'none';
    SAVINGS_FORM.style.display = 'block';
    SPENDINGS_FORM.style.display = 'block';
    h1.innerText = `Приветик, ${name}🥺`
    img1.src = 'pics/dream.png';
    img2.src = 'pics/pigmoney.png';
    body.style.backgroundImage = 'linear-gradient(#9795f0, #fbc8d4)';
    body.style.backgroundSize = 'contain'

    h1.style.fontFamily = '"Comic Sans MS", serif';
    h1.style.color = '#EA64E9'
    h2[0].style.display = 'block';
    h2[0].style.fontFamily = '"Comic Sans MS", serif';
    h2[0].style.color = '#EA64E9'
    h2[1].style.display = 'block';
    h2[1].style.fontFamily = '"Comic Sans MS", serif';
    h2[1].style.color = '#EA64E9'

}

function alertIncorrect (){ alert('Пожалуйста, перезагрузите страницу и введите свои данные :)') }


