"use strict";
//92 a 113
// campos de classes
class User {
}
const Paulo = new User;
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
