var contagem = 0;
function aumentarContagem() {
    var texto = document.getElementById('texto-contagem');
    contagem++;
    console.log(contagem);
    texto.textContent = contagem;
}