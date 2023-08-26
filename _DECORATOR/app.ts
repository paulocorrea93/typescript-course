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
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");

console.log(trator.showName());

//129 de 133 - Accessor decorator

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `nome do monstro: ${this.name}`;
  }

  get showAge() {
    return `idade do monstro ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

//130 de 133 - Property decorator

function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = () => {
      return value;
    };

    const setter = (newVal: string) => {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");

console.log(newItem);

// 131 de 133 - class decorator para inserir data de criação de objetos

function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(33);
const newPen = new Pen(44);

console.log(newBook);
console.log(newPen);

// 132 de 133 - verificar se usuário pode ou não fazer alterações no sistema com decorator

function anotherPostValidation() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction)
    descriptor.value = function(...args: any[]){
      if (args[1] === true) {
        console.log("O usuário já postou.");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @anotherPostValidation()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro Post.", newPost.alreadyPosted);
newPost.post("Meu segundo Post.", newPost.alreadyPosted);


//133 de 133 - validação de número máximo de caracteres com decorator

function Max(limit:number){
  return function(target: Object, propertyKey: string){
    let value: string

    const getter = function(){
      return value
    }

    const setter = function(newVal: string){
      if(newVal.length > limit){
        console.log(`O nome do usuário deve ter até ${limit} caracteres.`)
      } else {
        value = newVal
      }
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @Max(10)
  name

  constructor(name: string){
    this.name = name
  }
}

const newUser01 = new Admin("Paulo")
const newUser02 = new Admin("PauloCorrea")

console.log(newUser01.name)