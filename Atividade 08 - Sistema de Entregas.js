const entregas = [
    {
        id: 1,
        cliente: 'João Silva',
        endereco: 'Rua das Flores, 123 - Centro',
        status: 'pendente'
    },
    {
        id: 2,
        cliente: 'Maria Santos',
        endereco: 'Av. Principal, 456 - Jardim',
        status: 'pendente'
    },
    {
        id: 3,
        cliente: 'Pedro Costa',
        endereco: 'Rua do Comércio, 789 - Vila Nova',
        status: 'em_transito'
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

async function iniciarSistema() {
    try {
        const minhasEntregas = await buscarEntregas();
        exibirEntregas(minhasEntregas);
        atualizarStatusEntrega(minhasEntregas, 1, 'entregue');
    } catch (error) {
        console.error('Erro no sistema:', error);
    }
}

iniciarSistema();