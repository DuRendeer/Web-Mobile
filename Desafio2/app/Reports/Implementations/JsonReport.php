<?php

namespace App\Reports\Implementations;

use App\Interfaces\ReportInterface;

class JsonReport implements ReportInterface
{
    public function generate(array $data): string
    {
        return json_encode($data, JSON_PRETTY_PRINT);
    }

    public function getFileType(): string
    {
        return 'json';
    }
}
