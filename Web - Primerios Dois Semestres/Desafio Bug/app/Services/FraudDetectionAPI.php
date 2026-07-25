<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FraudDetectionAPI
{
    public function isFraudulent(array $data): bool
    {
        $response = Http::post('https://api.deteccao-fraude.falsa/check', [
            'amount' => $data['amount'],
            'card_number' => $data['card_number'],
        ]);

        return $response->successful() && $response->json('is_fraud', false);
    }
}
