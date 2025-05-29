const entregas = [
    {
        id: 1,
        cliente: "Bernardo Silva",
        endereco: "Rua dos Germiun, 120 - Centro",
        status: "pendente"
    },
    {
        id: 2,
        cliente: "Bernardo Santos",
        endereco: "Av. Principal, 456 - Jardim America",
        status: "em_transito"
    },
    {
        id: 3,
        cliente: "Alexandro Costa",
        endereco: "Rua do Guamiranga, 789 - Vila Nova",
        status: "pendente"
    }
];

function buscarEntregas() {
    console.log('Buscando entregas no banco de dados...');
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Entregas encontradas!');
            resolve(entregas);
        }, 1000);
    });
}

function exibirEntregas(listaEntregas) {
    console.log('\nENTREGAS ATUAIS:');
    console.log('==================');
    
    listaEntregas.forEach(entrega => {
        console.log(`ID: ${entrega.id}`);
        console.log(`Cliente: ${entrega.cliente}`);
        console.log(`Endereco: ${entrega.endereco}`);
        console.log(`Status: ${entrega.status}`);
        console.log('-------------------');
    });
}

function atualizarStatusEntrega(listaEntregas, idEntrega, novoStatus) {
    console.log('\nStatus sera atualizado em 3 segundos...');
    
    setTimeout(() => {
        const entrega = listaEntregas.find(e => e.id === idEntrega);
        
        if (entrega) {
            entrega.status = novoStatus;
            
            console.log('\nSTATUS ATUALIZADO!');
            console.log('==================');
            console.log('Objeto atualizado:');
            console.log(entrega);
        }
    }, 3000);
}

function iniciarSistema() {
    console.log('Buscando entregas no banco de dados...');
    
    setTimeout(() => {
        console.log('Entregas encontradas!');
        exibirEntregas(entregas);
        atualizarStatusEntrega(entregas, 1, 'entregue');
    }, 1000);
}

iniciarSistema();