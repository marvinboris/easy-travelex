<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Models\TourApplication;
use App\Models\User;
use App\Models\VisaApplication;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $visas = User::count();
        $customers = VisaApplication::count() + TourApplication::count();
        $expenses = Expense::count();
        $income = 0;

        return response()->json([
            'visas' => $visas,
            'customers' => $customers,
            'expenses' => $expenses,
            'income' => $income,
        ]);
    }
}
