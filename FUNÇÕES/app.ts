// VOID

const withoutReturn = (): void => {
  console.log("Essa é uma função sem retorno");
};

withoutReturn();

// FUNÇÕES COMO CALLBACK

const greeting = (name: string) => {
  return `Olá ${name}`;
};

const preGreeting = (f: (name: string) => string, userName: string) => {
  console.log("Preparando a função");
  const greet = f(userName);
  console.log(greet);
};

preGreeting(greeting, "Paulo");
preGreeting(greeting, "Gabriel");

// GENERIC FUNCTIONS

function genericFunction<T>(arr: T[]): T {
  return arr[0];
}

console.log(genericFunction([1, 2, 3]));
console.log(genericFunction(["um", "dois", "tres"]));

function mergeObjects<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObj = mergeObjects(
  { name: "Paulo Correa" },
  { job: "software developer", age: 30 }
);

console.log(newObj);

//CONSTRAINT EM GENERIC FUNCTIONS

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(22, 33))
console.log(biggestNumber("44", "22"))

//ESPECIFICAR TIPO DE ARGUMENTO

function mergeArr<T>(a: T[], b: T[]){
    return a.concat(b)
}

console.log(mergeArr([1, 2, 3], [4, 5]))
// console.log(mergeArr([1, 2, 3], ["teste", "testando"])) ADICIONAR GENERIC FUNCTION PARA ESPECIFICAR TIPO DE PARAMETRO
console.log(mergeArr<Number | String>([1, 2, 3], ["teste", "testando"]))

//PARAMETROS OPCIONAIS

const modernGreeting = (name: string, greet?: string) => {
    if(greet){
       return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Paulo"))
console.log(modernGreeting("Paulo", "Sr."))

//PARAMETRO DEFAULT

const somaDefault = (n: number, m = 5) => {
    return m * n
}

console.log(somaDefault(10))
console.log(somaDefault(10, 7))

//PARAMETRO UNKNOWN

const doSomething = (x: unknown) => {
    if(Array.isArray(x)){
        console.log(x[0])
    } else if (typeof x === "number"){
        console.log("x é um número")
    }
}

doSomething([1, 2, 3])
doSomething(4)

//TIPO NEVER

const showMessageError = (msg: string): never => {
    throw new Error(msg)
}

// showMessageError("Algum erro!") COMENTADO PARA NÃO PARAR EXECUÇÃO DOS PRÓXIMOS CÓDIGOS

// REST PARAMETERS

const sumAll = (...n: number[]) =>{
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 234, 656))
// console.log(sumAll("5, 234, 656")) ERRO POIS SÓ ACEITA NÚMEROS