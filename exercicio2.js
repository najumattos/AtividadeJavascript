// Código com problema: três funções que fazem coisas parecidas com o array (duplicação de lógica).
// Sua tarefa: criar UMA função genérica que receba o array e uma função de transformação (alta ordem)
// e use essa função para "dobrar", "ao quadrado" e "formatar" sem repetir o loop.

function ProcessarOperacao(array, tipoOperacao) {
  let resposta = [];
  resposta = tipoOperacao == "dobrarArray" ? dobrarArray(array) : resposta;
  resposta = tipoOperacao == "aoQuadradoArray" ? aoQuadradoArray(array) : resposta;
  resposta = tipoOperacao == "formatarArray" ? formatarArray(array) : resposta;
  return resposta;
}

function dobrarArray(array) {
  let arrayDobrada = [];
  for (let i = 0; i < array.length; i++) {
    arrayDobrada.push(array[i] * 2);
  }
  return arrayDobrada;
}

const aoQuadradoArray = (array) => array.map((numero) => numero * numero);

function formatarArray(array) {
  return array.map(function (n) {
    return "Número: " + n;
  });
}
