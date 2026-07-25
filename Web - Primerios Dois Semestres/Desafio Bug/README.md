# Sistema de Pagamentos - Refatoração e Detecção de Fraudes

Desenvolvido por Eduardo Sochodolak, Alexsandro Lemos e Johann Matheus Pedroso da Silva.

## Desafio Concluído

**1. Análise da Arquitetura**

A lógica de detecção de fraude foi implementada no Service, porque é lógica de negócio. O Service orquestra a chamada à API de fraude antes de processar o pagamento.

**2. Refatoração do PaymentService**

- Adicionei FraudDetectionAPI via injeção de dependência
- Verificação de fraude antes do processamento
- Se fraudulenta: retorna status 'recusado' sem salvar no banco
- Se legítima: segue o fluxo normal

**3. Feature Test Criado**

- test_transacao_fraudulenta_e_recusada: simula fraude com Http::fake(), verifica status recusado e confirma que não salvou no banco
- test_transacao_nao_fraudulenta_e_aprovada: simula transação legítima, verifica aprovação e persistência

**4. AppServiceProvider**

Registrado o binding da interface com a implementação, conforme o documento.

## Estrutura do Projeto

```
app/
├── Http/Controllers/
│   └── PaymentController.php          # Validação e delegação
├── Models/
│   └── Payment.php                    # Model do pagamento
├── Providers/
│   └── AppServiceProvider.php         # Binding de dependências
├── Repositories/
│   ├── Contracts/
│   │   └── PaymentRepositoryInterface.php    # Contrato do repositório
│   └── Eloquent/
│       └── EloquentPaymentRepository.php     # Implementação com Eloquent
└── Services/
    ├── FraudDetectionAPI.php          # Detecção de fraudes
    └── PaymentService.php             # Lógica de negócio
```
