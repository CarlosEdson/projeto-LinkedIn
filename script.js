document.querySelector('#logoLogin').addEventListener('click', () => {
    if(campoDeInformacoes.style.display === "block"){
        campoDeInformacoes.style.display = "none"
    } else{
        campoDeInformacoes.style.display = "block"
    }
})