// Código com problema: em cada função você repete (1) ler o valor do input e (2) mostrar o resultado no #resultado.
// Sua tarefa: criar lerNumero() que retorna o número do input (ou 0 se estiver vazio/inválido)
// e mostrarResultado(valor, texto) que exibe no #resultado algo como "Resultado: 20". Use as duas em dobrar, triplicar e metade.

function dobrar() {
    var num = parseFloat(document.getElementById('numero').value) || 0;
    var resultado = num * 2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function triplicar() {
    var num = parseFloat(document.getElementById('numero').value) || 0;
    var resultado = num * 3;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function metade() {
    var num = parseFloat(document.getElementById('numero').value) || 0;
    var resultado = num / 2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
