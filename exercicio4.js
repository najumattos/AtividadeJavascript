// Código com problema: a "borda" da mensagem (linhas de === e o formato) está repetida nas duas funções.
// Sua tarefa: criar UMA função (ex.: formatarMensagem ou exibirComBorda) que receba o texto
// e retorne a string com as linhas de igual e a mensagem no meio. Use essa função em dizerOla e dizerTchau.


//Eu posso fazer usando uma arrow function
const dizerOla = (nome) => 'Olá, ' + nome + '! Seja bem-vindo(a).';

//Eu posso fazer usando uma function normal
function dizerTchau(nome) {    
    var msg = 'Tchau, ' + nome + '! Até a próxima.';
    return msg;
}

//a funçaõ MontarSaudacao() recebe uma REQUISICAO("Eu tenho esse nome, verifique qual é a saudacao adequada")
function MontarSaudacao(nome, saudacao){
    var linha = '========================================'; // conceito de DRY (Don't Repeat Yourself)

    // SE saudacao="dizerOla" chame a funcao dizerOla(nome) SENAO chame a função dizerTchau(nome)
    var msg = ((saudacao =="dizerOla") ? dizerOla(nome) : dizerTchau(nome));
    //Operadores ternarios servem apenas para verificações booleanas (A resposta é "Oi" ou "Tchau". Não tem uma terceira opção)
    return linha + '\n' + msg + '\n' + linha;
}

//Pra esse exercicio não foi preciso reescrever o html