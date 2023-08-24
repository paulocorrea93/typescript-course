//92 a 113

// campos de classes

class User {
  name!: string;
  age!: number;
}

const Paulo = new User();

Paulo.name = "Paulo";

console.log(Paulo);

// constructor

class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

const joao = new NewUser("João", 30);

console.log(joao);

// const pedro = new NewUser(20, 30) **APRESENTA ERRO, POIS OS PARAMETROS PASSADOS DEVEM RESPEITAR O TIPO**

// propriedades readonly

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);

fusca.name = "Fusca Turbo";
// fusca.wheels = 4 **EM UM READONLY, O VALOR DA PROPRIEDADE NÃO PODE SER ALTERADO, APENAS LIDO**

console.log(fusca);

//Herança e Super

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const deathWing = new KillerMachine("Death Wing", 8)

console.log(deathWing)
console.log(trator)