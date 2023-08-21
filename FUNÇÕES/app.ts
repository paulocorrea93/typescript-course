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