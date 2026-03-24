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

function criarLinha(num, par, impar, mult, potencia){
    const tbody = document.getElementById("tbody")
    const tr    = document.createElement("tr")

    const tdNum      = document.createElement("td")
    const tdPar      = document.createElement("td")
    const tdImpar    = document.createElement("td")
    const tdMult     = document.createElement("td")
    const tdPotencia = document.createElement("td")

    tdNum.textContent      = num
    tdPar.textContent      = par
    tdImpar.textContent    = impar
    tdMult.textContent     = mult
    tdPotencia.textContent = potencia

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMult, tdPotencia)
    tbody.appendChild(tr)
}

function handClick(){
    const quantidade = Number(document.getElementById("quantidade").value)

    const listaNum      = criarListaNumeros(quantidade)
    const listaPares    = criarListaPares(quantidade)
    const listaImpares  = criarListaImpares(quantidade)
    const listaMult     = criarListaMult(quantidade)
    const listaPotencia = criarListaPotencia(quantidade)

    document.getElementById("tbody").replaceChildren()

    for(let i = 0; i < quantidade; i++){
        criarLinha(listaNum[i], listaPares[i], listaImpares[i], listaMult[i], listaPotencia[i])
    }
}
