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

const deathWing = new KillerMachine("Death Wing", 8);

console.log(deathWing);
console.log(trator);

// metodos

class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger!");
  }
}

const Thorin = new Dwarf("Thorin");

console.log(Thorin.name);
Thorin.greeting();

// this em classes

class Truck {
  name;
  hp;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showTruckDetails() {
    console.log(`O caminhã ${this.name} tem ${this.hp} cavalos de potência`);
  }
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 600);

volvo.showTruckDetails();
scania.showTruckDetails();

// getters

class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return `${this.name} ${this.surname}`;
  }
}

const Paulo2 = new Person("Paulo", "Correa");

console.log(Paulo2.fullname);
console.log(Paulo2.name);
console.log(Paulo2.surname);

// setters

class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("x inserido com sucesso!");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;

    console.log("y inserido com sucesso!")
  }

  get showCoords(){
    return `x: ${this.x}, y:${this.y}`
  }
}


const myCoords = new Coords()

myCoords.fillX = 10
myCoords.fillY = 20

console.log(myCoords.showCoords)

// herdando interfaces

interface showTitle {
  title: string
}

class blogPost implements showTitle {
  title

  constructor(title: string){
    this.title = title
  }

  itemTitle(){
    return `O título da página web é ${this.title}`
  }
}

const webPage = new blogPost("Hello World")

class Test02 {
  title

  constructor(title: string){
    this.title = title
  }

  itemTitle(){
    return `Esse é outro título, com o nome: ${this.title}`
  }
}

const anotherPost = new blogPost("Hello 2")

console.log(webPage)
console.log(anotherPost)

// override de métodos

class Base {
  someMethod(){
    console.log("alguma coisa")
  }
}

class Base2 extends Base {
  someMethod(){
    console.log("alguma outra coisa")
  }
}

const testeBase = new Base2()

testeBase.someMethod()

// visibilidade: public

class C {
  x = 10
}

class D extends C {

}

const cInstance = new C
const dInstance = new D

console.log(cInstance.x)
console.log(dInstance.x)

// visibilidade: protected

class E {
  protected x = 30

  protectedMethod(){
    console.log("Esse metodo é protegido")
  }
}

class F extends E{
  pegarOx(){
    console.log(instanceF.x)
  }

  protectedMethod2(){
    instanceF.protectedMethod()
  }
}

const instanceF = new F

instanceF.pegarOx()
instanceF.protectedMethod2()