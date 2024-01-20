<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\TourApplication;
use App\Models\Subscriber;
use App\Notifications\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class TourApplicationController extends Controller
{
    private $rules = [
        'name' => 'required',
        'customer_type' => 'required',
        'country' => 'required',
        'persons' => 'required',
        'phone' => 'required',
        'date' => 'required|date',
        'passport' => 'nullable|image',
    ];



    private function data()
    {
        $page = +request()->page ?? 1;
        $show = +request()->show ?? 5;
        $search = request()->search ?? '';

        $total = 0;

        $tourApplications = [];
        $filteredData = TourApplication::orderBy('created_at', 'DESC');

        $filteredData = $filteredData
            ->select('*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('customer_type', 'LIKE', "%$search%")
                        ->orWhere('country', 'LIKE', "%$search%")
                        ->orWhere('persons', 'LIKE', "%$search%")
                        ->orWhere('phone', 'LIKE', "%$search%")
                        ->orWhere('date', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $tourApplication) {
            $tourApplications[] = array_merge($tourApplication->toArray(), [
                'tour' => $tourApplication->tour,
            ]);
        }

        return [
            'tourApplications' => $tourApplications,
            'total' => $total,
        ];
    }

    private function information()
    {
        return [];
    }



    public function index()
    {
        $data = $this->data();

        $tourApplications = $data['tourApplications'];
        $total = $data['total'];

        return response()->json([
            'tourApplications' => $tourApplications,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $tourApplication = TourApplication::find($id);
        if (!$tourApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'tourApplication' => $tourApplication,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['passport']);

        if ($file = $request->file('passport')) {
            $fileName = UtilController::resize($file, 'tourApplications');
            $input['passport'] = htmlspecialchars($fileName);
        }

        $user->tourApplications()->create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $tourApplication = TourApplication::find($id);
        if (!$tourApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['passport']);

        if ($file = $request->file('passport')) {
            if ($tourApplication->passport && is_file(public_path($tourApplication->passport))) unlink(public_path($tourApplication->passport));
            $fileName = UtilController::resize($file, 'tourApplications');
            $input['passport'] = htmlspecialchars($fileName);
        }

        $tourApplication->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['updated'], 'success'),
            'tourApplication' => $tourApplication,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $tourApplication = TourApplication::find($id);
        if (!$tourApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['not_found'], 'danger'),
        ]);

        if ($tourApplication->passport && is_file(public_path($tourApplication->passport))) unlink(public_path($tourApplication->passport));
        $tourApplication->delete();

        $data = $this->data();

        $tourApplications = $data['tourApplications'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['tourApplications']['deleted'], 'success'),
            'tourApplications' => $tourApplications,
            'total' => $total,
        ]);
    }
}
