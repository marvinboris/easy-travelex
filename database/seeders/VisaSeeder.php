<?php

namespace Database\Seeders;

use App\Models\Visa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VisaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'duration' => 14,
                'photo' => 'caroussel4.webp',
                'country' => 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                'title' => '14 Days  visa + insurance to Dubai - UAE',
                'description' => 'This visa gives you 14 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires.',
                'amount' => 130,
                'processing_period_start' => 4,
                'processing_period_end' => 5,
            ],
            [
                'duration' => 30,
                'photo' => 'caroussel2.webp',
                'country' => 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                'title' => '30 Days  visa + insurance to Dubai - UAE',
                'description' => 'This visa gives you 30 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires.',
                'amount' => 240,
                'processing_period_start' => 4,
                'processing_period_end' => 7,
            ],
            [
                'duration' => 90,
                'photo' => 'caroussel3.webp',
                'country' => 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                'title' => '90 Days  visa + insurance to Dubai - UAE',
                'description' => 'This visa gives you 90 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires.',
                'amount' => 520,
                'processing_period_start' => 6,
                'processing_period_end' => 10,
            ],
        ];

        foreach ($data as $value) {
            Visa::create($value);
        }
    }
}
