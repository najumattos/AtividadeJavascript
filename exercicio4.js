// Código com problema: a "borda" da mensagem (linhas de === e o formato) está repetida nas duas funções.
// Sua tarefa: criar UMA função (ex.: formatarMensagem ou exibirComBorda) que receba o texto
// e retorne a string com as linhas de igual e a mensagem no meio. Use essa função em dizerOla e dizerTchau.

const dizerOla = (nome) => "Olá, " + nome + "! Seja bem-vindo(a).";
function dizerTchau(nome) {
  var msg = "Tchau, " + nome + "! Até a próxima.";
  return msg;
}

function MontarSaudacao(nome, saudacao) {
  var linha = "========================================";

  var msg = saudacao == "dizerOla" ? dizerOla(nome) : dizerTchau(nome);
  return linha + "\n" + msg + "\n" + linha;
}

//Pra esse exercicio não foi preciso alterar o html
