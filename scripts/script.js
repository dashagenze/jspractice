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






class Pet {

    constructor(name, type, hunger) {
        this.name = name;
        this.type = type;
        this.hunger = hunger;
    }

    sayHelo() {
        alert(`привет, ${this.name}!🥺`)
    }

    hungerDecrease() {
        setInterval(function decrease() {

            console.log(this.hunger);

        }, 1000)
    }



}




let bunny = new Pet('Баня', 'bunny', 100)

bunny.hungerDecrease();
// setInterval(decrease.bind,10);





// btn.onclick = () => { bunny.feed(50);}

// bunny.sayHelo();





// function feed(fed) {
//     hunger += +fed;
//     let hungerField = document.getElementById('hunger');
//     hungerField.textContent = hunger;
// }