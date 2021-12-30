import { TextoValido } from "/js/Funcoes/TextoValido.js"
import { SetSymbol } from "/js/Funcoes/SetSymbol.js"

let RGMask = function ()
{
    let texto = $(this).val();

    texto = TextoValido("[0-9]", texto);
    texto = SetSymbol("-", 1, texto);

    if (texto.indexOf("-") > -1)
    {
        let _split = texto.split("-");
        let num = parseInt(_split[0]);
        texto = num.toLocaleString() + "-" + _split[1];
    }

    $(this).val(texto);
}
export { RGMask }