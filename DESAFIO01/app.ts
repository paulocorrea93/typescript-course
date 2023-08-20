// 1- criar função para receber review de usuário
// 2- as possibilidades são number e boolean
// 3- serão enviados números (notas) de 1 a 5
// 4- prever uma mensagem para cada nota
// 5- caso seja false, retornar mensagem para enviar nota de 1 a 5


const showReview = (review: number | boolean) =>{
    if(review === 1){
        console.log(`Não gostei e não recomendo.`)
    } else if(review === 2){
        console.log(`Poderia ser melhor.`)
    } else if(review === 3){
        console.log(`Gostei, mas com ressalvas.`)
    } else if(review === 4){
        console.log(`Muito bom, recomendo.`)
    } else if(review === 5){
        console.log(`Excelente, merece o oscar de melhor filme.`)
    } else {
        console.log(`Por favor, de uma nota de 1 a 5 para o filme.`)
    }
}

showReview(1)
showReview(2)
showReview(3)
showReview(4)
showReview(5)
showReview(false)