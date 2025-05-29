class FastBoxDeliverySystem {
    constructor() {
        this.entregas = [
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
    }

    buscarEntregas() {
        return new Promise((resolve, reject) => {
            console.log("Buscando entregas no banco de dados...");
            

            setTimeout(() => {
                try {
                    console.log("Entregas carregadas com sucesso!");
                    resolve(this.entregas);
                } catch (error) {
                    reject(new Error("Erro ao buscar entregas: " + error.message));
                }
            }, 1000);
        });
    }

    atualizarStatusEntrega(id, novoStatus) {
        return new Promise((resolve, reject) => {
            console.log(`Atualizando status da entrega ID: ${id}...`);
            
            setTimeout(() => {
                const entrega = this.entregas.find(e => e.id === id);
                
                if (entrega) {
                    const statusAnterior = entrega.status;
                    entrega.status = novoStatus;
                    
                    console.log(`Status atualizado! ${statusAnterior} → ${novoStatus}`);
                    resolve(entrega);
                } else {
                    reject(new Error(`Entrega com ID ${id} não encontrada`));
                }
            }, 3000);
        });
    }


    exibirEntregas(entregas) {
        console.log("\n" + "=".repeat(50));
        console.log("SISTEMA FASTBOX - ENTREGAS ATIVAS");
        console.log("=".repeat(50));
        
        entregas.forEach((entrega, index) => {
            console.log(`\n ENTREGA ${index + 1}:`);
            console.log(`   ID: ${entrega.id}`);
            console.log(`   Cliente: ${entrega.cliente}`);
            console.log(`   Endereço: ${entrega.endereco}`);
            console.log(`   Status: ${this.formatarStatus(entrega.status)}`);
            console.log("-".repeat(30));
        });
    }


    formatarStatus(status) {
        const statusMap = {
            "pendente": "PENDENTE",
            "em_transito": "EM TRÂNSITO",
            "entregue": "ENTREGUE"
        };
        
        return statusMap[status] || status.toUpperCase();
    }


    async executarSistema() {
        try {
            console.log("Iniciando Sistema FastBox...\n");
            const entregas = await this.buscarEntregas();

            this.exibirEntregas(entregas);
            console.log("\nAguardando 3 segundos para atualizar entrega...");
            
            const entregaAtualizada = await this.atualizarStatusEntrega(1, "entregue");

            console.log("\n" + "=".repeat(50));
            console.log("ENTREGA ATUALIZADA:");
            console.log("=".repeat(50));
            console.log(JSON.stringify(entregaAtualizada, null, 2));
            
            console.log("\n Status final de todas as entregas:");
            this.exibirEntregas(this.entregas);
            
        } catch (error) {
            console.error("Erro no sistema:", error.message);
        }
    }
}
const sistema = new FastBoxDeliverySystem();
sistema.executarSistema();