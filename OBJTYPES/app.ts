// TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE

interface Product {
  name: string,
  price: number,
  isAvailable: boolean
}

const showProductDetails = (product: Product) => {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if(product.isAvailable === true){
    console.log(`O produto está disponível`)
  } else {
    console.log(`Produto indisponivel no momento`)
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 29.99,
  isAvailable: true
}

showProductDetails(shirt)

showProductDetails({name: "Tênis", price: 129.99, isAvailable: false})