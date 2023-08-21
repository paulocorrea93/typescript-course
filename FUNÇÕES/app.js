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
// GENERIC FUNCTIONS
function genericFunction(arr) {
    return arr[0];
}
console.log(genericFunction([1, 2, 3]));
console.log(genericFunction(["um", "dois", "tres"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObj = mergeObjects({ name: "Paulo Correa" }, { job: "software developer", age: 30 });
console.log(newObj);
