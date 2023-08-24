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
// 4 de 9 type parameters
function getSomeKey(obj, key) {
    // @ts-ignore
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "16GB",
};
console.log(getSomeKey(server, "hd"));
console.log(getSomeKey(server, "ram"));
const showNameChar = (obj, key) => {
    return `${obj[key]}`;
};
const myChar = {
    name: "Paulo",
    age: 30,
    hasDriveLicense: true,
};
console.log(showNameChar(myChar, 'name'));
// 6 de 9 typeof type operator
const userName = "Paulo";
const userName2 = "Gabriel";
const userName4 = "João";
const showKmTruck = (km) => {
    return `O km do veículo é: ${km}`;
};
const newTruck = {
    name: "caminhão",
    km: 30000,
    desc: "caminhão pipa"
};
console.log(showKmTruck(newTruck.km));
const newCar = {
    name: "carro",
    km: 2000,
    desc: "carro de passeio"
};
console.log(showKmTruck(newCar.km));
