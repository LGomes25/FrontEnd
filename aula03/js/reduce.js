const pedidos = [

    { num: 123, status: "enviado", total: 5000 },
    { num: 456, status: "entregue", total: 2000 },
    { num: 789, status: "entregue", total: 1000 },
    { num: 159, status: "aguardando pagamento", total: 2500 },
];
const totalGeral = pedidos.reduce((soma, pedido) => soma + pedido.total, 0);

const totalFiltro = pedidos
    .filter(pedido => pedido.status !== "aguardando pagamento")
    .reduce((soma, pedido) => soma + pedido.total, 0);

console.log(totalGeral);

console.log(totalFiltro);