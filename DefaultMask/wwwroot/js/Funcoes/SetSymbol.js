let SetSymbol = function (symbol, pos, texto) {
    let arr = [];

    for (var i = 0; i < texto.length; i++) {
        arr.push(texto[i]);
    }

    if (texto.length > pos) {
        arr.splice(texto.length - pos, 0, symbol);
    }

    return arr.join('');
}

export { SetSymbol}