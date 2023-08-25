//125 de 133 - primeiro decorator

function myDecorator(){
  console.log("Iniciando decorator.")

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando decorator")
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing(){
    console.log("Terminando execução do método.")
  }
}

const myObj = new myClass()

myObj.testing();

//126 de 133 - multiplos decorators

function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executou A.")
  }
}

function b() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executou B.")
  }
}
function c() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executou C.")
  }
}

class MultipleDecorators{
  @a()
  @b()
  @c()
  testing(){
    console.log("Terminando execução")
  }
}

const multiple = new MultipleDecorators()

multiple.testing()

// 127 de 133 - class decorator

function classDecorator(constructor: Function){
  console.log(constructor.name)
  if(constructor.name === "User"){
    console.log("Criando usuário")
  }
}

@classDecorator
class User {
  name

  constructor(name: string){
    this.name = name
  }
}

const paulo = new User("Paulo")

console.log(paulo)