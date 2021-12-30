import { TestRegex } from "/js/Funcoes/TestRegex.js"

let TextoValido = function (strregex, texto) {
    let textonovo = "";

    for (var i = 0; i < texto.length; i++) {
        if (TestRegex(strregex, texto[i])) {
            textonovo += texto[i];
        }
    }

    return textonovo;
}

export { TextoValido }