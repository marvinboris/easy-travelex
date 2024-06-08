<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourApplication extends Model
{
    use HasFactory;

    protected $table = 'tour_applications';

    protected $imgDirectory = '/images/tour-applications/';
    protected $fileDirectory = '/files/tour-applications/';

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
        return $value ? (str_ends_with($value, 'pdf') ? $this->fileDirectory : $this->imgDirectory) . $value : null;
    }
}
