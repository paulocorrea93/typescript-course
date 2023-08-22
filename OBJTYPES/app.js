"use strict";
// TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
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
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
