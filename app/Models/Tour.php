<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Tour extends Model
{
    use HasFactory, Sluggable;

    protected $table = 'tours';

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

    protected $directory = '/images/tours/';

    protected $fillable = [
        'title',
        'description',
        'country',
        'photo',
        'places',
        'duration',
        'amount',
        'processing_period_start',
        'processing_period_end',
        'slug',
    ];

    protected $appends = [
        'link',
    ];

    public function tourApplications()
    {
        return $this->hasMany(TourApplication::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getLinkAttribute()
    {
        return '/tour-applications/' . $this->slug;
    }
}
