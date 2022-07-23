
const inputTexto = document.querySelector("#TextoEntrada");
const outputTexto = document.querySelector("#MensagemSaida");
console.log(inputTexto.value);
console.log(outputTexto.value);

function botaoCriptografar(){
    const textoCriptografado = criptografando(inputTexto.value) ;
    outputTexto.value = textoCriptografado
    outputTexto.style.backgroundImage="none"
}

function criptografando(stringCriptografada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let cont=0; cont < matrizCodigo.length; cont++) {
        if(stringCriptografada.includes(matrizCodigo[cont][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[cont][0], matrizCodigo[cont][1])
        }
    return stringCriptografada    
    
    }
}