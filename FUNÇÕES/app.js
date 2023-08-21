"use strict";
// VOID
const withoutReturn = () => {
    console.log("Essa é uma função sem retorno");
};
withoutReturn();
// FUNÇÕES COMO CALLBACK
const greeting = (name) => {
    return `Olá ${name}`;
};
const preGreeting = (f, userName) => {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, "Paulo");
preGreeting(greeting, "Gabriel");
