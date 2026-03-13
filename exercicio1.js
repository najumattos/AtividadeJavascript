// Código com problema: log duplicado em cada função.
// Sua tarefa: extrair o log para uma função reutilizável (ex.: logarPedido) e chamar essa função nas duas.

function ProcessarPedido(pedido) {
  console.log(`Processando pedido ${pedido.id} | ${pedido.tipoPedido} `);
  console.log("Cliente: " + pedido.cliente);
  console.log("Valor: R$ " + pedido.valor);
  console.log("Status: " + pedido.status);
}
