<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'duration' => 3,
                'persons' => 3,
                'places' => 5,
                'photo' => 'caroussel4.webp',
                'title' => 'Easy Travelex Basic',
                'description' => 'If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need.',
                'amount' => 1400,
                'processing_period_start' => 4,
                'processing_period_end' => 5,
            ],
            [
                'duration' => 5,
                'persons' => 5,
                'places' => 10,
                'photo' => 'caroussel2.webp',
                'title' => 'Easy Travelex Plus',
                'description' => 'If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need.',
                'amount' => 2500,
                'processing_period_start' => 4,
                'processing_period_end' => 7,
            ],
            [
                'duration' => 7,
                'persons' => 7,
                'places' => 15,
                'photo' => 'caroussel3.webp',
                'title' => 'Easy Travelex Pro',
                'description' => 'If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need.',
                'amount' => 3500,
                'processing_period_start' => 6,
                'processing_period_end' => 10,
            ],
        ];

        foreach ($data as $value) {
            Tour::create($value);
        }
    }
}
