const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const longobtn = document.querySelector('.app__card-button--longo')
const iniciarOuPausarbtn = document.querySelector('#start-pause span')
const buttonimg = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')

const fundo = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const btns = document.querySelectorAll('.app__card-button')
const musicaFoco = document.querySelector('#alternar-musica')
const startPausebtn = document.querySelector('#start-pause')


const musica = new Audio('../sons/luna-rise-part-one.mp3') 
musica.loop = true
musica.volume = '0.3'

const audioIniciar = new Audio('../sons/play.wav')

const parar = new Audio('../sons/pause.mp3')

const final = new Audio('../sons/beep.mp3')

let tempoDecorridoEmSegundos = 1500
let intervaloId = null

musicaFoco.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focobtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focobtn.classList.add('active')
})

curtobtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtobtn.classList.add('active')
})

longobtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longobtn.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    btns.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    fundo.setAttribute('src', `../imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superficie <br>
            <strong class="app__title-strong">Faça uma pausa longa</strong>`
            break
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        //final.play()
        alert('tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPausebtn.addEventListener('click', iniciar)

function iniciar() {
    if(intervaloId) {  
        zerar()
        parar.play()
        return
    }
    audioIniciar.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarbtn.textContent = "Pausar"
    buttonimg.setAttribute("src", "../imagens/pause.png")
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarbtn.textContent = 'Começar'
    buttonimg.setAttribute("src", "../imagens/play_arrow.png")
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()