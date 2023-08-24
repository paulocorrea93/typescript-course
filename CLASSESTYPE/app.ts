//92 a 113

// campos de classes

class User {
  name!: string;
  age!: number;
}

const Paulo = new User

Paulo.name = "Paulo"

console.log(Paulo)

// constructor

class NewUser {
  name
  age

  constructor(name: string, age: number){
    this.age = age
    this.name = name
  }
}

const joao = new NewUser("João", 30)

console.log(joao)

// const pedro = new NewUser(20, 30) **APRESENTA ERRO, POIS OS PARAMETROS PASSADOS DEVEM RESPEITAR O TIPO**