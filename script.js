// Ajustando o tamanho do brower
var altura
var largura
var vidas = 1
var tempo = 15

var tempoCriarMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
  tempoCriarMosquito = 1500

}else if(nivel === 'dificil'){
  tempoCriarMosquito = 1000

}else if(nivel === 'mtdificil'){
  tempoCriarMosquito = 750
}

function ajustaTamanho(){
   altura = window.innerHeight
   largura = window.innerWidth
}

ajustaTamanho()

//Controle de tempo
var cronometro = setInterval(function(){
  tempo -= 1

  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }

  document.getElementById('cronometro').innerHTML = tempo
}, 1000)

// Posição randomica
function posicaoRandominca(){

  // Removendo o mosquito anterior
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    // Controle de Vidas
    if(vidas > 3){
      //Game Over
      window.location.href = 'fim_do_jogo.html'
    } 
    //Removando vidas
    else{
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
      vidas++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90
  
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  var mosquito = document.createElement('img')
  mosquito.src = './imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'

  //acertou o mosquito
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito)

}

// Tamanho Aleatorio
function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 3)

  switch(classe){
    case 0:
      return 'mosquito1'

    case 1:
      return 'mosquito2'

    case 2:
      return 'mosquito3'
  }
}

// Lado Aleatorio

function ladoAleatorio(){
  var classe = Math.floor(Math.random() * 2)

  switch(classe){
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'
  }
}