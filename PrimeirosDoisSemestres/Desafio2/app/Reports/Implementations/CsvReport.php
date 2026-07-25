<?php

namespace App\Reports\Implementations;

use App\Interfaces\ReportInterface;

class CsvReport implements ReportInterface
{
    public function generate(array $data): string
    {
        $output = "ID,Nome\n";
        foreach ($data as $item) {
            $output .= "{$item['id']},{$item['name']}\n";
        }
        return "Conteúdo CSV Gerado: \n" . $output;
    }

    public function getFileType(): string
    {
        return 'csv';
    }
}
