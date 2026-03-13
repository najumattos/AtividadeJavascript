// Código com problema: três funções que fazem coisas parecidas com o array (duplicação de lógica).
// Sua tarefa: criar UMA função genérica que receba o array e uma função de transformação (alta ordem)
// e use essa função para "dobrar", "ao quadrado" e "formatar" sem repetir o loop.

function dobrarArray(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push(array[i] * 2);
    }
    return resultado;
}

function aoQuadradoArray(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push(array[i] * array[i]);
    }
    return resultado;
}

function formatarArray(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push('Número: ' + array[i]);
    }
    return resultado;
}
