// Código com problema: ao montar a lista, o formato de cada linha ("  - Item: X") está repetido no for.
// Sua tarefa: criar UMA função (ex.: montarLinha ou formatarItem) que receba o texto do item
// e retorne a string no formato "  - Item: texto". Use essa função dentro do for em listarItens.

function adicionarItem(lista, texto) {
    lista.push(texto);
}

function limparLista(lista) {
    lista.length = 0;
}

function listarItens(lista) {
    if (lista.length === 0) {
        return '(lista vazia)';
    }
    //Tem que inicializar a variavel com texto vazio
let saida = ''; //LET: O valor de Saida será reatribuido toda vez que ele passar pelo FOR

    for (let i = 0; i < lista.length; i++) {
        //Sempre que eu quiser montar uma linha eu chamo a função e passo o valor que eu quero adicionar a linha. Nesse casoo cada vez que passa no for, uma linha nova é adicionada com o item adicionado
       saida += MontarLinha(lista[i]);
    }
return saida;

}
    //Agora quem monta a linha é a funcao MontarLinha(item). Ele encaixa o item na linha e torna a linha completa
    const MontarLinha = (item) => `  - Item: ${item} \n`;


    /*  Pra esse exercicio não foi necessario alterar o html  */
    /*  WORD WRAP: ALT Z no VS Code                           */
    
    /*  LET: Para variáveis que serão reatribuídas;           */
    /*  CONST: Para valores fixos                             */
    /*  VAR: Evitar usar                                      */
 