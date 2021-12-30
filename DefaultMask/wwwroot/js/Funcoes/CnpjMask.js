import { TextoValido } from "/js/Funcoes/TextoValido.js"
import { SetSymbol } from "/js/Funcoes/SetSymbol.js"

let CnpjMask = function () {
    let texto = $(this).val();
        
    texto = texto.replace("/0001-", "");
    texto = TextoValido("[0-9]", texto);
    texto = SetSymbol("-", 2, texto);

    if (texto.indexOf("-") > -1)
    {
        let traco = texto.split("-");
        let num = parseInt(traco[0], 0);
        texto = num.toLocaleString("pt-BR") + "/0001-" + traco[1];
    }    

    $(this).val(texto);
}
export { CnpjMask }