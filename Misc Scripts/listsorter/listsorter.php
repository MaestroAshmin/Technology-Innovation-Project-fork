<?php
//demo script to sort services by distance to postcode
//Justin Li 104138316 
//last edited 18/09/2023


//list for testing, remove when database is integrated
$services = [
    [
        'Name' => 'PRONTO!',
        'Service Type' => 'Health',
        'Phone' => '(03) 9416 2889',
        'Email' => '',
        'Address' => '200 Hoddle St, Abbotsford VIC 3067',
        'Latitude' => -37.80102,
        'Longitude' => 144.99315,
        'URL' => 'https://pronto.org.au',
    ],
    [
        'Name' => 'Northside Clinic',
        'Service Type' => 'Health',
        'Phone' => '(03) 9485 7700',
        'Email' => '',
        'Address' => '370 St Georges Road Fitzroy North, Vic 3068',
        'Latitude' => -37.77879,
        'Longitude' => 144.98797,
        'URL' => 'https://northsideclinic.net.au/contact/',
    ],
    [
        'Name' => 'Melbourne Sexual Health Centre',
        'Service Type' => 'Health',
        'Phone' => '(03) 9341 6200',
        'Email' => '',
        'Address' => '580 Swanston St, Carlton VIC 3053',
        'Latitude' => -37.8031281,
        'Longitude' => 144.9637821,
        'URL' => 'https://www.mshc.org.au/clinics-services/accessing-our-sti-clinic/make-a-booking',
    ],
    [
        'Name' => 'Family Planning Victoria (FPV) Action Centre',
        'Service Type' => 'Health',
        'Phone' => '03 9660 4700',
        'Email' => 'action@fpv.org.au',
        'Address' => 'Level 1, 94 Elizabeth Street, Melbourne, VIC, 3000',
        'Latitude' => -37.81574,
        'Longitude' => 144.9631195,
        'URL' => 'http://www.fpv.org.au',
    ],
    [
        'Name' => 'Melbourne Rapid HIV Testing',
        'Service Type' => 'Health',
        'Phone' => '+61 3 9944 6200',
        'Email' => 'info@erahealth.com.au',
        'Address' => 'L9, 460 Bourke St Melbourne, VIC 3000 Australia',
        'Latitude' => -37.8141745,
        'Longitude' => 145.08032,
        'URL' => 'https://www.melbournerapidhivtest.com.au/book-a-rapid-hiv-test/',
    ],
    [
        'Name' => 'Prahran Market Clinic',
        'Service Type' => 'Health',
        'Phone' => '(03) 9514 0888',
        'Email' => 'hello@prahranmarketclinic.com',
        'Address' => 'Pran Central Shopping Centre Mezzanine Level, 325 Chapel St, Prahran VIC 3181',
        'Latitude' => -37.85114,
        'Longitude' => 144.99318,
        'URL' => 'https://www.prahranmarketclinic.com/',
    ],
    [
        'Name' => 'Sandringham Hospital (Alfred Health)',
        'Service Type' => 'Health',
        'Phone' => '(03) 9076 1000',
        'Email' => '',
        'Address' => '193 Bluff Rd, Sandringham VIC 3191',
        'Latitude' => -37.9608309,
        'Longitude' => 145.0180093,
        'URL' => 'https://www.alfredhealth.org.au/sandringham',
    ],
    [
        'Name' => 'Caulfield Hospital (Alfred Health)',
        'Service Type' => 'Health',
        'Phone' => '(03) 9076 6000',
        'Email' => '',
        'Address' => '260 Kooyong Rd, Caulfield VIC 3162',
        'Latitude' => -37.8823815,
        'Longitude' => 145.016733,
        'URL' => 'https://www.alfredhealth.org.au/caulfield',
    ],
    [
        'Name' => 'The Alfred (Alfred Health)',
        'Service Type' => 'Health',
        'Phone' => '(03) 9076 2000',
        'Email' => '',
        'Address' => '55 Commercial Rd, Melbourne VIC 3004',
        'Latitude' => -37.8461194,
        'Longitude' => 144.9827286,
        'URL' => 'https://www.alfredhealth.org.au/the-alfred',
    ],
    [
        'Name' => 'Centre Clinic',
        'Service Type' => 'Health',
        'Phone' => '(03) 9525 5866',
        'Email' => '',
        'Address' => 'Suite 3A 79-81 Fitzroy Street, St Kilda, VIC, 3182',
        'Latitude' => -37.8607129,
        'Longitude' => 144.9759245,
        'URL' => '',
    ],
    [
        'Name' => 'Equinox',
        'Service Type' => 'Health',
        'Phone' => '9416 2889',
        'Email' => 'gabe.curtis@thorneharbour.org',
        'Address' => '79-81 Fitzroy Street St Kilda, VIC 3182',
        'Latitude' => -37.8607129,
        'Longitude' => 144.9759245,
        'URL' => '',
    ],
    [
        'Name' => 'Andrew Place Clinic - Bundoora',
        'Service Type' => 'Health',
        'Phone' => '(03) 9467 1444',
        'Email' => '',
        'Address' => '5 Judith St, Bundoora VIC 3083',
        'Latitude' => -37.7001243,
        'Longitude' => 145.07262,
        'URL' => '',
    ],
    [
        'Name' => 'Grandview Family Clinic',
        'Service Type' => 'Health',
        'Phone' => '(03) 5951 1860',
        'Email' => '',
        'Address' => '3 Grandview Grove, Cowes VIC 3922',
        'Latitude' => -38.4578287,
        'Longitude' => 145.2375506,
        'URL' => 'familydoctor.com.au',
    ],
    [
        'Name' => 'Kardinia Health',
        'Service Type' => 'Health',
        'Phone' => '(03) 5202 9333',
        'Email' => '',
        'Address' => '2/18 Colac Rd, Belmont VIC 3216',
        'Latitude' => -38.1900689,
        'Longitude' => 144.3259681,
        'URL' => '',
    ],
    
];


//api key
$mapquest_api_key = 'Fi2Im2OdDqBHDfUapb3rjCsBKN6dalcO';

//dummy postcode, needs state or the api misinterprets it as not a postcode
$postcode = 'Victoria, 3195';

//api url
$url = "https://www.mapquestapi.com/geocoding/v1/address?key=$mapquest_api_key&location=" . urlencode($postcode);

//function to calculate distance using the haversine formula 
function calculateDistance($lat1, $lng1, $lat2, $lng2) {
    $radius = 6371;
    $dLat = deg2rad($lat2 - $lat1);
    $dLng = deg2rad($lng2 - $lng1);
    $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($dLng / 2) * sin($dLng / 2);
    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
    $distance = $radius * $c;
    return $distance;
}

//get lat and long of postcode 
$response = json_decode(file_get_contents($url), true);

if (!empty($response['results'][0]['locations'][0]['latLng']['lat']) && !empty($response['results'][0]['locations'][0]['latLng']['lng'])) {
    $lat = $response['results'][0]['locations'][0]['latLng']['lat'];
    $lng = $response['results'][0]['locations'][0]['latLng']['lng'];

    //calculate distances and add to the array
    foreach ($services as &$service) {
        $service['distance'] = calculateDistance($lat, $lng, $service['Latitude'], $service['Longitude']);
    }

    //sort array by distance
    usort($services, function ($a, $b) {
        return $a['distance'] <=> $b['distance'];
    });

    //prints sorted list
    foreach ($services as $service) {
        echo "<strong>Name:</strong> {$service['Name']}<br>";
        if (!empty($service['Service Type'])) {
            echo "<strong>Service Type:</strong> {$service['Service Type']}<br>";
        }
        if (!empty($service['Phone'])) {
            echo "<strong>Phone:</strong> {$service['Phone']}<br>";
        }
        if (!empty($service['Email'])) {
            echo "<strong>Email:</strong> {$service['Email']}<br>";
        }
        if (!empty($service['Address'])) {
            echo "<strong>Address:</strong> {$service['Address']}<br>";
        }
        echo "<strong>Distance:</strong> {$service['distance']} km<br>";
        if (!empty($service['URL'])) {
            echo "<strong>URL:</strong> <a href='{$service['URL']}' target='_blank'>{$service['URL']}</a><br>";
        }
        echo "<hr>";
    }
} else {
    //err
    echo 'fail.';
}
?>