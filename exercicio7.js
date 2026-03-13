// Código com problema: em cada validação você repete "escrever a mensagem no span" e "limpar o resultado".
// Sua tarefa: criar mostrarErro(campoId, mensagem) que define o textContent do span #erro-{campoId}
// e limparErros() que zera todos os spans de erro e o #resultado. Use essas funções em validarNome e validarEmail.

function validarFormulario() {
    document.getElementById('resultado').textContent = '';
    var nomeOk = validarNome();
    var emailOk = validarEmail();
    if (nomeOk && emailOk) {
        document.getElementById('resultado').textContent = 'Tudo certo!';
    }
}

function validarNome() {
    document.getElementById('erro-nome').textContent = '';
    var nome = document.getElementById('nome').value.trim();
    if (!nome) {
        document.getElementById('erro-nome').textContent = 'Nome é obrigatório.';
        return false;
    }
    return true;
}

function validarEmail() {
    document.getElementById('erro-email').textContent = '';
    var email = document.getElementById('email').value.trim();
    if (!email) {
        document.getElementById('erro-email').textContent = 'E-mail é obrigatório.';
        return false;
    }
    if (email.indexOf('@') === -1) {
        document.getElementById('erro-email').textContent = 'E-mail inválido.';
        return false;
    }
    return true;
}
