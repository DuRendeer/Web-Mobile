<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class PaymentFraudTest extends TestCase
{
    use RefreshDatabase;

    public function test_transacao_fraudulenta_e_recusada()
    {
        Http::fake([
            'https://api.deteccao-fraude.falsa/check' => Http::response([
                'is_fraud' => true
            ], 200),
        ]);

        $response = $this->postJson('/api/payments', [
            'amount' => 1000.00,
            'card_number' => '1234567890123456',
            'card_holder' => 'Bernardo Barbosa',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Transação recusada por suspeita de fraude.',
                'status' => 'recusado',
                'payment_id' => null,
            ]);

        $this->assertDatabaseCount('payments', 0);
    }

    public function test_transacao_nao_fraudulenta_e_aprovada()
    {
        Http::fake([
            'https://api.deteccao-fraude.falsa/check' => Http::response([
                'is_fraud' => false
            ], 200),
            'https://api.pagamentos.falsa/process' => Http::response([
                'success' => true
            ], 200),
        ]);

        $response = $this->postJson('/api/payments', [
            'amount' => 500.00,
            'card_number' => '9876543210987654',
            'card_holder' => 'Moaca Manga',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Transação processada com sucesso.',
                'status' => 'aprovado',
            ]);

        $this->assertDatabaseCount('payments', 1);
        $this->assertDatabaseHas('payments', [
            'amount' => 500.00,
            'status' => 'aprovado',
        ]);
    }
}
