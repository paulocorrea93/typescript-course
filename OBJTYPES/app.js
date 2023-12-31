"use strict";
// 1 de 9 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
const showProductDetails = (product) => {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable === true) {
        console.log(`O produto está disponível`);
    }
    else {
        console.log(`Produto indisponivel no momento`);
    }
};
const shirt = {
    name: "Camisa",
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
const showUserDetails = (user) => {
    console.log(`O email do usuário é: ${user.email}`);
    if (user.role) {
        console.log(`e seu papel na empresa é: ${user.role}`);
    }
};
const u1 = {
    email: "paulo@email.com",
    role: "admin",
};
const u2 = {
    email: "gabriel@email.com",
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
fusca.brand = "bmw";
// fusca.wheels = 5 (erro, pois a propriedade é 'readonly')
console.log(fusca);
const coordX = {
    x: 10,
};
console.log(coordX);
coordX.y = 20;
console.log(coordX);
const paulo = {
    name: "Paulo",
    race: "Human"
};
const goku = {
    name: "Goku",
    race: "Saiyan",
    superPower: ["kamehameha", "teleport", "fly", "genki-dama"]
};
console.log(paulo);
console.log(goku, goku.superPower[1]);
const Aragorn = {
    name: "Aragorn",
    type: "Sword"
};
console.log(Aragorn);
// 7 de 9 READONLY ARRAY
let myArray = ["Maçã", "Banana", "Laranja"];
console.log(myArray);
myArray.forEach((item) => {
    console.log(`fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myFiveNumbers = [1, 2, 3, 4, 5];
// const myFiveNumbers: fiveNumbers = [1, "2", true, 4, 5] **ERRO POIS SÓ ACEITA TIPO NUMBER**
// const myFiveNumbers: fiveNumbers = [1, 2, 3, 4, 5, 6] **ERRO POIS SÓ ACEITA 5 ELEMENTOS, NEM MAIS NEM MENOS**
console.log(myFiveNumbers);
const anotherPerson = ["Paulo", 30];
console.log(anotherPerson);
// 9 de 9 TUPLAS COM READONLY
const showNumbers = (numbers) => {
    console.log(numbers[0]);
    console.log(numbers[1]);
};
showNumbers([3, 4]);
