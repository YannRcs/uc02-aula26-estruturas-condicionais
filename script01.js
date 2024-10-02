

const numeroMes = Number(prompt("Informe o número do mês: "))

let nomeMes = ""

if (numeroMes === 1) {
    nomeMes = `O mês informado ${numeroMes} é Janeiro`
}
else if (numeroMes === 2) {
    nomeMes = `O mês informado ${numeroMes} é Fevereiro`
}
else if (numeroMes === 3) {
    nomeMes = `O mês informado ${numeroMes} é Março`
}
else if (numeroMes === 4) {
    nomeMes = `O mês informado ${numeroMes} é Abril`
}
else if (numeroMes === 5) {
    nomeMes = `O mês informado ${numeroMes} é Maio`
}
else if (numeroMes === 6) {
    nomeMes = `O mês informado ${numeroMes} é Junho`
}
else if (numeroMes === 7) {
    nomeMes = `O mês informado ${numeroMes} é Julho`
}
else if (numeroMes === 8) {
    nomeMes = `O mês informado ${numeroMes} é Agosto`
}
else if (numeroMes === 9) {
    nomeMes = `O mês informado ${numeroMes} é Setembro`
}
else if (numeroMes === 10) {
    nomeMes = `O mês informado ${numeroMes} é Outubro`
}
else if (numeroMes === 11) {
    nomeMes = `O mês informado ${numeroMes} é Novembro`
}
else if (numeroMes === 12) {
    nomeMes = `O mês informado ${numeroMes} é Dezembro`
}
else {
    nomeMes = "Mês inválido"
}



// USANDO SWITCH CASE

switch (numeroMes) {
    case 1:
        nomeMes = "Janeiro"        
        break;

    case 2:
        nomeMes = "Fevereiro"        
        break;

    case 3:
        nomeMes = "Março"        
        break;

    case 4:
        nomeMes = "Abril"        
        break;

    case 5:
        nomeMes = "Maio"        
        break;  

    case 6:
        nomeMes = "Junho"        
        break;  

    case 7:
        nomeMes = "Julho"        
        break;

    case 8:
        nomeMes = "Agosto"        
        break;

    case 9:
        nomeMes = "Setembro"        
        break;

    case 10:
        nomeMes = "Outubro"        
        break;
    case 11:
        nomeMes = "Novembro"        
        break;
    case 12:
        nomeMes = "Dezembro"        
        break;
    default:
        break;
}

document.body.appendChild(document.createTextNode(nomeMes))

