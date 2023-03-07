listaOperadores = document.querySelectorAll('.botao-func')
listaNumeros = document.querySelectorAll('.botao-numero')
tela = document.querySelector('.resultado')
result = document.querySelector('.botao-result')

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

listaOperadores.forEach(elemento => {
    elemento.addEventListener('click', ()=>{
        if(elemento.value === '+'){
            operador = '+'
        }
        else if(elemento.value === '-'){
            operador = '-'
        }
        else if(elemento.value === '/'){
            operador = '/'
        }
        else if(elemento.value === 'x'){
            operador = 'x'
        }
        
        n1 = parseFloat(tela.innerHTML)
        tela.innerHTML = 0
    })
});

result.addEventListener('click', ()=>{
    n2 = parseFloat(tela.innerHTML)
    geraResultado(n1, operador, n2)
})

function geraResultado(n1, operador, n2){
    if(operador === '+'){
        tela.innerHTML = n1 + n2
    }
    else if(operador === '-'){
        tela.innerHTML = n1- n2    
    }
    else if(operador === 'x'){
        tela.innerHTML = n1 * n2
    }
    else if(operador === '/'){
        tela.innerHTML = n1 / n2
    }
}
