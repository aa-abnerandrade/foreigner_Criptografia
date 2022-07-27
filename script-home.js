// ================================= Capturando texto inserido no HTML
const inputTexto = document.querySelector("#TextoEntrada");
const outputTexto = document.querySelector("#MensagemSaidaInicial");
console.log(inputTexto.value); // Console
console.log(outputTexto.value); // Console


function copiarResultado() {
    var textoCopiado = document.querySelector("#MensagemSaidaFinal");
    textoCopiado = textoCopiado.value;
    console.log(textoCopiado); // Console
    navigator.clipboard.writeText(textoCopiado);

}






