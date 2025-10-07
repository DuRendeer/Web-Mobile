<?php

namespace App\Services;

use App\Repositories\Contracts\PaymentRepositoryInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class PaymentService
{
    protected $paymentRepository;
    protected $fraudDetectionAPI;

    public function __construct(
        PaymentRepositoryInterface $paymentRepository,
        FraudDetectionAPI $fraudDetectionAPI
    ) {
        $this->paymentRepository = $paymentRepository;
        $this->fraudDetectionAPI = $fraudDetectionAPI;
    }

    public function processTransaction(array $data): array
    {
        if ($this->fraudDetectionAPI->isFraudulent($data)) {
            return [
                'message' => 'Transação recusada por suspeita de fraude.',
                'status' => 'recusado',
                'payment_id' => null
            ];
        }

        $apiResponse = Http::post('https://api.pagamentos.falsa/process', [
            'amount' => $data['amount'],
            'card' => $data['card_number'],
        ]);

        $status = $apiResponse->successful() ? 'aprovado' : 'recusado';

        $paymentData = [
            'amount' => $data['amount'],
            'card_number' => Str::substr($data['card_number'], -4),
            'status' => $status,
        ];

        $payment = $this->paymentRepository->create($paymentData);

        return [
            'message' => 'Transação processada com sucesso.',
            'status' => $status,
            'payment_id' => $payment->id
        ];
    }
}
