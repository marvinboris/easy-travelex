<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourApplication extends Model
{
    use HasFactory;

    protected $table = 'tour_applications';

    protected $directory = '/images/tour-applications/';

    protected $fillable = [
        'tour_id',
        'name',
        'customer_type',
        'country',
        'persons',
        'phone',
        'places',
        'date',
        'passport',
    ];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    public function getPassportAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
