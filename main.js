var listaOperadores = document.querySelectorAll('.botao-func')
var listaNumeros = document.querySelectorAll('.botao-numero')
var tela = document.querySelector('.resultado')
var result = document.querySelector('.botao-result')
var reset = document.querySelector('.botao-reset')
var del = document.querySelector('.botao-del')
var memoria = []
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

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

        if(memoria.length > 3){
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

// TOGGLE 
arr.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        var principal = document.querySelector('.container-principal')
        var cabecalho = document.querySelector('.container-cabecalho')
        var telaStyle = document.querySelector('.container-tela')
        var teclas = document.querySelector('.container-teclas')
        var botaoDel = document.querySelector('.botao-del')
        var botaoReset = document.querySelector('.botao-reset') 
        var botaoResult = document.querySelector('.botao-result')
        var body = document.querySelector('body')
        var toggleBg = document.querySelector('.tri-state-toggle')

        var toggleBtn = document.querySelectorAll('.button')

        if(index == 0){
            principal.classList.remove('container-principal2')
            principal.classList.remove('container-principal3')

            cabecalho.classList.remove('container-cabecalho2')
            cabecalho.classList.remove('container-cabecalho3')

            telaStyle.classList.remove('container-tela2')
            telaStyle.classList.remove('container-tela3')

            teclas.classList.remove('container-teclas2')
            teclas.classList.remove('container-teclas3')

            botaoDel.classList.remove('botao-del2')
            botaoDel.classList.remove('botao-del3')

            botaoReset.classList.remove('botao-reset2')
            botaoReset.classList.remove('botao-reset3')

            botaoResult.classList.remove('botao-result2')
            botaoResult.classList.remove('botao-result3')

            toggleBg.classList.remove('tri-state-toggle2')
            toggleBg.classList.remove('tri-state-toggle3')

            body.classList.remove('body2')
            body.classList.remove('body3')

            toggleBtn.forEach(element => {
                element.classList.remove('button2')
                element.classList.remove('button3')
            })
        }
        else if(index == 1){
            principal.classList.add('container-principal2')
            principal.classList.remove('container-principal3')

            cabecalho.classList.add('container-cabecalho2')
            cabecalho.classList.remove('container-cabecalho3')

            telaStyle.classList.add('container-tela2')
            telaStyle.classList.remove('container-tela3')

            teclas.classList.add('container-teclas2')
            teclas.classList.remove('container-teclas3')

            botaoDel.classList.add('botao-del2')
            botaoDel.classList.remove('botao-del3')

            botaoReset.classList.add('botao-reset2')
            botaoReset.classList.remove('botao-reset3')

            botaoResult.classList.add('botao-result2')
            botaoResult.classList.remove('botao-result3')

            toggleBg.classList.add('tri-state-toggle2')
            toggleBg.classList.remove('tri-state-toggle3')

            body.classList.add('body2')
            body.classList.remove('body3')

            toggleBtn.forEach(element => {
                element.classList.add('button2')
                element.classList.remove('button3')
            })

        }
        else{
            principal.classList.add('container-principal3')
            principal.classList.remove('container-principal2')

            cabecalho.classList.add('container-cabecalho3')
            cabecalho.classList.remove('container-cabecalho2')

            telaStyle.classList.add('container-tela3')
            telaStyle.classList.remove('container-tela2')

            teclas.classList.add('container-teclas3')
            teclas.classList.remove('container-teclas2')

            botaoDel.classList.add('botao-del3')
            botaoDel.classList.remove('botao-del2')

            botaoReset.classList.add('botao-reset3')
            botaoReset.classList.remove('botao-reset2')

            botaoResult.classList.add('botao-result3')
            botaoResult.classList.remove('botao-result2')

            toggleBg.classList.add('tri-state-toggle3')
            toggleBg.classList.remove('tri-state-toggle2')

            body.classList.add('body3')
            body.classList.remove('body2')

            toggleBtn.forEach(element => {
                element.classList.add('button3')
                element.classList.remove('button2')
            })
        }

        arr
            .filter(function (item) {
            return item != element;
            })
            .forEach((item) => {
            item.style.opacity = "0";
            });
        });
});
