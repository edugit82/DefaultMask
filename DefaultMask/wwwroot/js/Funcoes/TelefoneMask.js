import { TextoValido } from "/js/Funcoes/TextoValido.js"
import { SetSymbol } from "/js/Funcoes/SetSymbol.js"

let TelefoneMask = function () {

    let texto = TextoValido("[0-9]", $(this).val());
    if (texto.length >= 4) {
        texto = SetSymbol("-", 4, texto);
    }

    if (texto.length >= 2) {
        texto = "(" + texto;
        texto = SetSymbol(") ", texto.length - 3, texto);
    }

    $(this).val(texto);
}
export { TelefoneMask }