"use strict";
//92 a 113
// campos de classes
class User {
}
const Paulo = new User();
Paulo.name = "Paulo";
console.log(Paulo);
// constructor
class NewUser {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
const joao = new NewUser("João", 30);
console.log(joao);
// const pedro = new NewUser(20, 30) **APRESENTA ERRO, POIS OS PARAMETROS PASSADOS DEVEM RESPEITAR O TIPO**
// propriedades readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
fusca.name = "Fusca Turbo";
// fusca.wheels = 4 **EM UM READONLY, O VALOR DA PROPRIEDADE NÃO PODE SER ALTERADO, APENAS LIDO**
console.log(fusca);
//Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const deathWing = new KillerMachine("Death Wing", 8);
console.log(deathWing);
console.log(trator);
