"use strict";
// FUNÇÕES ANONIMAS TYPESCRIPT
// setTimeout(() => {
//   const sallary: number = 1000;
//   // console.log(parseFloat(sallary))
//   console.log(sallary);
// }, 2000);
// TIPOS DE OBJETOS
function passCoordinades(coord) {
    console.log(`X coordinades: ${coord.x}`);
    console.log(`Y coordinades: ${coord.y}`);
}
const objCoord = { x: 384, y: 948 };
passCoordinades(objCoord);
//PROPRIEDADES OPICIONAIS
let showNumbers = (a, b, c) => {
    console.log(`"A" = ${a}`);
    console.log(`"B" = ${b}`);
    console.log(`"C" = ${c}`);
};
showNumbers(1, 2);
// VALIDAÇÃO TYPESCRIPT
let advancedGreetings = (firstName, lastName) => {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
};
console.log(advancedGreetings("Paulo", "Correa"));
console.log(advancedGreetings("Gabriel"));
// UNION TYPE
let showBalance = (balance) => {
    console.log(`O saldo da conta é R$${balance}`);
};
showBalance("100");
showBalance(500);
let showuserRole = (role) => {
    if (typeof role === "boolean") {
        return `usuário não aprovado`;
    }
    return `a função do usuário é ${role}`;
};
console.log(showuserRole("Admin"));
console.log(showuserRole(false));
let showId = (id) => {
    console.log(`o id é: ${id}`);
};
showId(1);
showId("500");
const showCoords = (obj) => {
    console.log(`x = ${obj.x}, y = ${obj.y}, z = ${obj.z}`);
};
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Paulo", age: 30 };
console.log(somePerson);
// type personType = {
//   name: string
// }
// type personType = {
//   age: number
// }
// ERRO MODIFICADOR DUPLICADO, ESSE ERRO SE DA PORQUE O ALIAS NÃO SE PODE INCREMENTAR DURANTE O CÓDIGO
// LITERAL TYPES
let test;
test = "testando";
console.log(test);
const showDirection = (direction) => {
    console.log(`a direção escolhida é: ${direction}`);
};
showDirection("center");
showDirection("right");
// NON NULL ASSERTION OPERATORS
const p = document.getElementById("some-p");
console.log(p.innerHTML);
//com a exclamação o 'erro' é validado
