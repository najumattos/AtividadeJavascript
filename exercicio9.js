// Código com problema: o "loop de filtrar" (percorrer, testar condição, push no resultado) está duplicado.
// Sua tarefa: criar filtrarArray(array, criterio) onde criterio é uma função que recebe um item e retorna true/false.
// Dentro de filtrarArray: um for que percorre o array e adiciona ao resultado só os itens em que criterio(item) é true.
// Depois: filtrarPares(arr) chama filtrarArray(arr, function(n) { return n % 2 === 0; });
//         filtrarMaioresQue5(arr) chama filtrarArray(arr, function(n) { return n > 5; });

const filtrarPares = (array) => {
  return FiltrarArray(array, function (n) {
    return n % 2 === 0;
  });
};

function filtrarMaioresQue5(array) {
  return FiltrarArray(array, function (n) {
    return n > 5;
  });
}

function FiltrarArray(array, criterio) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (criterio(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}
function Criterio(array) {
  /* 
    FUNÇÃO ANONIMA
    Na função filtrarPares, existe uma regra: function(n) { return n % 2 === 0; }.
    Essa regra é enviada para dentro de FiltrarArray(array, criterio) atraves do parametro criterio
    Dentro do FOR em FiltrarArray() function(n) vira criterio(array[i])
    CRITERIO RECEBE UMA FUNÇÃO, ou seja

    Se o criterio vem de filtrarPares, criterio vale "n % 2 === 0", onde N vale array[i]
    criterio(array[i]) = function filtrarMaioresQue5(array) { return FiltrarArray(array, function(n){return n > 5});}
      */
}

/* Não foi necessario alterar o HTML */
