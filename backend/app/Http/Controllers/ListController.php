<?php
/*service list sorter
Justin Li 104138316
Last edited 6/10/2023*/
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Service;

class ListController extends Controller
{
    //sorts services by distance to postcode and returns list 
    public function sortServices(Request $request)
    {
        $healthServices = [];
        $supportServices = [];
        //get services list from db
        $services = Service::all();
        
        if ($services->isEmpty()) {
            // If the database is empty, return empty arrays
            return response()->json([
                'healthServices' => $healthServices,
                'supportServices' => $supportServices,
            ]);
        }

    //if not logged in/no postcode, get generic list
    if ($request->input('postcode') == null){
         //get services list from db

         //separate by type
         $healthServices = $services->where('type', 'Health')->values()->all();
         $supportServices = $services->where('type', 'Support')->values()->all();

         //send to frontend
         return response()->json([
             'healthServices' => $healthServices,
             'supportServices' => $supportServices,
     ]);
     }

    
     //else sort by distance
    else{
        //needs a more elegant solution so postcodes arent confused by the api
        $userPostcode =  $request->input('postcode'). ' Australia';

        $mapquest_api_key = 'Fi2Im2OdDqBHDfUapb3rjCsBKN6dalcO';

        //get user lat and long
        $response = Http::get("https://www.mapquestapi.com/geocoding/v1/address?key=$mapquest_api_key&location=" . urlencode($userPostcode));

        if ($response->successful()) {
            $data = $response->json();
            //if full
            if (!empty($data['results'][0]['locations'][0]['latLng']['lat']) && !empty($data['results'][0]['locations'][0]['latLng']['lng'])) {
                $lat = $data['results'][0]['locations'][0]['latLng']['lat'];
                $lng = $data['results'][0]['locations'][0]['latLng']['lng'];

                //get services list from db
                $services = Service::all();
                    

                
                $servicesWithCoordinates = [];
                $servicesWithoutCoordinates = [];

                //calcs distance. if distance can be calced, put in coord array. if distance cant, set null and put in without coord
                foreach ($services as $service) {
                    if (!empty($service['latitude']) && !empty($service['longitude'])) {
                        $service['distance'] = $this->calculateDistance($lat, $lng, $service['latitude'], $service['longitude']);
                        $servicesWithCoordinates[] = $service;
                    } else {
                        $service['distance'] = null;
                        $servicesWithoutCoordinates[] = $service;
                    }
                }
                //sort list with coords by distance
                usort($servicesWithCoordinates, function ($a, $b) {
                    return $a['distance'] <=> $b['distance'];
                });

                //combine with null distance at end of the list
                $sortedServices = [];

                foreach ($servicesWithCoordinates as $service) {
                    $sortedServices[] = $service;
                    }

                foreach ($servicesWithoutCoordinates as $service) {
                    $sortedServices[] = $service;
                    }


                //separate by type. ->where doesnt work here.
                foreach ($sortedServices as $service) {
                    if ($service['type'] === 'Health') {
                        $healthServices[] = $service;
                    } elseif ($service['type'] === 'Support') {
                        $supportServices[] = $service;
                    }
                }

                //send to frontend
                return response()->json([
                    'healthServices' => $healthServices,
                    'supportServices' => $supportServices,
            ]);
            }
        }

        //err
        return response()->json(['error' => 'Invalid postcode'], 400);
    }
}

    //haversine formula distance calc function https://www.geeksforgeeks.org/haversine-formula-to-find-distance-between-two-points-on-a-sphere/
    private function calculateDistance($lat1, $lng1, $lat2, $lng2)
    {
        $radius = 6371;
        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);
        $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($dLng / 2) * sin($dLng / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        $distance = round($radius * $c,2);
        return $distance;
    }
}
