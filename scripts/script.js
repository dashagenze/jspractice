let btn = document.getElementById('btn');


let ttt = document.getElementById('ttt'),
    parent = document.getElementById('parent');

let object = {
    'foo': 44,
}

console.log(object.type);

ttt.addEventListener('click', (e) => {
    e.stopPropagation()
    e.currentTarget.style.backgroundColor = 'red';

    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);

})









// let hunger = document.getElementById('').textContent;

class Pet {

    constructor(name) {
        this.name = name;
        this.hunger = 100;
    }

    // hungerDecrease() {
    //     setInterval(function decrease(hunger) {
    //         hunger--
    //         console.log(this.hunger);
    //         // let hungerField = document.getElementById('hunger');
    //         // hungerField.textContent = hunger;
    //         // if (hungerField.textContent === '0') {
    //         //     alert('баня умер');
    //         //     clearInterval(hungerDecrease)
    //         // }
    //     }, 1000)

    // hungerDecrease() {
    //     let hungerDecrease = setInterval(function decrease() {
    //         hunger--
    //         let hungerField = document.getElementById('hunger');
    //         hungerField.textContent = hunger;
    //         if (hungerField.textContent === '0') {
    //             alert('баня умер');
    //             clearInterval(hungerDecrease)
    //         }
    //     }, 10000)

        // function feed(fed) {
        //     hunger += +fed;
        //     let hungerField = document.getElementById('hunger');
        //     hungerField.textContent = hunger;
        // }
    }



    // sayHelo(name) {
    //     alert(`привет, ${this.name}!🥺`)
    // }


}

let bunny = new Pet('Баня')
bunny.hungerDecrease(bunny.hunger)

btn.onclick = () => { bunny.feed(50);}

// bunny.sayHelo();
console.log(bunny.hunger);


