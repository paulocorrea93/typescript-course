"use strict";
// 1 de 9 - GENERICS
const showData = (arg) => {
    return `o dado é: ${arg}`;
};
console.log(showData(10));
console.log(showData("Dez"));
console.log(showData(false));
console.log(showData([1, 2, 3]));
// 2 de 9 constraint em generics
const showProductName = (obj) => {
    return `o nome do produto é: ${obj.name}`;
};
console.log(showProductName({ name: "roupa", size: "gg" }));
console.log(showProductName({ name: "porta", color: "branca" }));
const myCar = { name: "Fiesta", engine: 1.0, wheels: 5, color: "grafite" };
const myPen = { name: "BIC", engine: false, wheels: false, color: "azul" };
console.log(myCar);
console.log(myPen);
