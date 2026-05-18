let numeroAleatorio = Math.floor(Math.random() * 11);

function verificarNumero() {
    let numeroUsuario = document.getElementById("numeroUsuario").value;
    numeroUsuario = Number(numeroUsuario);

    if (numeroUsuario == numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns! Você acertou!";
        document.getElementById("resultado").style.setProperty("background-color", "lightgreen");
    } 
    else if (numeroUsuario > numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Você errou! O número digitado é maior que o número sorteado.";
        document.getElementById("resultado").style.setProperty("background-color", "red");
    } 
    else {
        document.getElementById("resultado").innerHTML = "Você errou! O número digitado é menor que o número sorteado.";
        document.getElementById("resultado").style.setProperty("background-color", "red");
    }
}