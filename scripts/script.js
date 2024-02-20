// function Pet (name, kind, isEvil, owner) {
//     this.name = name;
//     this.kind = kind;
//     this.isEvil = isEvil;
//     this.owner = owner
//
//     this.bite = function biteOwner() {
//         console.log(`${this.name} bit ${this.owner}`)
//     }
// }
//
// function Person (name, sex, hasPet, pet, petName) {
//     this.name = name;
//     this.sex = sex;
//     this.hasPet = hasPet;
//     this.pet = Pet.kind;
//     this.petName = petName;
// }
//
// let noma = new Person('Noma Grimes', 'M', true, bunny.kind, bunny.name);
//
// let bunny = new Pet('Пушненок', 'bunny', true, noma.name);
//
//
// //установить единое для всех объектов данного типа свойство
// Pet.prototype.isAnimal = true;
//
// bunny.bite();



// Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// И метод getFullName() - имя и фамилия работника.


function Worker(name, surname, rate, days) {

}
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

