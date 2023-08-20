// FUNÇÕES ANONIMAS TYPESCRIPT

// setTimeout(() => {
//   const sallary: number = 1000;

//   // console.log(parseFloat(sallary))
//   console.log(sallary);
// }, 2000);

// TIPOS DE OBJETOS

function passCoordinades(coord: { x: number; y: number }) {
  console.log(`X coordinades: ${coord.x}`);
  console.log(`Y coordinades: ${coord.y}`);
}

const objCoord = { x: 384, y: 948 };

passCoordinades(objCoord);

//PROPRIEDADES OPICIONAIS

let showNumbers = (a: number, b: number, c?: number) => {
  console.log(`"A" = ${a}`);
  console.log(`"B" = ${b}`);
  console.log(`"C" = ${c}`);
};

showNumbers(1, 2);

// VALIDAÇÃO TYPESCRIPT

let advancedGreetings = (firstName: string, lastName?: string) => {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}, tudo bem?`;
};

console.log(advancedGreetings("Paulo", "Correa"));
console.log(advancedGreetings("Gabriel"));

// UNION TYPE

let showBalance = (balance: string | number) => {
  console.log(`O saldo da conta é R$${balance}`);
};

showBalance("100");
showBalance(500);

let showuserRole = (role: boolean | string) => {
  if (typeof role === "boolean") {
    return `usuário não aprovado`;
  }
  return `a função do usuário é ${role}`;
};

console.log(showuserRole("Admin"));
console.log(showuserRole(false));

// TYPE ALIAS

type ID = string | number;

let showId = (id: ID) => {
  console.log(`o id é: ${id}`);
};

showId(1);
showId("500");

// INTERFACES

interface Point {
  x: number;
  y: number;
  z: number;
}

const showCoords = (obj: Point) => {
  console.log(`x = ${obj.x}, y = ${obj.y}, z = ${obj.z}`);
};

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

// INTERFACE X TYPE ALIAS

interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {name: "Paulo", age: 30}

console.log(somePerson)

// type personType = {
//   name: string
// }

// type personType = {
//   age: number
// }

// ERRO MODIFICADOR DUPLICADO, ESSE ERRO SE DA PORQUE O ALIAS NÃO SE PODE INCREMENTAR DURANTE O CÓDIGO

// LITERAL TYPES

let test: "testando"
test = "testando"

console.log(test)

const showDirection = (direction: "left" | "right" | "center") => {
  console.log(`a direção escolhida é: ${direction}`)
}

showDirection("center")
showDirection("right")

// NON NULL ASSERTION OPERATORS

const p = document.getElementById("some-p")

console.log(p!.innerHTML)

//com a exclamação o 'erro' é validado

//BIGINT

let n: bigint

// n = 1 (erro porque o numero é pequeno)

n = 1000n

//versão do ES2016 para ES2020

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// SYMBOL

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

//o tipo symbol, deixa o valor da variavel como único, mesmo que seja ou tenha o mesmo valor, como no exemplo, symbolA não é igual a symbolB