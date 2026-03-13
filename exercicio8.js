// Código com problema: a regra "formatar número como R$ X,XX" (com 2 casas e vírgula) está duplicada.
// Sua tarefa: criar UMA função formatarMoeda(valor) que receba um número e retorne a string "R$ X,XX"
// (ou "R$ 0,00" se o valor for inválido). Use formatarMoeda dentro de exibirPreco e exibirTotal.

function exibirPreco() {
    var valor = parseFloat(document.getElementById('precoUnit').value);
    if (isNaN(valor)) {
        return 'R$ 0,00';
    }
    var fixo = valor.toFixed(2);
    var comVirgula = fixo.replace('.', ',');
    return 'Preço: R$ ' + comVirgula;
}

function exibirTotal() {
    var preco = parseFloat(document.getElementById('precoUnit').value);
    var qtd = parseInt(document.getElementById('qtd').value, 10) || 0;
    var valor = preco * qtd;
    if (isNaN(valor)) {
        return 'Total: R$ 0,00';
    }
    var fixo = valor.toFixed(2);
    var comVirgula = fixo.replace('.', ',');
    return 'Total: R$ ' + comVirgula;
}
