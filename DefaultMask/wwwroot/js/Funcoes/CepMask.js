import { TextoValido } from "/js/Funcoes/TextoValido.js"
import { SetSymbol } from "/js/Funcoes/SetSymbol.js"

let CepMask = function () {

    let texto = TextoValido("[0-9]", $(this).val());    
    texto = SetSymbol("-", 3, texto);    

    $(this).val(texto);
}
export { CepMask }