listaOperadores = document.querySelectorAll('.botao-func')
listaNumeros = document.querySelectorAll('.botao-numero')
tela = document.querySelector('.resultado')
result = document.querySelector('.botao-result')
reset = document.querySelector('.botao-reset')
del = document.querySelector('.botao-del')
memoria = []

// FUNÇÃO QUE IDENTIFICA O NÚMERO E IMPRIME NA TELA
listaNumeros.forEach(elemento => {
    elemento.addEventListener('click', evento =>{
        
        if(tela.innerHTML === '0'){
            tela.innerHTML = elemento.value
        }
        else{
            tela.innerHTML += elemento.value
        }
    })
});

// FUNÇÃO QUE IDENTIFICA E ARMAZENA OS VALORES E OPERADORES, ALÉM DE PROCESSAR AS CONTAS
listaOperadores.forEach(elemento => {
    elemento.addEventListener('click', ()=>{

        var operador = elemento.value
        if(tela.innerHTML != 0){
            memoria.push(parseFloat(tela.innerHTML))

            if(operador === '+'){
                memoria.push(operador)
            }
            else if(operador === '-'){
                memoria.push(operador)
            }
            else if(operador === '/'){
                memoria.push(operador)
            }
            else if(operador === 'x'){
                memoria.push(operador)
            }
        }
        
        tela.innerHTML = 0

        if(memoria.length > 2){
            var operadorMemoria = memoria[1]
            if(operadorMemoria === '+'){
                memoria[0] += memoria[2]
            }
            else if(operadorMemoria === '-'){
                memoria[0] -= memoria[2]
            }
            else if(operadorMemoria === 'x'){
                memoria[0] *= memoria[2]
            }
            else if(operadorMemoria === '/'){
                memoria[0] /= memoria[2]
            }

            memoria.splice(1,2)
        } 
    })
});

// FUNCIONALIDADE DO BOTÃO DE DELETE
del.addEventListener('click', ()=>{
    var tamanho = tela.innerHTML.length
    if(tamanho > 1){
        tela.innerHTML = tela.innerHTML.substr(0,tamanho-1)
    }
    else{
        tela.innerHTML = 0
    }
})

// FUNCIONALIDADE DO BOTÃO DE RESET
reset.addEventListener('click', ()=>{
    tela.innerHTML = 0
    memoria = []
    console.log(tela.innerHTML, memoria)
})

// FUNCIONALIDADE DO BOTÃO DE RESULTADO
result.addEventListener('click', ()=>{
    if(memoria[1] === '+'){
        tela.innerHTML = memoria[0] + parseFloat(tela.innerHTML)
    }
    else if(memoria[1] === '-'){
        tela.innerHTML = memoria[0] - parseFloat(tela.innerHTML)
    }
    else if(memoria[1] === 'x'){
        tela.innerHTML = memoria[0] * parseFloat(tela.innerHTML)
    }
    else if(memoria[1] === '/'){
        tela.innerHTML = memoria[0] / parseFloat(tela.innerHTML)
    }
    
    memoria = []
})