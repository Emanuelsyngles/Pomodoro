const html = document.querySelector('html')
const focobtn = document.querySelector('.app__card-button--foco')
const curtobtn = document.querySelector('.app__card-button--curto')
const longobtn = document.querySelector('.app__card-button--longo')
const fundo = document.querySelector('.app__image')

focobtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    fundo.setAttribute('src','../imagens/foco.png')
})

curtobtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    fundo.setAttribute('src', '../imagens/descanso-curto.png')
})

longobtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    fundo.setAttribute('src', '../imagens/descanso-longo.png')
})
