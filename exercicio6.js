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
    return "(lista vazia)";
  }
  let saida = "";

  for (let i = 0; i < lista.length; i++) {
    saida += MontarLinha(lista[i]);
  }
  return saida;
}
const MontarLinha = (item) => `  - Item: ${item} \n`;

/*  Pra esse exercicio não foi necessario alterar o html  */
