// 1 de 9 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

const showProductDetails = (product: Product) => {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable === true) {
    console.log(`O produto está disponível`);
  } else {
    console.log(`Produto indisponivel no momento`);
  }
};

const shirt: Product = {
  name: "Camisa",
  price: 29.99,
  isAvailable: true,
};

showProductDetails(shirt);

showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });

// 2 de 9 PROPRIEDADE OPCIONAL EM INTERFACE

interface User {
  email: string;
  role?: string;
}

const showUserDetails = (user: User) => {
  console.log(`O email do usuário é: ${user.email}`);
  if (user.role) {
    console.log(`e seu papel na empresa é: ${user.role}`);
  }
};

const u1: User = {
  email: "paulo@email.com",
  role: "admin",
};

const u2: User = {
  email: "gabriel@email.com",
};

showUserDetails(u1);
showUserDetails(u2);

// 3 de 9 READONLY

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

fusca.brand = "bmw";
// fusca.wheels = 5 (erro, pois a propriedade é 'readonly')

console.log(fusca);

// 4 de 9 INDEX SIGNATURE

interface ObjectCoord {
  [index: string]: number;
}

const coordX: ObjectCoord = {
  x: 10,
};

console.log(coordX);

coordX.y = 20;

console.log(coordX)

// 5 de 9 HERANÇA DE INTERFACES

interface Human {
  name: string,
  race: string
}

interface SuperHuman extends Human {
  superPower: string[]
}

const paulo: Human = {
  name: "Paulo",
  race: "Human"
}

const goku: SuperHuman = {
  name: "Goku",
  race: "Saiyan",
  superPower: ["kamehameha", "teleport", "fly", "genki-dama"]
}

console.log(paulo)
console.log(goku, goku.superPower[1])

// 6 de 9 INTERSECTION TYPES

interface Character {
  name: string
}

interface Weapon {
  type: string,
  caliber?: number
}

type CharacterWeapon = Character & Weapon

const Aragorn: CharacterWeapon = {
  name: "Aragorn",
  type: "Sword"
}

console.log(Aragorn)

// 7 de 9 READONLY ARRAY

let myArray: ReadonlyArray<String> = ["Maçã", "Banana", "Laranja"]

console.log(myArray)

myArray.forEach((item) => {
  console.log(`fruta: ${item}`)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

// 8 de 9 TUPLAS

type fiveNumbers = [number, number, number, number, number]

const myFiveNumbers: fiveNumbers = [1, 2, 3, 4, 5]
// const myFiveNumbers: fiveNumbers = [1, "2", true, 4, 5] **ERRO POIS SÓ ACEITA TIPO NUMBER**
// const myFiveNumbers: fiveNumbers = [1, 2, 3, 4, 5, 6] **ERRO POIS SÓ ACEITA 5 ELEMENTOS, NEM MAIS NEM MENOS**

console.log(myFiveNumbers)

type nameAndAge = [string, number]

const anotherPerson = ["Paulo", 30]

console.log(anotherPerson)

// 9 de 9 TUPLAS COM READONLY

const showNumbers = (numbers: readonly [number, number]) => {
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([3, 4])