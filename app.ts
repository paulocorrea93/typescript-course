// FUNÇÕES ANONIMAS TYPESCRIPT

// setTimeout(() => {
//   const sallary: number = 1000;

//   // console.log(parseFloat(sallary))
//   console.log(sallary);
// }, 2000);

// TIPOS DE OBJETOS

function passCoordinades(coord: { x: number; y: number }) {
  console.log(`X coordinades: ${coord.x}`);
  console.log(`Y coordinades: ${coord.y}`);
}

const objCoord = { x: 384, y: 948 };

passCoordinades(objCoord);

//PROPRIEDADES OPICIONAIS

let showNumbers = (a: number, b: number, c?: number) => {
  console.log(`"A" = ${a}`);
  console.log(`"B" = ${b}`);
  console.log(`"C" = ${c}`);
};

showNumbers(1, 2);

// VALIDAÇÃO TYPESCRIPT

let advancedGreetings = (firstName: string, lastName?: string) => {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}, tudo bem?`;
};

console.log(advancedGreetings("Paulo", "Correa"));
console.log(advancedGreetings("Gabriel"));

// UNION TYPE

let showBalance = (balance: string | number) => {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance("100")
showBalance(500)

let showuserRole = (role: boolean | string) => {
    if(typeof role === "boolean"){
        return `usuário não aprovado`
    }
    return `a função do usuário é ${role}`
}

console.log(showuserRole("Admin"))
console.log(showuserRole(false))

// TYPE ALIAS

type ID = string | number

let showId = (id: ID) => {
    console.log(`o id é: ${id}`)
}

showId(1)
showId("500")