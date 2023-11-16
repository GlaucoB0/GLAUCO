const inNome = document.getElementById("inNome")
const inAltura = document.getElementById("inAltura")
const rbMasculino = document.getElementById("rbMasculino")
const rbFeminino = document.getElementById("rbFeminino")
const outResposta = document.getElementById("outResposta")

const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener('click', function(){
    let nome = inNome.value;
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)
    console.log(nome, masculino, feminino, altura)

    if(nome === '' || (masculino === false && feminino === false)){
        alert('por favor, informe seu nome, e selecione o sexo...')
        inNome.focus()
        return
    }
    if(altura <= 0 || isNaN(altura)){
        alert("Por favor, sua altura")
        inAltura.focus()
        return
    }
    let peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }
    if(feminino){
        peso = 21 * Math.pow(altura, 2)
    }

    //Atribuir texto de 3 maneiras
    outResposta.textContent = `${nome}, Seu peso ideal é: ${peso}`
})
btnLimpar.addEventListener('click', function(){
    location.reload()
})
