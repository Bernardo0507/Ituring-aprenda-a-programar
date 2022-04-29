let produtoA = { "nome": "camiseta", "valor": 100.00, "internacional": true };
let produtoB = { "nome": "perfume", "valor": 200.00, "internacional": true };
let produtoC = { "nome": "sandália", "valor": 120.00, "internacional": false };

function calcularimposto(produto) {
    if (produto.internacional) {
        let valorcomimposto = produto.valor + (produto.valor * 0.2)
        console.log('é internacional')
        console.log('o valor do produto é:', valorcomimposto)
    } else {
        let valorcomimposto = produto.valor + (produto.valor * 0.12)
        console.log('é nacional')
        console.log('o valor do prodiuto é:', valorcomimposto)
    }
}
// calcularimposto(produtoA)
var arrayproduto = [
    produtoA, produtoB, produtoC
]
console.log(arrayproduto)
for (let index = 0; index < arrayproduto.length; index++) {
    //console.log(arrayproduto[index])
    calcularimposto(arrayproduto [index])
}

