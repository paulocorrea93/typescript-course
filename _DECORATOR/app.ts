//125 de 133 - primeiro decorator

function myDecorator() {
  console.log("Iniciando decorator.");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método.");
  }
}

const myObj = new myClass();

myObj.testing();

//126 de 133 - multiplos decorators

function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou A.");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou B.");
  };
}
function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou C.");
  };
}

class MultipleDecorators {
  @a()
  @b()
  @c()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// 127 de 133 - class decorator

function classDecorator(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === "User") {
    console.log("Criando usuário");
  }
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const paulo = new User("Paulo");

console.log(paulo);

//128 de 133 - decorator de método

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(true)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");

console.log(trator.showName());

//129 de 133 - Acessor decorator

class Monster {
  name?
  age?

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  

  @enumerable(true)
  get showName(){
    return `nome do monstro: ${this.name}`
  }

  get showAge(){
    return `idade do monstro ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)