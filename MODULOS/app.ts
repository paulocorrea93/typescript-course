//116 de 122 - importando arquivos

import greeting from "./greeting.js";

greeting();

//117 de 122 - importando variáveis

import { x } from "./variable.js";

console.log(x);

//118 de 122 - multiplas importações

import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);

myFunction();

//119 de 122 alias de importação

import { changeName as name } from "./changeName.js";

console.log(name);

//120 de 122 importação de diversos itens

import * as myNumbers from "./numbers.js";

console.log(myNumbers);

const n3 = myNumbers.n3;

console.log(n3);

myNumbers.showNumber();

//121 de 122 - importando tipos

import { Human } from "./myTypes.js";

class User implements Human {
  name
  age

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const paulo = new User("Paulo", 30)

console.log(paulo)

//122 de 122 - conclusão teórica do módulo