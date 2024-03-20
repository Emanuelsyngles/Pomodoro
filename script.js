const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const longobtn = document.querySelector('.app__card-button--longo')
const fundo = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const strong = document.querySelector('.app__title-strong')

focobtn.addEventListener('click', () => {
    alterarContexto('foco')
})

curtobtn.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longobtn.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    fundo.setAttribute('src', `../imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,`
            strong.innerHTML = `mergulhe no que importa.`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?`
            strong.innerHTML = `Faça uma pausa curta`
            break
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à supercifie`
            strong.innerHTML = `Faça uma pausa longa.`
            break
        default:
            break;
    }
}
