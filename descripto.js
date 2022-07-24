function botaoDescriptografar() {
    var textoDescriptografado = descriptografando(inputTexto.value);
    outputTexto.value = textoDescriptografado;
}

function descriptografando(stringCriptografada) {
    stringCriptografada = stringCriptografada.toLowerCase();
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for (let cont = 0; cont < matrizCodigo.length; cont++) {
        if (stringCriptografada.includes(matrizCodigo[cont][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[cont][0], matrizCodigo[cont][1]);

        }
    }
    stringDescriptografada = stringCriptografada;
    return stringDescriptografada;
}