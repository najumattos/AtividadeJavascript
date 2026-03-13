// Código com problema: em cada validação você repete "escrever a mensagem no span" e "limpar o resultado".
// Sua tarefa: criar mostrarErro(campoId, mensagem) que define o textContent do span #erro-{campoId}
// e limparErros() que zera todos os spans de erro e o #resultado. Use essas funções em validarNome e validarEmail.

// função para chamar todas as validações
function validarFormulario() {
  LimparErros();
  const nomeOk = validarNome();
  const emailOk = validarEmail();
  if (nomeOk && emailOk) {
    MostrarErro("resultado", "Tudo certo!");
  }
}

function validarNome() {
  const nome = ObterValorCampo("nome");
  if (!nome) {
    MostrarErro("erro-nome", "Nome é obrigatório.");
    return false;
  }
  return true;
}

function validarEmail() {
  const email = ObterValorCampo("email");
  if (!email) {
    MostrarErro("erro-email", "Email é obrigatório.");
    return false;
  }
  if (email.indexOf("@") === -1) {
    MostrarErro("erro-email", "E-mail inválido.");
    return false;
  }
  return true;
}

const MostrarErro = (campoId, mensagem) =>
  (document.getElementById(`${campoId}`).textContent = `${mensagem}`);

function LimparErros() {
  document.getElementById("nome").textContent = "";
  document.getElementById("erro-email").textContent = "";
  document.getElementById("resultado").textContent = "";
}
const ObterValorCampo = (idCampo) =>
  document.getElementById(`${idCampo}`).value.trim();

/* Pra esse exercicio nao foi necessario alterar o html */
