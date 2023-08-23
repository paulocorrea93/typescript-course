// 1 de 9 - GENERICS

const showData = <T>(arg: T) => {
    return `o dado é: ${arg}`
}

console.log(showData(10))
console.log(showData("Dez"))
console.log(showData(false))
console.log(showData([1, 2, 3]))

// 2 de 9 constraint em generics

const showProductName = <T extends {name: string}> (obj: T) => {
    return `o nome do produto é: ${obj.name}`
}

console.log(showProductName({name: "roupa", size: "gg"}))
console.log(showProductName({name: "porta", color: "branca"}))
// console.log(showProductName({nOfShirts: 50})) APRESENTA ERRO, POIS O OBJETO PRECISA TER A PROPRIEDADE 'NAME'

// 3 de 9 generics com interface

interface myObject <T, U, Q> {
    name: string
    engine: T
    wheels: U
    color: Q
}

type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar: Car = {name: "Fiesta", engine: 1.0, wheels: 5, color: "grafite"}
const myPen: Pen = {name: "BIC", engine: false, wheels: false, color: "azul"}

console.log(myCar)
console.log(myPen)