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
// console.log(showProductName({nOfShirts: 50})) APRESENTA ERRO, POIS O OBJETO PRECISA TER A PROPRIEDADE 'NAME'
