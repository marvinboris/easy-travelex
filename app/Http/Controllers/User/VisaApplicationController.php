<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\VisaApplication;
use App\Models\Subscriber;
use App\Notifications\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class VisaApplicationController extends Controller
{
    private $rules = [
        'name' => 'required',
        'customer_type' => 'required',
        'country' => 'required',
        'email' => 'required',
        'phone' => 'required',
        'expiry_date' => 'required|date',
        'passport' => 'nullable|image',
        'profile' => 'nullable|image',
        'doc' => 'nullable|file',
    ];



    private function data()
    {
        $page = +request()->page ?? 1;
        $show = +request()->show ?? 5;
        $search = request()->search ?? '';

        $total = 0;

        $visaApplications = [];
        $filteredData = VisaApplication::orderBy('created_at', 'DESC');

        $filteredData = $filteredData
            ->select('*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('customer_type', 'LIKE', "%$search%")
                        ->orWhere('country', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('phone', 'LIKE', "%$search%")
                        ->orWhere('expiry_date', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $visaApplication) {
            $visaApplications[] = array_merge($visaApplication->toArray(), [
                'visa' => $visaApplication->visa,
            ]);
        }

        return [
            'visaApplications' => $visaApplications,
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

        $visaApplications = $data['visaApplications'];
        $total = $data['total'];

        return response()->json([
            'visaApplications' => $visaApplications,
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

        $visaApplication = VisaApplication::find($id);
        if (!$visaApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'visaApplication' => $visaApplication,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['passport']);

        if ($file = $request->file('passport')) {
            $fileName = UtilController::resize($file, 'visaApplications');
            $input['passport'] = htmlspecialchars($fileName);
        }

        $user->visaApplications()->create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $visaApplication = VisaApplication::find($id);
        if (!$visaApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['passport']);

        if ($file = $request->file('passport')) {
            if ($visaApplication->passport && is_file(public_path($visaApplication->passport))) unlink(public_path($visaApplication->passport));
            $fileName = UtilController::resize($file, 'visaApplications');
            $input['passport'] = htmlspecialchars($fileName);
        }

        $visaApplication->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['updated'], 'success'),
            'visaApplication' => $visaApplication,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $visaApplication = VisaApplication::find($id);
        if (!$visaApplication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['not_found'], 'danger'),
        ]);

        if ($visaApplication->passport && is_file(public_path($visaApplication->passport))) unlink(public_path($visaApplication->passport));
        $visaApplication->delete();

        $data = $this->data();

        $visaApplications = $data['visaApplications'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['visaApplications']['deleted'], 'success'),
            'visaApplications' => $visaApplications,
            'total' => $total,
        ]);
    }
}
