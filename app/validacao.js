function verificaChute (chute) {
    const numero = +chute

   if (chute.toUpperCase() == 'GAME OVER.') {
        document.body.innerHTML = `
        <div class="game-over-mensagem">GAME OVER</div> 
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.classList.add('game-over-corpo')
        
        return
    }
    else if (chuteValidade(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (tamanhoPermitido(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: o numero precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroAleatorio){
        document.body.innerHTML = `
        <h2 class="titulo-principal">Voce acertou!</h2>
        <h3>O numero secreto era ${numeroAleatorio}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é <mark class="mensagem__marcação">menor</mark> <i class="fa-solid fa-arrow-down-long"></i> </div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é <mark class="mensagem__marcação">maior</mark> <i class="fa-solid fa-arrow-up-long"></i> </div>`
    }
}

function chuteValidade(numero) {
    return Number.isNaN(numero)
}

function tamanhoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento =>{
    if (evento.target.id=='jogar-novamente') {
        window.location.reload()
    }
})
