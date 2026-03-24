"use scrict"

function criarListaNumeros(quantidade){
    let listaNumero = []

    for(let i = 1; i <= quantidade; i++){
        listaNumero.push(i)
    }

    return listaNumero
}

function criarListaPares(quantidade){
    let listaPares = []

    for(let i = 1; i <= quantidade; i++){
        listaPares.push(i * 2)
    }

    return listaPares
}

function criarListaImpares(quantidade){
    let listaImpares = []

    for(let i = 1; i <= quantidade; i++){
        listaImpares.push((i * 2) - 1)
    }

    return listaImpares
}

function criarListaMult(quantidade){
    let listaMult = []

    for(let i = 1; i <= quantidade; i++){
        listaMult.push(i * 5)
    }

    return listaMult
}

function criarListaPotencia(quantidade){
    let listaPotencia = []

    for(let i = 1; i <= quantidade; i++){
        listaPotencia.push(2 ** (i - 1))
    }

    return listaPotencia
}

console.log(criarListaNumeros(5))
console.log(criarListaPares(5))
console.log(criarListaImpares(5))
console.log(criarListaMult(5))
console.log(criarListaPotencia(5))