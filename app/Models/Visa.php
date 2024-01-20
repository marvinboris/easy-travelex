<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Visa extends Model
{
    use HasFactory, Sluggable;

    protected $table = 'visas';

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    protected $directory = '/images/visas/';

    protected $fillable = [
        'title',
        'description',
        'country',
        'photo',
        'duration',
        'amount',
        'processing_period_start',
        'processing_period_end',
        'slug',
    ];

    protected $appends = [
        'link',
    ];

    public function visaApplications()
    {
        return $this->hasMany(VisaApplication::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getLinkAttribute()
    {
        return '/visa-applications/' . $this->slug;
    }
}
