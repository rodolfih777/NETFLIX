
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligarsom)
//parte do codigo para ligar o som//
function ligarsom() {
    video.muted = false
}
//Para mostrar o Modal//
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)
function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

//função audio//


window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}


