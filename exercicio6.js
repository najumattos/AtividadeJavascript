// Código com problema: ao montar a lista, o formato de cada linha ("  - Item: X") está repetido no for.
// Sua tarefa: criar UMA função (ex.: montarLinha ou formatarItem) que receba o texto do item
// e retorne a string no formato "  - Item: texto". Use essa função dentro do for em listarItens.

function adicionarItem(lista, texto) {
    lista.push(texto);
}

function limparLista(lista) {
    lista.length = 0;
}

function listarItens(lista) {
    if (lista.length === 0) {
        return '(lista vazia)';
    }
    var saida = '';
    for (var i = 0; i < lista.length; i++) {
        saida += '  - Item: ' + lista[i] + '\n';
    }
    return saida;
}
