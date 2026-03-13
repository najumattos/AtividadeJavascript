// Código com problema: o "loop de filtrar" (percorrer, testar condição, push no resultado) está duplicado.
// Sua tarefa: criar filtrarArray(array, criterio) onde criterio é uma função que recebe um item e retorna true/false.
// Dentro de filtrarArray: um for que percorre o array e adiciona ao resultado só os itens em que criterio(item) é true.
// Depois: filtrarPares(arr) chama filtrarArray(arr, function(n) { return n % 2 === 0; });
//         filtrarMaioresQue5(arr) chama filtrarArray(arr, function(n) { return n > 5; });

function filtrarPares(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

function filtrarMaioresQue5(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}
