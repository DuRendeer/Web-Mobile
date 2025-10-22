<?php

namespace App\Http\Controllers;

use App\Services\ReportService;
use Illuminate\Http\Request;
use InvalidArgumentException;

class ReportController extends Controller
{
    protected ReportService $reportService;

    public function __construct(ReportService $reportService)
    {
        $this->reportService = $reportService;
    }

    public function download(Request $request, string $type)
    {
        $sourceData = [
            ['id' => 1, 'name' => 'Item A'],
            ['id' => 2, 'name' => 'Item B'],
            ['id' => 3, 'name' => 'Item C'],
        ];

        try {
            $report = $this->reportService->generateReport($type, $sourceData);

            return response($report->generate($sourceData), 200)
                ->header('Content-Type', 'text/' . $report->getFileType())
                ->header('Content-Disposition', 'attachment; filename="relatorio.' . $report->getFileType() . '"');

        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
