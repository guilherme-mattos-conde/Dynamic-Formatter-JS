const texto = document.querySelector('#texto')
const input = document.querySelector('#input')

formataTitulo()

input.addEventListener('focusin', () => {
    if (input.value === ""){
        formataTexto()
    }
})
input.addEventListener('focusout', () => {
    if (input.value === ""){
        formataTitulo()
    }
})
input.addEventListener('input', () => {
    texto.textContent = input.value
    formataTexto()
})

function formataTitulo(titulo) {
    texto.textContent = 'tx'
    texto.classList.remove('texto')
    texto.classList.add('titulo')
}
function formataTexto() {
    texto.classList.remove('titulo')
    texto.classList.add('texto')
    if (input.value === ""){
        texto.textContent = '[ tx ]'
    }
}