"use strict"

function calcularParcelas(valorTotal, numeroParcelas){
    return (valorTotal / numeroParcelas)
}

function calcularSaldoDevedor(valorTotal, amortizacao, numeroParcelas){
    let resultado = []
    let valor = valorTotal

    for(let i = 1; i <= numeroParcelas; i++){
        valor = valor - amortizacao
        resultado.push(Number(valor.toFixed(2)))
    }

    return resultado
}

function calcularJurosMes(listaSaldoDevedor, taxaJuros, valorTotal){
    let resultado = []
    let saldoAnterior = valorTotal

    for(let i = 0; i < listaSaldoDevedor.length; i++){
        resultado.push(saldoAnterior * (taxaJuros / 100))
        saldoAnterior = listaSaldoDevedor[i]
    }

    return resultado
}

function calcularTotalMes(amortizacao, listaJurosMes, numeroParcelas){
    let resultado = []

    for(let i = 0; i < numeroParcelas; i++){
        resultado.push(Number(amortizacao) + Number(listaJurosMes[i]))
    }

    return resultado
}

function criarLinha(mes, parcela, jurosMes, totalMes, saldoDevedor){
    const tbody = document.getElementById("tbody")
    const tr    = document.createElement("tr")

    const tdMes          = document.createElement("td")
    const tdParcelas     = document.createElement("td")
    const tdJurosMes     = document.createElement("td")
    const tdTotalMes     = document.createElement("td")
    const tdSaldoDevedor = document.createElement("td")

    tdMes.textContent          = mes
    tdParcelas.textContent     = parcela
    tdJurosMes.textContent     = jurosMes
    tdTotalMes.textContent     = totalMes
    tdSaldoDevedor.textContent = saldoDevedor

    tdJurosMes.classList.add("col-juros")
    tdTotalMes.classList.add("col-total")
    tdSaldoDevedor.classList.add("col-saldo")

    tr.replaceChildren(tdMes, tdParcelas, tdJurosMes, tdTotalMes, tdSaldoDevedor)
    tbody.appendChild(tr)
}

function handClick(){
    const valorInput    = document.getElementById("valor-total").value
    const taxaInput     = document.getElementById("taxa-juros").value
    const parcelasInput = document.getElementById("numero-parcelas").value

    const valorTotal     = Number(valorInput)
    const taxaJuros      = Number(taxaInput)
    const numeroParcelas = Number(parcelasInput)

    const amortizacao       = calcularParcelas(valorTotal, numeroParcelas)
    const listaSaldoDevedor = calcularSaldoDevedor(valorTotal, amortizacao, numeroParcelas)
    const listaJurosMes     = calcularJurosMes(listaSaldoDevedor, taxaJuros, valorTotal)
    const listaTotalMes     = calcularTotalMes(amortizacao, listaJurosMes, numeroParcelas)

    document.getElementById("tbody").replaceChildren()

    for(let i = 0; i < numeroParcelas; i++){
        criarLinha(i + 1, amortizacao.toFixed(2), listaJurosMes[i].toFixed(2), listaTotalMes[i].toFixed(2), listaSaldoDevedor[i].toFixed(2))
    }
}