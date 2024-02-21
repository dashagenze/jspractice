let btn = document.getElementById('btn');



class Pet {

    constructor(name, type, hunger) {
        this.name = name;
        this.type = type;
        this.hunger = hunger;
    }

    sayHelo() {
        alert(`привет, ${this.name}!🥺`)
    }


    decrease() {
        let hunger = this.hunger;
        let name = this.name;
        let i = setInterval(function decrease() {
            hunger--;
            console.log(hunger)
            // let hungerField = document.getElementById('hunger');
            // hungerField.textContent = String(hunger);
            if (hunger === 0) {
                clearInterval(i)
                alert(`${name} умер ;(`);
            }

        }, 1000)
    }


    feed() {
        console.log(this.hunger)
        // this.hunger += 50;
        // return this.hunger
        // let hungerField = document.getElementById('hunger');
        // hungerField.textContent = hunger;
    }
    func = this.feed.bind(this.decrease())
}


let bunny = new Pet('баня', 'bunny', 100);

bunny.decrease();

btn.onclick = () => {bunny.feed()}