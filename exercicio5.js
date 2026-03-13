// Código com problema: em cada função você repete (1) ler o valor do input e (2) mostrar o resultado no #resultado.
// Sua tarefa: criar lerNumero() que retorna o número do input (ou 0 se estiver vazio/inválido)
// e mostrarResultado(valor, texto) que exibe no #resultado algo como "Resultado: 20". Use as duas em dobrar, triplicar e metade.

//arrow function
const dobrar = (num) => num * 2;  

// Nesse caso a funcao nao vai funcionar pois a variavel resultado é criada mas seu valor nao é enviado para nenhum lugar (VARIAVEL LOCAL)
function triplicar(num) { 
    var resultado = num * 3;
  }
 

  // (funcao normal) Nesse caso a funcao vai funcionar pois a variavel resultado é criada e seu valor é RETORNADO
  function Quadriplicar(num) {  /* escreva a funcao triplicar(num) em arrow function*/
    var resultado = num * 4;
    return resultado;
  }

  //arrow function
const metade = (num) =>  num / 2; /* escreva a arrow function em uma funcao normal*/


//Explique o que essa funcao faz
const PegarElementoPeloId = ()=> parseFloat(document.getElementById('numero').value);

function Calcular(num, operacao){

    let calculo; //em JS nao precisa tipar!! Em c# eu precisaria informar que tipo de dado resposta vai receber. ex: resposta = []; int resposta, string resposta
   switch(operacao){
        case "metade":
            calculo = metade(num); //Se fosse utilizar operador ternario para chamar a função: calculo =(( operacao =="metade")? metade(num) : calculo);
        break;
        case "dobrar":
            calculo = dobrar(num);
        break;
        case "triplicar":   //é possivel chamar a funcao, ela funciona mas ela nao consegue se comunicar (Parece eu)
            calculo = metade(num);
        break;
         case "quadruplicar":   //é possivel chamar a funcao, ela funciona mas NINGUEM TA CHAMANDO (igual meu curriculo)
            calculo = metade(num);
        break;
    default:
        calculo = 0;
   }
return calculo;
}

function Visualizar(resultadoCalculado){
    return document.getElementById('resposta').textContent = 'Resultado: ' + resultadoCalculado;
}


//eu utilizei propositalmente PascalCase enquanto o restante utiliza camelCase;
//calculo =(( operacao =="metade")? metade(num) : calculo); //ex: var resposta = ((tipoOperacao == "dobrarArray") ? dobrarArray(array) : resposta);