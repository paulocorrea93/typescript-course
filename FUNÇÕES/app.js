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
        ...obj2,
    };
}
const newObj = mergeObjects({ name: "Paulo Correa" }, { job: "software developer", age: 30 });
console.log(newObj);
//CONSTRAINT EM GENERIC FUNCTIONS
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(22, 33));
console.log(biggestNumber("44", "22"));
//ESPECIFICAR TIPO DE ARGUMENTO
function mergeArr(a, b) {
    return a.concat(b);
}
console.log(mergeArr([1, 2, 3], [4, 5]));
// console.log(mergeArr([1, 2, 3], ["teste", "testando"])) ADICIONAR GENERIC FUNCTION PARA ESPECIFICAR TIPO DE PARAMETRO
console.log(mergeArr([1, 2, 3], ["teste", "testando"]));
//PARAMETROS OPCIONAIS
const modernGreeting = (name, greet) => {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
};
console.log(modernGreeting("Paulo"));
console.log(modernGreeting("Paulo", "Sr."));
