// Código com problema: a "borda" da mensagem (linhas de === e o formato) está repetida nas duas funções.
// Sua tarefa: criar UMA função (ex.: formatarMensagem ou exibirComBorda) que receba o texto
// e retorne a string com as linhas de igual e a mensagem no meio. Use essa função em dizerOla e dizerTchau.

function dizerOla(nome) {
    var linha = '========================================';
    var msg = 'Olá, ' + nome + '! Seja bem-vindo(a).';
    return linha + '\n' + msg + '\n' + linha;
}

function dizerTchau(nome) {
    var linha = '========================================';
    var msg = 'Tchau, ' + nome + '! Até a próxima.';
    return linha + '\n' + msg + '\n' + linha;
}
