"use strict";
// TYPE GUARD
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar operação.");
    }
}
sum("10", "20");
sum(20, 20);
sum("5", 3);
// CHECANDO SE O VALOR EXISTE
function operations(arr, operator) {
    if (operator) {
        if (operator === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operator === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor defina uma operação.");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([5, 4], "multiply");
// INSTANCE OF
class User {
    constructor(name) {
        this.name = name;
    }
}
class superUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new superUser("Paulo");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof superUser) {
        console.log(`Olá ${user.name}, seja bem-vindo, deseja acessar os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Bem-vindo ${user.name}.`);
    }
}
userGreeting(jhon);
userGreeting(paul);
