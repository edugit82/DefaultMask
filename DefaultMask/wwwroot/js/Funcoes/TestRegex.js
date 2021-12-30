let TestRegex = function (strregex, texto) {
    const regex = new RegExp(strregex);
    return regex.test(texto);
}

export {TestRegex}