// Código com problema: em cada função você repete (1) ler o valor do input e (2) mostrar o resultado no #resultado.
// Sua tarefa: criar lerNumero() que retorna o número do input (ou 0 se estiver vazio/inválido)
// e mostrarResultado(valor, texto) que exibe no #resultado algo como "Resultado: 20". Use as duas em dobrar, triplicar e metade.

//arrow function
const dobrar = (num) => num * 2;

function triplicar(num) {
  return num * 3;
}

const metade = (num) => num / 2;

const PegarElementoPeloId = () =>
  parseFloat(document.getElementById("numero").value);

function Calcular(num, operacao) {
  let calculo;
  switch (operacao) {
    case "metade":
      calculo = metade(num);
      break;
    case "dobrar":
      calculo = dobrar(num);
      break;
    case "triplicar":
      calculo = metade(num);
      break;
    case "quadruplicar":
      calculo = metade(num);
      break;
    default:
      calculo = 0;
  }
  return calculo;
}

function Visualizar(resultadoCalculado) {
  return (document.getElementById("resposta").textContent =
    "Resultado: " + resultadoCalculado);
}
