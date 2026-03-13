// Código com problema: a regra "formatar número como R$ X,XX" (com 2 casas e vírgula) está duplicada.
// Sua tarefa: criar UMA função formatarMoeda(valor) que receba um número e retorne a string "R$ X,XX"
// (ou "R$ 0,00" se o valor for inválido). Use formatarMoeda dentro de exibirPreco e exibirTotal.

function exibirPreco() {
  const valor = ObterElemento("precoUnit");
  const valorFormatado = FormatarMoeda(valor);
  return "Preço: R$ " + valorFormatado;
}

function exibirTotal() {
  const valor = CalcularTotal();
  return "Total: R$ " + FormatarMoeda(valor);
}

function FormatarMoeda(valor) {
  if (isNaN(valor) || valor === null) {
    valor = 0;
  }
  const fixo = valor.toFixed(2);
  const comVirgula = fixo.replace(".", ",");
  return comVirgula;
}

const ObterElemento = (valor) =>
  parseFloat(document.getElementById(valor).value);

function CalcularTotal() {
  const preco = ObterElemento("precoUnit");
  const qtd = ObterElemento("qtd");
  const valor = preco * qtd;
  return valor;
}

/* Não foi necessario alterar o HTML */
