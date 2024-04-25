<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaApplication extends Model
{
    use HasFactory;

    protected $table = 'visa_applications';

    protected $imgDirectory = '/images/visa-applications/';
    protected $fileDirectory = '/files/visa-applications/';

    protected $fillable = [
        'visa_id',
        'name',
        'customer_type',
        'country',
        'email',
        'phone',
        'expiry_date',
        'passport',
        'profile',
        'doc'
    ];

    public function visa()
    {
        return $this->belongsTo(Visa::class);
    }

    public function getPassportAttribute($value)
    {
        return $value ? $this->imgDirectory . $value : null;
    }

    public function getProfileAttribute($value)
    {
        return $value ? $this->imgDirectory . $value : null;
    }

    public function getDocAttribute($value)
    {
        return $value ? (str_ends_with($value, 'pdf') ? $this->fileDirectory : $this->imgDirectory) . $value : null;
    }
}
