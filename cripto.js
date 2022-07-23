function botaoCriptografar(){
    console.log("1 texto descriptografado é", inputTexto.value); // Console
    var textoCriptografado = criptografando(inputTexto.value) ;
    outputTexto.value = textoCriptografado
    outputTexto.style.backgroundImage="none"
    console.log("a variavel textoCriptografado é ", textoCriptografado);
}

function criptografando(stringDescriptografada) {
    stringDescriptografada = stringDescriptografada.toLowerCase();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    console.log("2 texto descriptografado é", stringDescriptografada);

    for (let cont =  0; cont < matrizCodigo.length; cont++) {
        console.log("Tamanho de matriz codigo ", matrizCodigo.length); //Console
        if(stringDescriptografada.includes(matrizCodigo[cont][0])) {
            console.log(matrizCodigo[cont][0]); // Console
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[cont][0], matrizCodigo[cont][1]);
        }
        console.log("Passo a passo String Criptograda: ", stringDescriptografada); // Console
    }
    stringCriptografada = stringDescriptografada;
    return stringCriptografada; 
}