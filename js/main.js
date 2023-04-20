const texto = document.querySelector('#texto')
const input = document.querySelector('#input')

texto.textContent = 'Texto'

input.addEventListener('input', () => {

    texto.textContent = input.value

    if (input.value === ""){
        texto.textContent = 'Texto'
    }
})