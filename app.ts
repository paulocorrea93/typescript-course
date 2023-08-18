// FUNÇÕES ANONIMAS TYPESCRIPT

setTimeout(() => {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))
  console.log(sallary);
}, 2000);

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