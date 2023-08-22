// 1/9 TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE

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

// 2/9 PROPRIEDADE OPCIONAL EM INTERFACE

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

// 3/9 READONLY

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

// 4/9 INDEX SIGNATURE

interface ObjectCoord {
  [index: string]: number;
}

const coordX: ObjectCoord = {
  x: 10,
};

console.log(coordX);

coordX.y = 20;

console.log(coordX)

// 5/9 HERANÇA DE INTERFACES

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