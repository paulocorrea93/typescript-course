"use strict";
// 1/9 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
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
