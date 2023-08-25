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