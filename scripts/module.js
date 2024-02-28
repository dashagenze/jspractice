let strobery = document.getElementById('strobery'),
    burgir = document.getElementById('burgir'),
    pinza = document.getElementById('pinza');
let sayHi = document.getElementById('sayHi');
let bunnyBtn = document.getElementById('bunnyBtn'),
    catBtn = document.getElementById('catBtn'),
    feedLabel = document.getElementById('feedLabel');
let bunnyImg = document.getElementById('bunny');
let catImg = document.getElementById('kitty');
let petImg = document.getElementById('petImg');
let pet = document.getElementById('pet');
let hungerAlert = document.getElementById('hungerAlert');
let tamagochiMenu = document.getElementById('tamagochiMenu');
let jump = document.getElementById('jump');
let petPick = document.getElementById('petPick');
let lamp = document.getElementById('lamp');
let page = document.querySelector('.page');
let tryagain = document.getElementById('tryagain');
const foods = document.querySelectorAll('.fod');



tamagochiMenu.style.display = 'none';
tryagain.style.display = 'none';
[jump, pet].map((item) => item.style.display = 'none')

tryagain.onclick = () => location.reload();


//КЛАСС ПИТОМЦА
class Pet {
    hunger = 100;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sayHelo() {
        alert(`привет, ${this.type} ${this.name}!🥺`)
    }


    decrease() {
        let hungerField = document.getElementById('hunger');
        hungerAlert.style.display = 'none';

        console.log(this.name);
        let i = setInterval(() => {
            this.hunger--;

            if (this.hunger > 50) {
                hungerAlert.style.display = 'none';
                hungerField.style.backgroundColor = 'forestgreen';
            } else if (this.hunger < 50) {
                hungerField.style.backgroundColor = '#FF7F50'
                hungerAlert.style.display = 'block';

            } else if (this.hunger < 30) {

                hungerField.style.backgroundColor = '#DC143C';

            }
            if (this.hunger === 0) {
                clearInterval(i)
                alert(`${this.name} умер ;(`);
                petImg.src = '';
                hungerField.style.backgroundColor = '#696969';
                tamagochiMenu.style.display = 'none';
                jump.style.display = 'none';
                pet.style.display = 'none';
                tryagain.style.display = 'block';
            }
            return hungerField.textContent = String(this.hunger)

        }, 700)
        return hungerField.textContent = String(this.hunger)

    }


    feed(fed) {
        let sum = fed + this.hunger
        this.hunger += fed;
        let hungerField = document.getElementById('hunger');

        if (sum >= 100){
            this.hunger = 100;
            return hungerField.textContent = String(this.hunger)
        } else {
            return hungerField.textContent = String(this.hunger);
        }
    }

    welcome() {
        let welcome = document.getElementById('welcome');
        return welcome.textContent += `Привет, ${this.name}!!1`
    }


    strobery = () => this.feed(10);
    burgir = () => this.feed(20);
    pinza = () => this.feed(30);

}

class Bunny extends Pet {
    constructor(name) {
        super(name, 'зайчик');
    }


    jump(){
        alert(`${this.name} прыгнул высоко-высоко!1`)
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name, 'котя')
    }

    purr() {
        alert(`${this.name} мурчит🥰`)
    }


}

//ВЫБОР ПИТОМЦА

// ПИТОМЕЦ ЗАЙЧИК
bunnyBtn.onclick = () => {
    let bunny = new Bunny(name('баня'));

    tamagochiMenu.style.display = 'block';
    jump.style.display = 'block';
    petPick.style.display = 'none';

    petImg.src = 'assets/bunny/animated-bunny.gif'

    bunny.decrease()
    bunny.welcome()

    sayHi.onclick = () => bunny.sayHelo()
    jump.onclick = () => bunny.jump()


    lamp.onclick = () => {
        if (page.classList.toggle('day')) petImg.src = 'assets/bunny/animated-bunny.gif';
        if (page.classList.toggle('night')) petImg.src = 'assets/bunny/bunny_sleepin.gif';

        foods.forEach((item) => {
            item.disabled = !item.disabled;
        });
    }


    strobery.onclick = () => {
        bunny.strobery();
        changeImg(petImg, 'assets/bunny/animated-bunny.gif', 'assets/bunny/bunny_eatin.gif');
    }
    burgir.onclick = () => {
        bunny.burgir();
        changeImg(petImg, 'assets/bunny/animated-bunny.gif', 'assets/bunny/bunny_eatin.gif');
    }
    pinza.onclick = () => {
        bunny.pinza();
        changeImg(petImg, 'assets/bunny/animated-bunny.gif', 'assets/bunny/bunny_eatin.gif');
    }

}




// ПИТОМЕЦ КОТ
catBtn.addEventListener('click', () => {
    let kitty = new Cat(name('кисенышь'), 'котик');

    tamagochiMenu.style.display = 'block';
    pet.style.display = 'block';
    petPick.style.display = 'none';

    petImg.src = 'assets/cat/animated-cat.gif';


    kitty.decrease()
    kitty.welcome()


    lamp.onclick = () => {
        if (page.classList.toggle('day')) petImg.src = 'assets/cat/animated-cat.gif';
        if (page.classList.toggle('night')) petImg.src = 'assets/cat/cat_sleepin.gif';

        foods.forEach((item) => {
            item.disabled = !item.disabled;
        });
    }


    sayHi.onclick = () => kitty.sayHelo()
    pet.onclick = () => kitty.purr();

    strobery.onclick = () => {
        kitty.strobery();
        changeImg(petImg, 'assets/cat/animated-cat.gif', 'assets/cat/cat-noodles.gif');
    }
    burgir.onclick = () => {
        kitty.burgir();
        changeImg(petImg, 'assets/cat/animated-cat.gif', 'assets/cat/cat-noodles.gif');
    }
    pinza.onclick = () => {
        kitty.pinza();
        changeImg(petImg, 'assets/cat/animated-cat.gif', 'assets/cat/cat-noodles.gif');
    }

})


function changeImg(element, initialImg, fivesecImg) {

    let counter = 0;

    let playAnimation = setInterval(() => {
        counter++
        console.log(counter);
        element.src = fivesecImg;
        if (counter === 5) {
            clearInterval(playAnimation);
            element.src = initialImg;
        }
    }, 700)
}

function name(promptname) {
    let petName = prompt('назовите своего питомца!!', promptname);
    if (petName === null || petName === '') {
        alert('вам нужно ввести имя для питомца!')
        location. reload()
    }
    return petName
}





// function plus(i) {
//     let counter = i;
//     return function () {
//         return counter++
//     }
// }
//
// let plusuu5 = plus(5);
//
// console.log(plusuu5());
// console.log(plusuu5());
// console.log(plusuu5());
// console.log(plusuu5());





// /**
//  * Нужно написать функцию, которая принимает число N и возвращает функцию,
//  * вызов которой первые N раз возвращает 'yes', а потом – 'no'.
//  */

// function canGetCount(n) {
//     let counter = n;
//     return function q() {
//         if (counter) {
//             counter--;
//             return 'yes'
//         } else return 'no'
//
//     }
// }
// const getOne = canGetCount(2);
//
// console.log(getOne() === 'yes');
// console.log(getOne() === 'yes');
// console.log(getOne() === 'no');









