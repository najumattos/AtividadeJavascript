// Código com problema: três funções que fazem coisas parecidas com o array (duplicação de lógica).
// Sua tarefa: criar UMA função genérica que receba o array e uma função de transformação (alta ordem)
// e use essa função para "dobrar", "ao quadrado" e "formatar" sem repetir o loop.

// O botão na tela não precisa saber como o cálculo é feito, ele só precisa receber o resultado, ou seja,

// A. A Função ProcessarOperacao(array, tipoOperacao) recebe a array que será modificada e o tipo de operacao que o usuario quer realizar
// C. Desse modo clicado{{}} a função ProcessarOperação(requisicao) recebe uma "requisição" como dizendo "eu tenho essa array, e tenho esse tipoOperacao"
// E.  As linhas da função ProcessarOperacao() são percorridas e deve retornar o que foi processado. O resultado desse Procesamento, ou seja,
// F. A função recebe uma requisição e seus dados ProcessarOperacaoo(dado, requisicao) (F1)
// G. Analisa a requisição, pega o dado necessario e devolve a resposta para o que foi requisitado (receita de bolo) 

function ProcessarOperacao(array, tipoOperacao){

let resposta = []; //let pois o resultado não recebe sempre o mesmo valor 

// D. Aqui eu optei por utilizar um OEPRADOR TERNÁRIO (um IF simplificado) 

// F3. resposta recebe o resultado da operação: SE tipoOperacao É IGUAL a  "dobrarArray", -> O DADORECEBIDO é uma array, a REQUISIÇÃO é dobrarArray(), a RESPOSTA é uma ARRAYDOBRADA
resposta = ((tipoOperacao == "dobrarArray") ? dobrarArray(array) : resposta);

// F3. resposta recebe o resultado da operação: SE tipoOperacao É IGUAL a  "aoQuadradoArray", -> O DADORECEBIDO é uma array, a REQUISIÇÃO é aoQuadradoArray(), a RESPOSTA é uma ARRAYAOQUADRADO
resposta = ((tipoOperacao == "aoQuadradoArray") ? aoQuadradoArray(array) : resposta);

// F3. resposta recebe o resultado da operação: SE tipoOperacao É IGUAL a  "formatarArray", -> O DADORECEBIDO é uma array, a REQUISIÇÃO é formatarArray(), a RESPOSTA é uma ARRAYFORMATADA
resposta = ((tipoOperacao == "formatarArray") ? formatarArray(array) : resposta);


// F1. A função RECEBE o dado array e uma requisicao tipoOperacao
// F2. Verifica qual é a requisição, procura qual é a função que tem a resposta -> A função ProcessarOperacao("To esperando voce me responder >:( ") não sabe a resposta, então ela procura o cara que é especialista
// F3. Chama a função que vai responder a requisição feita -> a função ProcessarOperacao(array, tipoOperacao) pode dizer "Eu tenho uma array e quero por ela pra assar no dobrarArray()"
// F4. Espera (metodos assincronos dando as caras) a resposta -> (F4) dobrarArray(dobrandoArray)
// F5. RETORNA a resposta da requisicao recebida, ou seja, RECEBEU ProcessarOperacao(array, tipoOperacao), PROCESSOU dobrarArray("Array sendo dobrada") RETORNOU arrayDobrada 
return resposta; 
}

// B. A função era chamada diretamente quando clicado{{}}. 
function dobrarArray(array) {
// F4. A função dobrarArray RECEBE uma array e DOBRA

    var arrayDobrada = [];
    for (var i = 0; i < array.length; i++) {
        arrayDobrada.push(array[i] * 2);
    }
    // F4.A função dobrarArray RETORNA uma array dobrada  
    return arrayDobrada;
}

// ProcessarOperacao() nao precisa saber que eu utilizo uma arrow function para retornar o quadrado dos numeros da array
const aoQuadradoArray = (array) => array.map(numero => numero * numero);

// ProcessarOperacao() nao precisa saber que se eu utilizo MAP ou FOR para retornar o array formatada.
function formatarArray(array) {
    return array.map(function(n) {
        return 'Número: ' + n;
    });
}
// Mas pq tudo isso Anaaa? Nao é mais facil simplesmente chamar a função diretamente quando clicado{{}}?? 
// Mais facil enquanto são 3 funções, imagina se fossem 30. Aqui entra o conceito de ESCALABILIDADE
// E outra, quando voce usa uma calculadora, voce não quer saber como ela chegou no resultado, você só se importa com o resultado
// Voce quer chegar na dona Boleira, pedir um bolo e sair de la com o bolo. voce nao precisa(e nem deve) saber o que acontece da recepção pra dentro
// Vocee quer comer um nuggets mas é bom pra todo mundo que voce nao saiba como ele é feito
// Por isso a longo prazo é mais facil manter uma função "recepção/garçom" do que deixar o usuario "entrar na cozinha". Estamos todos de acordo de que o usuario NÃo deve ter acesso a cozinha ne?(Conceito de DTO batendo na porta)
