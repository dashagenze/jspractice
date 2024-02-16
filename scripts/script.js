// let btn = document.getElementById('btn');
//
//
// let ttt = document.getElementById('ttt'),
//     parent = document.getElementById('parent');
//
// let object = {
//     'foo': 44,
// }
//
// console.log(object.type);
//
// ttt.addEventListener('click', (e) => {
//     e.stopPropagation()
//     e.currentTarget.style.backgroundColor = 'red';
//
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.currentTarget);
//
// })
//



let hunger = 100;

console.log(hunger);



class Pet {

    constructor(name) {
        this.name = name;
    }

    sayHelo(name) {
        alert(`привет, ${this.name}!🥺`)
    }


    // hungerdecrease = setInterval(decrease,10);

    i = setInterval(function decrease() {
        hunger--
        let hungerfield = document.getElementById('hunger')
        hungerfield.textContent = String(hunger);

        if (hungerfield.textContent === '0') {
            alert(`${this.name} умер :/`);
            clearInterval();
        }
    }, 100)




}




let bunny = new Pet('Баня')


// setInterval(decrease.bind,10);





// btn.onclick = () => { bunny.feed(50);}

// bunny.sayHelo();



// hungerDecrease() {
//     setInterval(function decrease() {
//         hunger--
//         console.log(this.hunger);
//
//
//
//
//         // let hungerField = document.getElementById('hunger');
//         // hungerField.textContent = hunger;
//         // if (hungerField.textContent === '0') {
//         //     alert('баня умер');
//         //     clearInterval(hungerDecrease)
//         // }
//     }, 1000)}



// function feed(fed) {
//     hunger += +fed;
//     let hungerField = document.getElementById('hunger');
//     hungerField.textContent = hunger;
// }