// 1 de 9 - GENERICS

const showData = <T>(arg: T) => {
    return `o dado é: ${arg}`
}

console.log(showData(10))
console.log(showData("Dez"))
console.log(showData(false))
console.log(showData([1, 2, 3]))