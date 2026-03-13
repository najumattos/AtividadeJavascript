// Código com problema: em cada validação você repete "escrever a mensagem no span" e "limpar o resultado".
// Sua tarefa: criar mostrarErro(campoId, mensagem) que define o textContent do span #erro-{campoId}
// e limparErros() que zera todos os spans de erro e o #resultado. Use essas funções em validarNome e validarEmail.

// função para chamar todas as validações
function validarFormulario() {
    LimparErros() // essa função limpa todas as mensagens de erro. Como isso era feito?
    const nomeOk = validarNome(); //as funções validarNome() e validarEmail() retornam true ou false, ou seja "Campo Validado" || "Campo Invalidado".
    const emailOk = validarEmail(); // As variaveis nomeOk e emailOk armazenam true/false

//  SE (Nome e Email estiver true) { chame a funcao MostrarErro('passando o Id do elemento HTML', 'passando a mensagem personalizada')  }
    if (nomeOk && emailOk) { MostrarErro('resultado', 'Tudo certo!') }
}

function validarNome() {
    const nome = ObterValorCampo('nome');  // Da onde ta vindo esse 'nome'?

    //  SE (nome for nulo/vazio ) { chame a funcao MostrarErro('passando o Id do elemento HTML', 'passando a mensagem personalizada')  }
    if (!nome) { MostrarErro('erro-nome', 'Nome é obrigatório.'); return false;   }
    return true;
}

function validarEmail() {
    const email = ObterValorCampo('email') //A função só precisa saber qual o email, não interessa da onde ta vindo, nem como o valor desse campo é obtido (conceito de DESACOPLAMENTO).  

    //O que esses dois IFs estao validando?
    if (!email) {MostrarErro('erro-email', 'Email é obrigatório.');  return false; }
    if (email.indexOf('@') === -1) { MostrarErro('erro-email', 'E-mail inválido.');} // verifique qual mensagem está sendo mostrada quando o email não tiver @
    
    // para retornar validarEmail(true), é necessario que o email passe em todos os testes de validações, SENAO retornar FALSE
    return true;
}

const MostrarErro = (campoId, mensagem) => document.getElementById(`${campoId}`).textContent = (`${mensagem}`);

function LimparErros() {
    document.getElementById('nome').textContent = ('');
    document.getElementById('erro-email').textContent = ('');
    document.getElementById('resultado').textContent = ('');
}

//da onde vem esse idCampo?
const ObterValorCampo = (idCampo) => document.getElementById(`${idCampo}`).value.trim();

/* Pra esse exercicio nao foi necessario alterar o html */
