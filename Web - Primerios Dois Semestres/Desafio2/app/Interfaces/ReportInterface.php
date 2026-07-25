<?php

namespace App\Interfaces;

interface ReportInterface
{
    public function generate(array $data): string;

    public function getFileType(): string;
}
