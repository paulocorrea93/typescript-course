// VOID

const withoutReturn = (): void => {
  console.log("Essa é uma função sem retorno");
};

withoutReturn();


// FUNÇÕES COMO CALLBACK

const greeting = (name: string) => {
    return `Olá ${name}`
}

const preGreeting = (f: (name: string) => string, userName: string) => {
    console.log("Preparando a função")
    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "Paulo")
preGreeting(greeting, "Gabriel")