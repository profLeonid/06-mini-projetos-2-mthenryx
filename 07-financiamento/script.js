"use scrict"

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

    tr.replaceChildren(tdMes, tdParcelas, tdJurosMes, tdTotalMes, tdSaldoDevedor)
    tbody.appendChild(tr)
}

function handClick(){

}

