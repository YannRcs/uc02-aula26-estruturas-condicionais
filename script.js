const dividendo = Number(prompt("Informe um para o dividendo:"))
const divisor = Number(prompt("Informe outro valor para o divisor:"))

console.log(`Dividendo ${dividendo}`)
console.log(`Divisor ${divisor}`)


let resultado = 0

if (divisor != 0) {
    resultado = dividendo / divisor
}
else {
    resultado = 1
}

const mensagem = `A divisão de ${dividendo} por ${divisor} é igual a ${resultado}`


const elementoMensagem = document.createElement("h1")

elementoMensagem.textContent = mensagem
document.body.appendChild(elementoMensagem)
