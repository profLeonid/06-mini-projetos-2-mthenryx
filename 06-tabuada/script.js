"use scrict"

function calcularAdicao(numero){
    let listaAdicao = []

    for(let i = 1; i <= 10; i++){
        listaAdicao.push(Number(numero) + i)
    }

    return listaAdicao
}

function calcularSubtracao(numero){
    let listaSubtracao = []

    for(let i = 1; i <= 10; i++){
        listaSubtracao.push(Number(numero) - i)
    }

    return listaSubtracao
}

function calcularMultiplicacao(numero){
    let listaMultiplicacao = []

    for(let i = 1; i <= 10; i++){
        listaMultiplicacao.push(Number(numero) * i)
    }

    return listaMultiplicacao
}

function calcularDivisao(numero){
    let listaDivisao = []

    for(let i = 1; i <= 10; i++){
        listaDivisao.push(Number(numero / i).toFixed(2))
    }

    return listaDivisao
}

function criarLinha(num, add, sub, mult, divisao){
    const tbody = document.getElementById("tbody")
    const tr    = document.createElement("tr")

    const tdNum     = document.createElement("td")
    const tdAdd     = document.createElement("td")
    const tdSub     = document.createElement("td")
    const tdMult    = document.createElement("td")
    const tdDivisao = document.createElement("td")

    tdNum.textContent     = num
    tdAdd.textContent     = add
    tdSub.textContent     = sub
    tdMult.textContent    = mult
    tdDivisao.textContent = divisao

    tr.replaceChildren(tdNum, tdAdd, tdSub, tdMult, tdDivisao)
    tbody.appendChild(tr)
}

function handClick(){
    const numero = Number(document.getElementById("numero").value)

    const listaNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const listaAdicao        = calcularAdicao(numero)
    const listaSubtracao     = calcularSubtracao(numero)
    const listaMultiplicacao = calcularMultiplicacao(numero)
    const listaDivisao       = calcularDivisao(numero)

    document.getElementById("tbody").replaceChildren()

    for(let i = 0; i <= 9; i++){
        criarLinha(listaNumero[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }
}