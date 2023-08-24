// 1 de 9 - GENERICS

const showData = <T>(arg: T) => {
  return `o dado é: ${arg}`;
};

console.log(showData(10));
console.log(showData("Dez"));
console.log(showData(false));
console.log(showData([1, 2, 3]));

// 2 de 9 constraint em generics

const showProductName = <T extends { name: string }>(obj: T) => {
  return `o nome do produto é: ${obj.name}`;
};

console.log(showProductName({ name: "roupa", size: "gg" }));
console.log(showProductName({ name: "porta", color: "branca" }));
// console.log(showProductName({nOfShirts: 50})) APRESENTA ERRO, POIS O OBJETO PRECISA TER A PROPRIEDADE 'NAME'

// 3 de 9 generics com interface

interface myObject<T, U, Q> {
  name: string;
  engine: T;
  wheels: U;
  color: Q;
}

type Car = myObject<number, number, string>;
type Pen = myObject<boolean, boolean, string>;

const myCar: Car = { name: "Fiesta", engine: 1.0, wheels: 5, color: "grafite" };
const myPen: Pen = { name: "BIC", engine: false, wheels: false, color: "azul" };

console.log(myCar);
console.log(myPen);

// 4 de 9 type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  // @ts-ignore
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "16GB",
};

console.log(getSomeKey(server, "hd"));
console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste")) (ERRO, POIS O OBJETO NÃO TEM A PROPRIEDADE 'TESTE')

// 5 de 9 Keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

const showNameChar = (obj: Character, key: C) => {
  return `${obj[key]}`;
};

const myChar = {
  name: "Paulo",
  age: 30,
  hasDriveLicense: true,
};

console.log(showNameChar(myChar, 'name'));

// 6 de 9 typeof type operator

const userName: string = "Paulo"

const userName2: typeof userName = "Gabriel"

// const userName3: typeof userName = 3 (APRESENTA ERRO, POIS O TYPEOF DEVE CONTER O MESMO TIPO DA VARIÁVEL DE ORIGEM)

type x = typeof userName

const userName4: x = "João"

// 7 de 9 indexed access types

type Truck = {name: string, km: number, desc: string}

type Km = Truck['km']

const showKmTruck = (km: Km) => {
    return `O km do veículo é: ${km}`
}

const newTruck = {
    name: "caminhão",
    km: 30000,
    desc: "caminhão pipa"
}

console.log(showKmTruck(newTruck.km))

const newCar = {
    name: "carro",
    km: 2000,
    desc: "carro de passeio"
}

console.log(showKmTruck(newCar.km))

// 8 de 9 - Condicional Expressions Types

interface A {}

interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 5

interface Teste {showName(): string}

type myType2 = Teste extends {showNumber(): number} ? string : boolean