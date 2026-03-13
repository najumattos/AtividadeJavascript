// Código com problema: log duplicado em cada função.
// Sua tarefa: extrair o log para uma função reutilizável (ex.: logarPedido) e chamar essa função nas duas.

// As duas funções fazem a mesmisma coisa então não há necessidade de ter duas funções iguais.
// Substitui as funções ProcessarPedidoOnline() e ProcessarPedidoLoja() em uma única função ProcessarPedido()
//Deixei a primeira letra da função maiuscula no padrao PascalCase
//Adicionei o campo tipoPedido para identificar como o pedido foi feito 

function ProcessarPedido(pedido) {
    console.log(`Processando pedido ${pedido.id} | ${pedido.tipoPedido} `);
    console.log('Cliente: ' + pedido.cliente);
    console.log('Valor: R$ ' + pedido.valor);
    console.log('Status: ' + pedido.status);
}
