document.querySelector('#logoLogin').addEventListener('click', (e) => {
    if(campoDeInformacoes.style.display === "block"){
        campoDeInformacoes.style.display = "none"
    } else{
        campoDeInformacoes.style.display = "block"
    }
})