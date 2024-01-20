<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Models\TourApplication;
use App\Models\Visa;
use App\Models\VisaApplication;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function visaApplications(Request $request)
    {
        $input = $request->except(['passportImg', 'profileImg', 'doc']);

        $loadImg = function (Request $request, string $key) {
            $folder = 'visa-applications';
            if ($file = $request->file($key)) {
                if (stristr($file->getClientMimeType(), 'image')) $fileName = UtilController::resize($file, $folder);
                else {
                    $fileName = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('/files/' . $folder), $fileName);
                }
                return htmlspecialchars($fileName);
            }
            return null;
        };

        $input['passport'] = $loadImg($request, 'passportImg');
        $input['profile'] = $loadImg($request, 'profileImg');
        $input['doc'] = $loadImg($request, 'doc');

        VisaApplication::create($input);

        return response()->json([
            'success' => true
        ]);
    }

    public function visas()
    {
        $visas = Visa::all();

        return response()->json($visas);
    }

    public function tourApplications(Request $request)
    {
        $input = $request->except(['places', 'passportImg']);

        $loadImg = function (Request $request, string $key) {
            $folder = 'tour-applications';
            if ($file = $request->file($key)) {
                if (stristr($file->getClientMimeType(), 'image')) $fileName = UtilController::resize($file, $folder);
                else {
                    $fileName = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('/files/' . $folder), $fileName);
                }
                return htmlspecialchars($fileName);
            }
            return null;
        };

        $input['passport'] = $loadImg($request, 'passportImg');
        $input['places'] = json_encode($request->places);

        TourApplication::create($input);

        return response()->json([
            'message' => $input,
        ]);
    }

    public function tours()
    {
        $tours = Tour::all();

        return response()->json($tours);
    }
}
