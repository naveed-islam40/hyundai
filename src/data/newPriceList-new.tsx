export interface DealerRegionData {
    dealerInfo?: DealerInfo[];
}
export interface DealerInfo {
    dealerName: string;
    dealerCode: string;
    zip: number;
    state: string;
    id: string;
    CBSA: string;
}


export const panelPricesByDealer: {
    [dealerName: string]: DealerRegionData;
} = {
    "AL DAPHNE-FAIRHOPE-FOLEY [2141]": {
        "dealerInfo": [
            {
                "dealerName": "EASTERN SHORE HYUNDAI",
                "dealerCode": "AL027",
                "zip": 36526,
                "state": "AL",
                "id": "AL027",
                "CBSA": "2141"
            },
            {
                "dealerName": "PALMER'S AIRPORT HYUNDAI",
                "dealerCode": "AL029",
                "zip": 36608,
                "state": "AL",
                "id": "AL029",
                "CBSA": "2141"
            },
            {
                "dealerName": "ALLEN TURNER HYUNDAI",
                "dealerCode": "FL080",
                "zip": 32505,
                "state": "FL",
                "id": "FL080",
                "CBSA": "2141"
            }
        ],
    },
    "AR FAYETTEVILLE SPRINGDALE ROG [2390]": {
        "dealerInfo": [
            {
                "dealerName": "CRAIN HYUNDAI OF FAYETTEVILLE",
                "dealerCode": "AR034",
                "zip": 72704,
                "state": "AR",
                "id": "AR034",
                "CBSA": "2390"
            },
            {
                "dealerName": "CRAIN HYUNDAI OF BENTONVILLE",
                "dealerCode": "AR035",
                "zip": 72712,
                "state": "AR",
                "id": "AR035",
                "CBSA": "2390"
            }
        ]
    },
    "AR LITTLE ROCK NORTH LITTLE RO [2397]": {
        "dealerInfo": [
            {
                "dealerName": "CRAIN HYUNDAI LITTLE ROCK",
                "dealerCode": "AR028",
                "zip": 72210,
                "state": "AR",
                "id": "AR028",
                "CBSA": "2397"
            },
            {
                "dealerName": "CRAIN HYUNDAI NORTH LITTLE ROCK",
                "dealerCode": "AR029",
                "zip": 72116,
                "state": "AR",
                "id": "AR029",
                "CBSA": "2397"
            },
            {
                "dealerName": "SMART HYUNDAI",
                "dealerCode": "AR031",
                "zip": 71602,
                "state": "AR",
                "id": "AR031",
                "CBSA": "2397"
            },
            {
                "dealerName": "CHRIS CRAIN HYUNDAI",
                "dealerCode": "AR038",
                "zip": 72032,
                "state": "AR",
                "id": "AR038",
                "CBSA": "2397"
            }
        ]
    },
    "AZ PHOENIX-MESA-SCOTTSDALE [1998]": {
        "dealerInfo": [
            {
                "dealerName": "HORNE HYUNDAI",
                "dealerCode": "AZ028",
                "zip": 85119,
                "state": "AZ",
                "id": "AZ028",
                "CBSA": "1998"
            },
            {
                "dealerName": "CHAPMAN HYUNDAI",
                "dealerCode": "AZ032",
                "zip": 85023,
                "state": "AZ",
                "id": "AZ032",
                "CBSA": "1998"
            },
            {
                "dealerName": "EARNHARDT HYUNDAI SAN TAN",
                "dealerCode": "AZ035",
                "zip": 85297,
                "state": "AZ",
                "id": "AZ035",
                "CBSA": "1998"
            },
            {
                "dealerName": "CHAPMAN SCOTTSDALE HYUNDAI",
                "dealerCode": "AZ036",
                "zip": 85251,
                "state": "AZ",
                "id": "AZ036",
                "CBSA": "1998"
            },
            {
                "dealerName": "EARNHARDT HYUNDAI",
                "dealerCode": "AZ042",
                "zip": 85323,
                "state": "AZ",
                "id": "AZ042",
                "CBSA": "1998"
            },
            {
                "dealerName": "EARNHARDT HYUNDAI NORTH SCOTTSDALE",
                "dealerCode": "AZ043",
                "zip": 85260,
                "state": "AZ",
                "id": "AZ043",
                "CBSA": "1998"
            },
            {
                "dealerName": "AUTONATION HYUNDAI TEMPE",
                "dealerCode": "AZ046",
                "zip": 85284,
                "state": "AZ",
                "id": "AZ046",
                "CBSA": "1998"
            },
            {
                "dealerName": "CAMELBACK HYUNDAI",
                "dealerCode": "AZ047",
                "zip": 85014,
                "state": "AZ",
                "id": "AZ047",
                "CBSA": "1998"
            },
            {
                "dealerName": "KEN GARFF HYUNDAI SURPRISE",
                "dealerCode": "AZ052",
                "zip": 85388,
                "state": "AZ",
                "id": "AZ052",
                "CBSA": "1998"
            },
            {
                "dealerName": "LARRY H MILLER HYUNDAI PEORIA",
                "dealerCode": "AZ053",
                "zip": 85382,
                "state": "AZ",
                "id": "AZ053",
                "CBSA": "1998"
            }
        ]
    },
    "CA BAKERSFIELD-DELANO [2417]": {
        "dealerInfo": [
            {
                "dealerName": "BAKERSFIELD HYUNDAI",
                "dealerCode": "CA391",
                "zip": 93313,
                "state": "CA",
                "id": "CA391",
                "CBSA": "2417"
            },
            {
                "dealerName": "LAGUNA NIGUEL HYUNDAI",
                "dealerCode": "CA01A",
                "zip": 92677,
                "state": "CA",
                "id": "CA01A",
                "CBSA": "2417"
            },
            {
                "dealerName": "CARDINALEWAY HYUNDAI OF GLENDORA",
                "dealerCode": "CA01B",
                "zip": 91740,
                "state": "CA",
                "id": "CA01B",
                "CBSA": "2417"
            },
            {
                "dealerName": "FONTANA HYUNDAI",
                "dealerCode": "CA01D",
                "zip": 92336,
                "state": "CA",
                "id": "CA01D",
                "CBSA": "2417"
            },
            {
                "dealerName": "HARBOR HYUNDAI",
                "dealerCode": "CA01E",
                "zip": 90807,
                "state": "CA",
                "id": "CA01E",
                "CBSA": "2417"
            },
            {
                "dealerName": "DIAMOND HYUNDAI PALMDALE",
                "dealerCode": "CA01H",
                "zip": 93551,
                "state": "CA",
                "id": "CA01H",
                "CBSA": "2417"
            },
            {
                "dealerName": "CARDINALEWAY HYUNDAI OF EL MONTE",
                "dealerCode": "CA01M",
                "zip": 91731,
                "state": "CA",
                "id": "CA01M",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI OF DOWNTOWN LOS ANGELES",
                "dealerCode": "CA01O",
                "zip": 90037,
                "state": "CA",
                "id": "CA01O",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI CARSON",
                "dealerCode": "CA01P",
                "zip": 90810,
                "state": "CA",
                "id": "CA01P",
                "CBSA": "2417"
            },
            {
                "dealerName": "AUTONATION HYUNDAI VALENCIA",
                "dealerCode": "CA01R",
                "zip": 91355,
                "state": "CA",
                "id": "CA01R",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI SANTA MONICA",
                "dealerCode": "CA01S",
                "zip": 90401,
                "state": "CA",
                "id": "CA01S",
                "CBSA": "2417"
            },
            {
                "dealerName": "PREMIER HYUNDAI OF MORENO VALLEY",
                "dealerCode": "CA01U",
                "zip": 92555,
                "state": "CA",
                "id": "CA01U",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI OF SANTA MARIA",
                "dealerCode": "CA01W",
                "zip": 93458,
                "state": "CA",
                "id": "CA01W",
                "CBSA": "2417"
            },
            {
                "dealerName": "ONTARIO HYUNDAI",
                "dealerCode": "CA121",
                "zip": 91761,
                "state": "CA",
                "id": "CA121",
                "CBSA": "2417"
            },
            {
                "dealerName": "TIM MORAN HYUNDAI HEMET",
                "dealerCode": "CA134",
                "zip": 92545,
                "state": "CA",
                "id": "CA134",
                "CBSA": "2417"
            },
            {
                "dealerName": "RIVERSIDE HYUNDAI",
                "dealerCode": "CA197",
                "zip": 92504,
                "state": "CA",
                "id": "CA197",
                "CBSA": "2417"
            },
            {
                "dealerName": "VICTORVILLE HYUNDAI",
                "dealerCode": "CA253",
                "zip": 92392,
                "state": "CA",
                "id": "CA253",
                "CBSA": "2417"
            },
            {
                "dealerName": "DOWNEY HYUNDAI",
                "dealerCode": "CA296",
                "zip": 90241,
                "state": "CA",
                "id": "CA296",
                "CBSA": "2417"
            },
            {
                "dealerName": "CARDINALEWAY HYUNDAI",
                "dealerCode": "CA300",
                "zip": 92882,
                "state": "CA",
                "id": "CA300",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI INLAND EMPIRE",
                "dealerCode": "CA309",
                "zip": 92354,
                "state": "CA",
                "id": "CA309",
                "CBSA": "2417"
            },
            {
                "dealerName": "HYUNDAI OF LA QUINTA",
                "dealerCode": "CA311",
                "zip": 92253,
                "state": "CA",
                "id": "CA311",
                "CBSA": "2417"
            },
            {
                "dealerName": "TUTTLE CLICK HYUNDAI",
                "dealerCode": "CA317",
                "zip": 92618,
                "state": "CA",
                "id": "CA317",
                "CBSA": "2417"
            },
            {
                "dealerName": "PUENTE HILLS HYUNDAI",
                "dealerCode": "CA321",
                "zip": 91748,
                "state": "CA",
                "id": "CA321",
                "CBSA": "2417"
            },
            {
                "dealerName": "NORM REEVES HYU SUPERSTORE CERRITOS",
                "dealerCode": "CA323",
                "zip": 90703,
                "state": "CA",
                "id": "CA323",
                "CBSA": "2417"
            },
            {
                "dealerName": "TUSTIN HYUNDAI",
                "dealerCode": "CA325",
                "zip": 92782,
                "state": "CA",
                "id": "CA325",
                "CBSA": "2417"
            },
            {
                "dealerName": "SOUTH BAY HYUNDAI",
                "dealerCode": "CA335",
                "zip": 90503,
                "state": "CA",
                "id": "CA335",
                "CBSA": "2417"
            },
            {
                "dealerName": "PALM SPRINGS HYUNDAI",
                "dealerCode": "CA340",
                "zip": 92264,
                "state": "CA",
                "id": "CA340",
                "CBSA": "2417"
            },
            {
                "dealerName": "ALEXANDER HYUNDAI OF OXNARD",
                "dealerCode": "CA359",
                "zip": 93036,
                "state": "CA",
                "id": "CA359",
                "CBSA": "2417"
            },
            {
                "dealerName": "TEMECULA HYUNDAI",
                "dealerCode": "CA366",
                "zip": 92591,
                "state": "CA",
                "id": "CA366",
                "CBSA": "2417"
            },
            {
                "dealerName": "GARDEN GROVE HYUNDAI",
                "dealerCode": "CA375",
                "zip": 92844,
                "state": "CA",
                "id": "CA375",
                "CBSA": "2417"
            },
            {
                "dealerName": "HUNTINGTON BEACH HYUNDAI",
                "dealerCode": "CA376",
                "zip": 92647,
                "state": "CA",
                "id": "CA376",
                "CBSA": "2417"
            }
        ]
    },
    "CA GREATER LOS ANGELES [2651]": {
        "dealerInfo": [
            {
                "dealerName": "WESTLAKE HYUNDAI",
                "dealerCode": "CA384",
                "zip": 91362,
                "state": "CA",
                "id": "CA384",
                "CBSA": "2651"
            },
            {
                "dealerName": "KEYES HYUNDAI OF VAN NUYS",
                "dealerCode": "CA393",
                "zip": 91401,
                "state": "CA",
                "id": "CA393",
                "CBSA": "2651"
            },
            {
                "dealerName": "KEYES HYUNDAI OF MISSION HILLS",
                "dealerCode": "CA400",
                "zip": 91345,
                "state": "CA",
                "id": "CA400",
                "CBSA": "2651"
            }
        ]
    },
    "CA SACRAMENTO ROSEVILLE ARDEN [2431]": {
        "dealerInfo": [
            {
                "dealerName": "HYUNDAI OF ROSEVILLE",
                "dealerCode": "CA232",
                "zip": 95661,
                "state": "CA",
                "id": "CA232",
                "CBSA": "2431"
            },
            {
                "dealerName": "ELK GROVE HYUNDAI",
                "dealerCode": "CA315",
                "zip": 95757,
                "state": "CA",
                "id": "CA315",
                "CBSA": "2431"
            },
            {
                "dealerName": "FOLSOM LAKE HYUNDAI",
                "dealerCode": "CA339",
                "zip": 95630,
                "state": "CA",
                "id": "CA339",
                "CBSA": "2431"
            }
        ]
    },
    "CA SAN DIEGO COUNTY EAST [2649]": {
        "dealerInfo": [
            {
                "dealerName": "PEDDER HYUNDAI OF POWAY",
                "dealerCode": "CA01C",
                "zip": 92064,
                "state": "CA",
                "id": "CA01C",
                "CBSA": "2649"
            },
            {
                "dealerName": "AUTONATION HYUNDAI CARLSBAD",
                "dealerCode": "CA01T",
                "zip": 92008,
                "state": "CA",
                "id": "CA01T",
                "CBSA": "2649"
            },
            {
                "dealerName": "DALTON HYUNDAI NATIONAL CITY",
                "dealerCode": "CA01V",
                "zip": 91950,
                "state": "CA",
                "id": "CA01V",
                "CBSA": "2649"
            }
        ]
    },
    "CA SAN DIEGO COUNTY NORTH [2647]": {
        "dealerInfo": [
            {
                "dealerName": "KEARNY MESA HYUNDAI",
                "dealerCode": "CA282",
                "zip": 92111,
                "state": "CA",
                "id": "CA282",
                "CBSA": "2647"
            },
            {
                "dealerName": "HYUNDAI OF ESCONDIDO",
                "dealerCode": "CA379",
                "zip": 92026,
                "state": "CA",
                "id": "CA379",
                "CBSA": "2647"
            },
            {
                "dealerName": "HYUNDAI OF EL CAJON",
                "dealerCode": "CA389",
                "zip": 92021,
                "state": "CA",
                "id": "CA389",
                "CBSA": "2647"
            }
        ]
    },
    "CA SAN JOSE-SUNNYVALE-SANTA CL [2434]": {
        "dealerInfo": [
            {
                "dealerName": "STEVENS CREEK HYUNDAI",
                "dealerCode": "CA01G",
                "zip": 95051,
                "state": "CA",
                "id": "CA01G",
                "CBSA": "2434"
            },
            {
                "dealerName": "VALLEJO HYUNDAI",
                "dealerCode": "CA01I",
                "zip": 94590,
                "state": "CA",
                "id": "CA01I",
                "CBSA": "2434"
            },
            {
                "dealerName": "HYUNDAI OF SAN BRUNO",
                "dealerCode": "CA01N",
                "zip": 94066,
                "state": "CA",
                "id": "CA01N",
                "CBSA": "2434"
            },
            {
                "dealerName": "MERCED HYUNDAI",
                "dealerCode": "CA01X",
                "zip": 95340,
                "state": "CA",
                "id": "CA01X",
                "CBSA": "2434"
            },
            {
                "dealerName": "HYUNDAI OF GILROY",
                "dealerCode": "CA01Y",
                "zip": 95020,
                "state": "CA",
                "id": "CA01Y",
                "CBSA": "2434"
            },
            {
                "dealerName": "FREMONT HYUNDAI",
                "dealerCode": "CA01Z",
                "zip": 94538,
                "state": "CA",
                "id": "CA01Z",
                "CBSA": "2434"
            },
            {
                "dealerName": "MANLY HYUNDAI",
                "dealerCode": "CA033",
                "zip": 95407,
                "state": "CA",
                "id": "CA033",
                "CBSA": "2434"
            },
            {
                "dealerName": "CAPITOL HYUNDAI",
                "dealerCode": "CA304",
                "zip": 95136,
                "state": "CA",
                "id": "CA304",
                "CBSA": "2434"
            },
            {
                "dealerName": "CENTRAL VALLEY HYUNDAI",
                "dealerCode": "CA307",
                "zip": 95356,
                "state": "CA",
                "id": "CA307",
                "CBSA": "2434"
            },
            {
                "dealerName": "FUTURE HYUNDAI OF CONCORD",
                "dealerCode": "CA308",
                "zip": 94520,
                "state": "CA",
                "id": "CA308",
                "CBSA": "2434"
            },
            {
                "dealerName": "DUBLIN HYUNDAI",
                "dealerCode": "CA320",
                "zip": 94568,
                "state": "CA",
                "id": "CA320",
                "CBSA": "2434"
            },
            {
                "dealerName": "ALL STAR HYUNDAI",
                "dealerCode": "CA331",
                "zip": 94565,
                "state": "CA",
                "id": "CA331",
                "CBSA": "2434"
            },
            {
                "dealerName": "HANLEES HILLTOP HYUNDAI",
                "dealerCode": "CA341",
                "zip": 94806,
                "state": "CA",
                "id": "CA341",
                "CBSA": "2434"
            },
            {
                "dealerName": "STOCKTON HYUNDAI",
                "dealerCode": "CA350",
                "zip": 95212,
                "state": "CA",
                "id": "CA350",
                "CBSA": "2434"
            },
            {
                "dealerName": "HYUNDAI OF VACAVILLE",
                "dealerCode": "CA362",
                "zip": 95687,
                "state": "CA",
                "id": "CA362",
                "CBSA": "2434"
            },
            {
                "dealerName": "SAN LEANDRO HYUNDAI",
                "dealerCode": "CA383",
                "zip": 94577,
                "state": "CA",
                "id": "CA383",
                "CBSA": "2434"
            },
            {
                "dealerName": "PLATINUM HYUNDAI",
                "dealerCode": "CA386",
                "zip": 95304,
                "state": "CA",
                "id": "CA386",
                "CBSA": "2434"
            }
        ]
    },
    "CA VALLEJO [2442]": {
        "dealerInfo": [
            {
                "dealerName": "VISALIA HYUNDAI",
                "dealerCode": "CA01J",
                "zip": 93292,
                "state": "CA",
                "id": "CA01J",
                "CBSA": "2442"
            }
        ]
    },
    "CO COLORADO SPRINGS [1425]": {
        "dealerInfo": [
            {
                "dealerName": "PHIL LONG HYUN OF CHAPEL HILLS",
                "dealerCode": "CO025",
                "zip": 80920,
                "state": "CO",
                "id": "CO025",
                "CBSA": "1425"
            },
            {
                "dealerName": "PHIL LONG HYUNDAI OF MOTOR CITY",
                "dealerCode": "CO038",
                "zip": 80905,
                "state": "CO",
                "id": "CO038",
                "CBSA": "1425"
            }
        ]
    },
    "CO DENVER-AURORA [1824]": {
        "dealerInfo": [
            {
                "dealerName": "MCDONALD  HYUNDAI",
                "dealerCode": "CO030",
                "zip": 80129,
                "state": "CO",
                "id": "CO030",
                "CBSA": "1824"
            },
            {
                "dealerName": "PLANET HYUNDAI",
                "dealerCode": "CO032",
                "zip": 80401,
                "state": "CO",
                "id": "CO032",
                "CBSA": "1824"
            },
            {
                "dealerName": "SCHOMP HYUNDAI",
                "dealerCode": "CO050",
                "zip": 80010,
                "state": "CO",
                "id": "CO050",
                "CBSA": "1824"
            },
            {
                "dealerName": "ARAPAHOE HYUNDAI",
                "dealerCode": "CO053",
                "zip": 80112,
                "state": "CO",
                "id": "CO053",
                "CBSA": "1824"
            },
            {
                "dealerName": "STEVINSON HYUNDAI OF FREDERICK",
                "dealerCode": "CO054",
                "zip": 80504,
                "state": "CO",
                "id": "CO054",
                "CBSA": "1824"
            },
            {
                "dealerName": "MOUNTAIN HYUNDAI",
                "dealerCode": "CO055",
                "zip": 80234,
                "state": "CO",
                "id": "CO055",
                "CBSA": "1824"
            }
        ]
    },
    "CO FORT COLLINS [1430]": {
        "dealerInfo": [
            {
                "dealerName": "CROSSROADS HYUNDAI",
                "dealerCode": "CO048",
                "zip": 80538,
                "state": "CO",
                "id": "CO048",
                "CBSA": "1430"
            }
        ]
    },
    "CO GREELEY [1830]": {
        "dealerInfo": [
            {
                "dealerName": "HYUNDAI OF GREELEY",
                "dealerCode": "CO040",
                "zip": 80634,
                "state": "CO",
                "id": "CO040",
                "CBSA": "1830"
            }
        ]
    },
    "CT Hartford [9912]": {
        "dealerInfo": [
            {
                "dealerName": "LIA HYUNDAI",
                "dealerCode": "CT020",
                "zip": 6120,
                "state": "CT",
                "id": "CT020",
                "CBSA": "9912"
            },
            {
                "dealerName": "LIA HYUNDAI",
                "dealerCode": "CT028",
                "zip": 6082,
                "state": "CT",
                "id": "CT028",
                "CBSA": "9912"
            },
            {
                "dealerName": "KEY HYUNDAI OF MANCHESTER",
                "dealerCode": "CT029",
                "zip": 6066,
                "state": "CT",
                "id": "CT029",
                "CBSA": "9912"
            },
            {
                "dealerName": "WILE HYUNDAI",
                "dealerCode": "CT040",
                "zip": 6237,
                "state": "CT",
                "id": "CT040",
                "CBSA": "9912"
            },
            {
                "dealerName": "SHORELINE HYUNDAI",
                "dealerCode": "CT041",
                "zip": 6475,
                "state": "CT",
                "id": "CT041",
                "CBSA": "9912"
            },
            {
                "dealerName": "COLONIAL HYUNDAI",
                "dealerCode": "CT043",
                "zip": 6320,
                "state": "CT",
                "id": "CT043",
                "CBSA": "9912"
            }
        ]
    },
    "CT NEW HAVEN MILFORD [2172]": {
        "dealerInfo": [
            {
                "dealerName": "KEY HYUNDAI OF MILFORD",
                "dealerCode": "CT033",
                "zip": 6460,
                "state": "CT",
                "id": "CT033",
                "CBSA": "2172"
            },
            {
                "dealerName": "BRANDFON HYUNDAI",
                "dealerCode": "CT038",
                "zip": 6513,
                "state": "CT",
                "id": "CT038",
                "CBSA": "2172"
            }
        ]
    },
    "FL CAPE CORAL-FORT MYERS [2409]": {
        "dealerInfo": [
            {
                "dealerName": "TAMIAMI HYUNDAI",
                "dealerCode": "FL130",
                "zip": 34109,
                "state": "FL",
                "id": "FL130",
                "CBSA": "2409"
            },
            {
                "dealerName": "HYUNDAI OF FORT MYERS",
                "dealerCode": "FL147",
                "zip": 33966,
                "state": "FL",
                "id": "FL147",
                "CBSA": "2409"
            }
        ]
    },
    "FL JACKSONVILLE [2411]": {
        "dealerInfo": [
            {
                "dealerName": "HYUNDAI OF ORANGE PARK",
                "dealerCode": "FL118",
                "zip": 32244,
                "state": "FL",
                "id": "FL118",
                "CBSA": "2411"
            },
            {
                "dealerName": "HYUNDAI OF ST. AUGUSTINE",
                "dealerCode": "FL127",
                "zip": 32084,
                "state": "FL",
                "id": "FL127",
                "CBSA": "2411"
            },
            {
                "dealerName": "WESTSIDE HYUNDAI",
                "dealerCode": "FL135",
                "zip": 32210,
                "state": "FL",
                "id": "FL135",
                "CBSA": "2411"
            },
            {
                "dealerName": "KEY HYUNDAI",
                "dealerCode": "FL140",
                "zip": 32216,
                "state": "FL",
                "id": "FL140",
                "CBSA": "2411"
            },
            {
                "dealerName": "JENKINS HYUNDAI OF JACKSONVILLE",
                "dealerCode": "FL144",
                "zip": 32225,
                "state": "FL",
                "id": "FL144",
                "CBSA": "2411"
            }
        ]
    },
    "FL MIAMI-FT LAUDERDALE-WEST PA [2412]": {
        "dealerInfo": [
            {
                "dealerName": "RICK CASE HYUNDAI",
                "dealerCode": "FL005",
                "zip": 33317,
                "state": "FL",
                "id": "FL005",
                "CBSA": "2412"
            },
            {
                "dealerName": "POTAMKIN HYUNDAI",
                "dealerCode": "FL008",
                "zip": 33014,
                "state": "FL",
                "id": "FL008",
                "CBSA": "2412"
            },
            {
                "dealerName": "KING HYUNDAI",
                "dealerCode": "FL057",
                "zip": 33441,
                "state": "FL",
                "id": "FL057",
                "CBSA": "2412"
            },
            {
                "dealerName": "ROUTE 60 HYUNDAI",
                "dealerCode": "FL101",
                "zip": 32966,
                "state": "FL",
                "id": "FL101",
                "CBSA": "2412"
            },
            {
                "dealerName": "WALLACE HYUNDAI",
                "dealerCode": "FL112",
                "zip": 34997,
                "state": "FL",
                "id": "FL112",
                "CBSA": "2412"
            },
            {
                "dealerName": "RICK CASE HYUNDAI",
                "dealerCode": "FL114",
                "zip": 33331,
                "state": "FL",
                "id": "FL114",
                "CBSA": "2412"
            },
            {
                "dealerName": "NAPLETON'S HYUNDAI",
                "dealerCode": "FL121",
                "zip": 33409,
                "state": "FL",
                "id": "FL121",
                "CBSA": "2412"
            },
            {
                "dealerName": "COCONUT CREEK HYUNDAI",
                "dealerCode": "FL122",
                "zip": 33073,
                "state": "FL",
                "id": "FL122",
                "CBSA": "2412"
            },
            {
                "dealerName": "NAPLETON'S NORTH PALM HYUNDAI",
                "dealerCode": "FL123",
                "zip": 33403,
                "state": "FL",
                "id": "FL123",
                "CBSA": "2412"
            },
            {
                "dealerName": "BRAMAN HYUNDAI",
                "dealerCode": "FL133",
                "zip": 33137,
                "state": "FL",
                "id": "FL133",
                "CBSA": "2412"
            },
            {
                "dealerName": "HOMESTEAD HYUNDAI",
                "dealerCode": "FL142",
                "zip": 33030,
                "state": "FL",
                "id": "FL142",
                "CBSA": "2412"
            },
            {
                "dealerName": "DELRAY HYUNDAI",
                "dealerCode": "FL151",
                "zip": 33483,
                "state": "FL",
                "id": "FL151",
                "CBSA": "2412"
            },
            {
                "dealerName": "WALLACE HYUNDAI OF FORT PIERCE",
                "dealerCode": "FL152",
                "zip": 34982,
                "state": "FL",
                "id": "FL152",
                "CBSA": "2412"
            },
            {
                "dealerName": "DORAL HYUNDAI",
                "dealerCode": "FL153",
                "zip": 33172,
                "state": "FL",
                "id": "FL153",
                "CBSA": "2412"
            },
            {
                "dealerName": "HYUNDAI OF NORTH MIAMI",
                "dealerCode": "FL154",
                "zip": 33169,
                "state": "FL",
                "id": "FL154",
                "CBSA": "2412"
            },
            {
                "dealerName": "KENDALL HYUNDAI",
                "dealerCode": "FL155",
                "zip": 33157,
                "state": "FL",
                "id": "FL155",
                "CBSA": "2412"
            }
        ]
    },
    "FL NORTH PORT-SARASOTA-BRADEN [2413]": {
        "dealerInfo": [
            {
                "dealerName": "GETTEL HYUNDAI OF SARASOTA",
                "dealerCode": "FL091",
                "zip": 34239,
                "state": "FL",
                "id": "FL091",
                "CBSA": "2413"
            },
            {
                "dealerName": "GETTEL HYUNDAI OF LAKEWOOD",
                "dealerCode": "FL136",
                "zip": 34208,
                "state": "FL",
                "id": "FL136",
                "CBSA": "2413"
            },
            {
                "dealerName": "GETTEL HYUNDAI OF CHARLOTTE COUNTY",
                "dealerCode": "FL139",
                "zip": 33950,
                "state": "FL",
                "id": "FL139",
                "CBSA": "2413"
            },
            {
                "dealerName": "HYUNDAI OF VENICE",
                "dealerCode": "FL146",
                "zip": 34292,
                "state": "FL",
                "id": "FL146",
                "CBSA": "2413"
            }
        ]
    },
    "FL OCALA [1405]": {
        "dealerInfo": [
            {
                "dealerName": "JENKINS HYUNDAI",
                "dealerCode": "FL089",
                "zip": 34474,
                "state": "FL",
                "id": "FL089",
                "CBSA": "1405"
            }
        ]
    },
    "FL ORLANDO-KISSIMMEE-SANFORD [2414]": {
        "dealerInfo": [
            {
                "dealerName": "LAKELAND HYUNDAI",
                "dealerCode": "FL073",
                "zip": 33815,
                "state": "FL",
                "id": "FL073",
                "CBSA": "2414"
            },
            {
                "dealerName": "DAYTONA HYUNDAI",
                "dealerCode": "FL074",
                "zip": 32117,
                "state": "FL",
                "id": "FL074",
                "CBSA": "2414"
            },
            {
                "dealerName": "COCOA HYUNDAI",
                "dealerCode": "FL098",
                "zip": 32926,
                "state": "FL",
                "id": "FL098",
                "CBSA": "2414"
            },
            {
                "dealerName": "UNIVERSAL HYUNDAI",
                "dealerCode": "FL103",
                "zip": 32837,
                "state": "FL",
                "id": "FL103",
                "CBSA": "2414"
            },
            {
                "dealerName": "JENKINS HYUNDAI OF LEESBURG",
                "dealerCode": "FL120",
                "zip": 34788,
                "state": "FL",
                "id": "FL120",
                "CBSA": "2414"
            },
            {
                "dealerName": "GREENWAY HYUNDAI ORLANDO",
                "dealerCode": "FL124",
                "zip": 32808,
                "state": "FL",
                "id": "FL124",
                "CBSA": "2414"
            },
            {
                "dealerName": "HOLLER HYUNDAI",
                "dealerCode": "FL125",
                "zip": 32789,
                "state": "FL",
                "id": "FL125",
                "CBSA": "2414"
            },
            {
                "dealerName": "RED HOAGLAND HYUNDAI",
                "dealerCode": "FL126",
                "zip": 33884,
                "state": "FL",
                "id": "FL126",
                "CBSA": "2414"
            },
            {
                "dealerName": "HEADQUARTER HYUNDAI",
                "dealerCode": "FL137",
                "zip": 32771,
                "state": "FL",
                "id": "FL137",
                "CBSA": "2414"
            },
            {
                "dealerName": "COGGIN DELAND HYUNDAI",
                "dealerCode": "FL138",
                "zip": 32720,
                "state": "FL",
                "id": "FL138",
                "CBSA": "2414"
            },
            {
                "dealerName": "HYUNDAI OF CENTRAL FLORIDA",
                "dealerCode": "FL141",
                "zip": 34711,
                "state": "FL",
                "id": "FL141",
                "CBSA": "2414"
            }
        ]
    },
    "FL PORT ST LUCIE [2453]": {
        "dealerInfo": [
            {
                "dealerName": "COASTAL HYUNDAI",
                "dealerCode": "FL049",
                "zip": 32901,
                "state": "FL",
                "id": "FL049",
                "CBSA": "2453"
            }
        ]
    },
    "FL TAMPA-ST PETERSBURG-CLEARWA [2415]": {
        "dealerInfo": [
            {
                "dealerName": "FITZGERALD'S CNTRYSDE HYUNDAI",
                "dealerCode": "FL062",
                "zip": 33761,
                "state": "FL",
                "id": "FL062",
                "CBSA": "2415"
            },
            {
                "dealerName": "CROWN HYUNDAI",
                "dealerCode": "FL076",
                "zip": 33714,
                "state": "FL",
                "id": "FL076",
                "CBSA": "2415"
            },
            {
                "dealerName": "COURTESY HYUNDAI",
                "dealerCode": "FL081",
                "zip": 33614,
                "state": "FL",
                "id": "FL081",
                "CBSA": "2415"
            },
            {
                "dealerName": "BRANDON HYUNDAI",
                "dealerCode": "FL143",
                "zip": 33619,
                "state": "FL",
                "id": "FL143",
                "CBSA": "2415"
            },
            {
                "dealerName": "HYUNDAI OF NEW PORT RICHEY",
                "dealerCode": "FL148",
                "zip": 34652,
                "state": "FL",
                "id": "FL148",
                "CBSA": "2415"
            },
            {
                "dealerName": "HYUNDAI OF WESLEY CHAPEL",
                "dealerCode": "FL149",
                "zip": 33544,
                "state": "FL",
                "id": "FL149",
                "CBSA": "2415"
            }
        ]
    },
    "GA ATLANTA S-SPRINGS ROSWELL [2074]": {
        "dealerInfo": [
            {
                "dealerName": "RICK CASE HYUNDAI",
                "dealerCode": "GA002",
                "zip": 30096,
                "state": "GA",
                "id": "GA002",
                "CBSA": "2074"
            },
            {
                "dealerName": "ED VOYLES HYUNDAI",
                "dealerCode": "GA003",
                "zip": 30080,
                "state": "GA",
                "id": "GA003",
                "CBSA": "2074"
            },
            {
                "dealerName": "SOUTHTOWNE HYUNDAI",
                "dealerCode": "GA015",
                "zip": 30274,
                "state": "GA",
                "id": "GA015",
                "CBSA": "2074"
            },
            {
                "dealerName": "SOUTHTOWNE HYUNDAI OF NEWNAN",
                "dealerCode": "GA035",
                "zip": 30265,
                "state": "GA",
                "id": "GA035",
                "CBSA": "2074"
            },
            {
                "dealerName": "JIM ELLIS HYUNDAI",
                "dealerCode": "GA037",
                "zip": 30341,
                "state": "GA",
                "id": "GA037",
                "CBSA": "2074"
            },
            {
                "dealerName": "HYUNDAI OF KENNESAW",
                "dealerCode": "GA038",
                "zip": 30144,
                "state": "GA",
                "id": "GA038",
                "CBSA": "2074"
            },
            {
                "dealerName": "RICK CASE HYUNDAI",
                "dealerCode": "GA041",
                "zip": 30076,
                "state": "GA",
                "id": "GA041",
                "CBSA": "2074"
            },
            {
                "dealerName": "TERRY REID HYUNDAI",
                "dealerCode": "GA063",
                "zip": 30120,
                "state": "GA",
                "id": "GA063",
                "CBSA": "2074"
            },
            {
                "dealerName": "AUTONATION HYUNDAI MALL OF GEORGIA",
                "dealerCode": "GA065",
                "zip": 30519,
                "state": "GA",
                "id": "GA065",
                "CBSA": "2074"
            },
            {
                "dealerName": "NALLEY HYUNDAI",
                "dealerCode": "GA070",
                "zip": 30038,
                "state": "GA",
                "id": "GA070",
                "CBSA": "2074"
            },
            {
                "dealerName": "POTAMKIN HYUNDAI STONE MOUNTAIN",
                "dealerCode": "GA084",
                "zip": 30047,
                "state": "GA",
                "id": "GA084",
                "CBSA": "2074"
            },
            {
                "dealerName": "HYUNDAI OF CUMMING",
                "dealerCode": "GA087",
                "zip": 30041,
                "state": "GA",
                "id": "GA087",
                "CBSA": "2074"
            },
            {
                "dealerName": "SHOTTENKIRK HYUNDAI",
                "dealerCode": "GA088",
                "zip": 30114,
                "state": "GA",
                "id": "GA088",
                "CBSA": "2074"
            },
            {
                "dealerName": "SHOTTENKIRK HYUNDAI ROME",
                "dealerCode": "GA091",
                "zip": 30161,
                "state": "GA",
                "id": "GA091",
                "CBSA": "2074"
            },
            {
                "dealerName": "MCDONOUGH HYUNDAI",
                "dealerCode": "GA092",
                "zip": 30253,
                "state": "GA",
                "id": "GA092",
                "CBSA": "2074"
            },
            {
                "dealerName": "GAINESVILLE HYUNDAI",
                "dealerCode": "GA094",
                "zip": 30504,
                "state": "GA",
                "id": "GA094",
                "CBSA": "2074"
            },
            {
                "dealerName": "ALM HYUNDAI WEST",
                "dealerCode": "GA096",
                "zip": 30122,
                "state": "GA",
                "id": "GA096",
                "CBSA": "2074"
            },
            {
                "dealerName": "ALM HYUNDAI ATHENS",
                "dealerCode": "GA098",
                "zip": 30606,
                "state": "GA",
                "id": "GA098",
                "CBSA": "2074"
            }
        ]
    },
    "GA SAVANNAH [7]": {
        "dealerInfo": [
            {
                "dealerName": "AUTONATION HYUNDAI SAVANNAH",
                "dealerCode": "GA090",
                "zip": 31406,
                "state": "GA",
                "id": "GA090",
                "CBSA": "7"
            }
        ]
    },
    "GA VALDOSTA [2252]": {
        "dealerInfo": [
            {
                "dealerName": "LANGDALE HYUNDAI OF SOUTH GEORGIA",
                "dealerCode": "GA066",
                "zip": 31602,
                "state": "GA",
                "id": "GA066",
                "CBSA": "2252"
            }
        ]
    },
    "GA-SC AUGUSTA-RICHMOND COUNTY [2078]": {
        "dealerInfo": [
            {
                "dealerName": "TAYLOR HYUNDAI",
                "dealerCode": "GA026",
                "zip": 30907,
                "state": "GA",
                "id": "GA026",
                "CBSA": "2078"
            },
            {
                "dealerName": "TERRY LAMBERT HYUNDAI",
                "dealerCode": "SC051",
                "zip": 29841,
                "state": "SC",
                "id": "SC051",
                "CBSA": "2078"
            }
        ]
    },
    "ID BOISE CITY [2492]": {
        "dealerInfo": [
            {
                "dealerName": "BRONCO MOTORS HYUNDAI",
                "dealerCode": "ID007",
                "zip": 83704,
                "state": "ID",
                "id": "ID007",
                "CBSA": "2492"
            },
            {
                "dealerName": "BRONCO MOTORS HYUNDAI WEST",
                "dealerCode": "ID016",
                "zip": 83687,
                "state": "ID",
                "id": "ID016",
                "CBSA": "2492"
            }
        ]
    },
    "ID COEUR D ALENE [2494]": {
        "dealerInfo": [
            {
                "dealerName": "MIDWAY HYUNDAI",
                "dealerCode": "ID019",
                "zip": 83854,
                "state": "ID",
                "id": "ID019",
                "CBSA": "2494"
            }
        ]
    },
    "ID NON PCP [0997]": {
        "dealerInfo": [
            {
                "dealerName": "STONE'S HYUNDAI",
                "dealerCode": "ID020",
                "zip": 83201,
                "state": "ID",
                "id": "ID020",
                "CBSA": "0997"
            }
        ]
    },
    "ID TWIN FALLS [2501]": {
        "dealerInfo": [
            {
                "dealerName": "ROB GREEN HYUNDAI",
                "dealerCode": "ID009",
                "zip": 83301,
                "state": "ID",
                "id": "ID009",
                "CBSA": "2501"
            }
        ]
    },
    "IL CHAMPAIGN-URBANA [2281]": {
        "dealerInfo": [
            {
                "dealerName": "NAPLETON'S HYUNDAI OF URBANA",
                "dealerCode": "IL088",
                "zip": 61801,
                "state": "IL",
                "id": "IL088",
                "CBSA": "2281"
            }
        ]
    },
    "IL-IA DAVENPORT MOLINE ROCK IS [2296]": {
        "dealerInfo": [
            {
                "dealerName": "SMART HYUNDAI OF DAVENPORT",
                "dealerCode": "IA013",
                "zip": 52806,
                "state": "IA",
                "id": "IA013",
                "CBSA": "2296"
            },
            {
                "dealerName": "GREEN FAMILY HYUNDAI",
                "dealerCode": "IL083",
                "zip": 61265,
                "state": "IL",
                "id": "IL083",
                "CBSA": "2296"
            }
        ]
    },
    "IL-IN-WI CHICAGO  NAPERVILLE  ELGIN [2575]": {
        "dealerInfo": [
            {
                "dealerName": "NAPLETON HYUNDAI OF GLENVIEW",
                "dealerCode": "IL003",
                "zip": 60025,
                "state": "IL",
                "id": "IL003",
                "CBSA": "2575"
            },
            {
                "dealerName": "GREGORY HYUNDAI",
                "dealerCode": "IL044",
                "zip": 60035,
                "state": "IL",
                "id": "IL044",
                "CBSA": "2575"
            },
            {
                "dealerName": "GURNEE HYUNDAI",
                "dealerCode": "IL054",
                "zip": 60031,
                "state": "IL",
                "id": "IL054",
                "CBSA": "2575"
            },
            {
                "dealerName": "D'ARCY HYUNDAI",
                "dealerCode": "IL059",
                "zip": 60435,
                "state": "IL",
                "id": "IL059",
                "CBSA": "2575"
            },
            {
                "dealerName": "SCHIMMER HYUNDAI",
                "dealerCode": "IL060",
                "zip": 61354,
                "state": "IL",
                "id": "IL060",
                "CBSA": "2575"
            },
            {
                "dealerName": "HYUNDAI ON PERRYVILLE",
                "dealerCode": "IL062",
                "zip": 61107,
                "state": "IL",
                "id": "IL062",
                "CBSA": "2575"
            },
            {
                "dealerName": "FAMILY HYUNDAI",
                "dealerCode": "IL063",
                "zip": 60477,
                "state": "IL",
                "id": "IL063",
                "CBSA": "2575"
            },
            {
                "dealerName": "ETTLESON HYUNDAI",
                "dealerCode": "IL066",
                "zip": 60525,
                "state": "IL",
                "id": "IL066",
                "CBSA": "2575"
            },
            {
                "dealerName": "ELGIN HYUNDAI",
                "dealerCode": "IL068",
                "zip": 60103,
                "state": "IL",
                "id": "IL068",
                "CBSA": "2575"
            },
            {
                "dealerName": "PATRICK HYUNDAI",
                "dealerCode": "IL069",
                "zip": 60173,
                "state": "IL",
                "id": "IL069",
                "CBSA": "2575"
            },
            {
                "dealerName": "NAPLETON'S HYUNDAI",
                "dealerCode": "IL071",
                "zip": 60409,
                "state": "IL",
                "id": "IL071",
                "CBSA": "2575"
            },
            {
                "dealerName": "WORLD HYUNDAI MATTESON",
                "dealerCode": "IL072",
                "zip": 60443,
                "state": "IL",
                "id": "IL072",
                "CBSA": "2575"
            },
            {
                "dealerName": "MCGRATH CITY HYUNDAI",
                "dealerCode": "IL073",
                "zip": 60707,
                "state": "IL",
                "id": "IL073",
                "CBSA": "2575"
            },
            {
                "dealerName": "WILKINS HYUNDAI",
                "dealerCode": "IL076",
                "zip": 60126,
                "state": "IL",
                "id": "IL076",
                "CBSA": "2575"
            },
            {
                "dealerName": "GERALD HYUNDAI",
                "dealerCode": "IL080",
                "zip": 60542,
                "state": "IL",
                "id": "IL080",
                "CBSA": "2575"
            },
            {
                "dealerName": "NAPLETON'S VALLEY HYUNDAI",
                "dealerCode": "IL082",
                "zip": 60504,
                "state": "IL",
                "id": "IL082",
                "CBSA": "2575"
            },
            {
                "dealerName": "AUTONATION HYUNDAI O'HARE",
                "dealerCode": "IL085",
                "zip": 60018,
                "state": "IL",
                "id": "IL085",
                "CBSA": "2575"
            },
            {
                "dealerName": "ROSEN HYUNDAI",
                "dealerCode": "IL087",
                "zip": 60102,
                "state": "IL",
                "id": "IL087",
                "CBSA": "2575"
            },
            {
                "dealerName": "HYUNDAI OF LINCOLNWOOD",
                "dealerCode": "IL093",
                "zip": 60712,
                "state": "IL",
                "id": "IL093",
                "CBSA": "2575"
            },
            {
                "dealerName": "HYUNDAI OF PALATINE",
                "dealerCode": "IL094",
                "zip": 60074,
                "state": "IL",
                "id": "IL094",
                "CBSA": "2575"
            },
            {
                "dealerName": "HAPPY HYUNDAI OF LIBERTYVILLE",
                "dealerCode": "IL095",
                "zip": 60048,
                "state": "IL",
                "id": "IL095",
                "CBSA": "2575"
            },
            {
                "dealerName": "KUNES HYUNDAI OF SYCAMORE",
                "dealerCode": "IL096",
                "zip": 60178,
                "state": "IL",
                "id": "IL096",
                "CBSA": "2575"
            },
            {
                "dealerName": "NAPLETON DOWNTOWN HYUNDAI",
                "dealerCode": "IL097",
                "zip": 60616,
                "state": "IL",
                "id": "IL097",
                "CBSA": "2575"
            },
            {
                "dealerName": "CASTLE HYUNDAI DOWNERS GROVE",
                "dealerCode": "IL098",
                "zip": 60515,
                "state": "IL",
                "id": "IL098",
                "CBSA": "2575"
            },
            {
                "dealerName": "CASTLE HYUNDAI OAK LAWN",
                "dealerCode": "IL101",
                "zip": 60453,
                "state": "IL",
                "id": "IL101",
                "CBSA": "2575"
            },
            {
                "dealerName": "WEBB HYUNDAI",
                "dealerCode": "IN038",
                "zip": 46322,
                "state": "IN",
                "id": "IN038",
                "CBSA": "2575"
            },
            {
                "dealerName": "WEBB HYUNDAI MERRILLVILLE",
                "dealerCode": "IN045",
                "zip": 46410,
                "state": "IN",
                "id": "IN045",
                "CBSA": "2575"
            },
            {
                "dealerName": "MICHIGAN CITY HYUNDAI",
                "dealerCode": "IN051",
                "zip": 46360,
                "state": "IN",
                "id": "IN051",
                "CBSA": "2575"
            },
            {
                "dealerName": "ROSEN HYUNDAI OF KENOSHA",
                "dealerCode": "WI038",
                "zip": 53142,
                "state": "WI",
                "id": "WI038",
                "CBSA": "2575"
            }
        ]
    },
    "KS TOPEKA [2369]": {
        "dealerInfo": [
            {
                "dealerName": "NOLLER HYUNDAI",
                "dealerCode": "KS009",
                "zip": 66611,
                "state": "KS",
                "id": "KS009",
                "CBSA": "2369"
            }
        ]
    },
    "KS WICHITA [2370]": {
        "dealerInfo": [
            {
                "dealerName": "HATCHETT HYUNDAI",
                "dealerCode": "KS003",
                "zip": 67206,
                "state": "KS",
                "id": "KS003",
                "CBSA": "2370"
            },
            {
                "dealerName": "HATCHETT HYUNDAI WEST",
                "dealerCode": "KS013",
                "zip": 67212,
                "state": "KS",
                "id": "KS013",
                "CBSA": "2370"
            }
        ]
    },
    "MD BALTIMORE COLUMBIA TOWSON [2021]": {
        "dealerInfo": [
            {
                "dealerName": "BEL AIR HYUNDAI",
                "dealerCode": "MD021",
                "zip": 21014,
                "state": "MD",
                "id": "MD021",
                "CBSA": "2021"
            },
            {
                "dealerName": "BOB BELL HYUNDAI",
                "dealerCode": "MD022",
                "zip": 21061,
                "state": "MD",
                "id": "MD022",
                "CBSA": "2021"
            },
            {
                "dealerName": "LEN STOLER HYUNDAI",
                "dealerCode": "MD026",
                "zip": 21117,
                "state": "MD",
                "id": "MD026",
                "CBSA": "2021"
            },
            {
                "dealerName": "ANTWERPEN HYUNDAI",
                "dealerCode": "MD028",
                "zip": 21228,
                "state": "MD",
                "id": "MD028",
                "CBSA": "2021"
            },
            {
                "dealerName": "ANTWERPEN HYUNDAI COLUMBIA",
                "dealerCode": "MD032",
                "zip": 21029,
                "state": "MD",
                "id": "MD032",
                "CBSA": "2021"
            },
            {
                "dealerName": "OURISMAN HYUNDAI",
                "dealerCode": "MD038",
                "zip": 20724,
                "state": "MD",
                "id": "MD038",
                "CBSA": "2021"
            },
            {
                "dealerName": "ANNAPOLIS HYUNDAI",
                "dealerCode": "MD040",
                "zip": 21037,
                "state": "MD",
                "id": "MD040",
                "CBSA": "2021"
            },
            {
                "dealerName": "HERITAGE HYUNDAI TOWSON",
                "dealerCode": "MD042",
                "zip": 21204,
                "state": "MD",
                "id": "MD042",
                "CBSA": "2021"
            },
            {
                "dealerName": "HYUNDAI OF DUNDALK",
                "dealerCode": "MD045",
                "zip": 21222,
                "state": "MD",
                "id": "MD045",
                "CBSA": "2021"
            },
            {
                "dealerName": "CHAMBERSBURG HYUNDAI",
                "dealerCode": "PA096",
                "zip": 17202,
                "state": "PA",
                "id": "PA096",
                "CBSA": "2021"
            }
        ]
    },
    "MD CALIFORNIA-LEXINGTON PARK [2022]": {
        "dealerInfo": [
            {
                "dealerName": "TEAM HYUNDAI",
                "dealerCode": "MD030",
                "zip": 20653,
                "state": "MD",
                "id": "MD030",
                "CBSA": "2022"
            },
            {
                "dealerName": "PRESTON HYUNDAI",
                "dealerCode": "MD035",
                "zip": 21643,
                "state": "MD",
                "id": "MD035",
                "CBSA": "2022"
            }
        ]
    },
    "MD-VA-DC WASHINGTON-ARL-ALEX [2088]": {
        "dealerInfo": [
            {
                "dealerName": "POHANKA HYUNDAI",
                "dealerCode": "MD006",
                "zip": 20743,
                "state": "MD",
                "id": "MD006",
                "CBSA": "2088"
            },
            {
                "dealerName": "IDEAL HYUNDAI",
                "dealerCode": "MD013",
                "zip": 21701,
                "state": "MD",
                "id": "MD013",
                "CBSA": "2088"
            },
            {
                "dealerName": "FITZGERALDS LAKEFOREST HYUNDAI",
                "dealerCode": "MD020",
                "zip": 20879,
                "state": "MD",
                "id": "MD020",
                "CBSA": "2088"
            },
            {
                "dealerName": "FITZGERALD HYUNDAI",
                "dealerCode": "MD034",
                "zip": 20852,
                "state": "MD",
                "id": "MD034",
                "CBSA": "2088"
            },
            {
                "dealerName": "SHEEHY HYUNDAI OF WALDORF",
                "dealerCode": "MD041",
                "zip": 20601,
                "state": "MD",
                "id": "MD041",
                "CBSA": "2088"
            },
            {
                "dealerName": "OURISMAN HYUNDAI OF BOWIE",
                "dealerCode": "MD043",
                "zip": 20716,
                "state": "MD",
                "id": "MD043",
                "CBSA": "2088"
            },
            {
                "dealerName": "COLLEGE PARK HYUNDAI",
                "dealerCode": "MD044",
                "zip": 20740,
                "state": "MD",
                "id": "MD044",
                "CBSA": "2088"
            },
            {
                "dealerName": "POHANKA HYUNDAI OF FREDERICKSBURG",
                "dealerCode": "VA014",
                "zip": 22408,
                "state": "VA",
                "id": "VA014",
                "CBSA": "2088"
            },
            {
                "dealerName": "ALEXANDRIA HYUNDAI",
                "dealerCode": "VA028",
                "zip": 22301,
                "state": "VA",
                "id": "VA028",
                "CBSA": "2088"
            },
            {
                "dealerName": "SAFFORD HYUNDAI OF SPRINGFIELD",
                "dealerCode": "VA052",
                "zip": 22150,
                "state": "VA",
                "id": "VA052",
                "CBSA": "2088"
            },
            {
                "dealerName": "CMA'S HYUNDAI OF WINCHESTER",
                "dealerCode": "VA057",
                "zip": 22601,
                "state": "VA",
                "id": "VA057",
                "CBSA": "2088"
            },
            {
                "dealerName": "SAFFORD BROWN HYUNDAI MANASSAS",
                "dealerCode": "VA059",
                "zip": 20110,
                "state": "VA",
                "id": "VA059",
                "CBSA": "2088"
            },
            {
                "dealerName": "SAFFORD BROWN HYUNDAI LEESBURG",
                "dealerCode": "VA060",
                "zip": 20176,
                "state": "VA",
                "id": "VA060",
                "CBSA": "2088"
            },
            {
                "dealerName": "SAFFORD BROWN HYUNDAI FAIRFAX",
                "dealerCode": "VA061",
                "zip": 22030,
                "state": "VA",
                "id": "VA061",
                "CBSA": "2088"
            },
            {
                "dealerName": "KOONS HYUNDAI WOODBRIDGE",
                "dealerCode": "VA066",
                "zip": 22191,
                "state": "VA",
                "id": "VA066",
                "CBSA": "2088"
            },
            {
                "dealerName": "SHEEHY HYUNDAI OF CHANTILLY",
                "dealerCode": "VA068",
                "zip": 20151,
                "state": "VA",
                "id": "VA068",
                "CBSA": "2088"
            }
        ]
    },
    "MD-WV HAGERSTOWN MARTINSBURG [1980]": {
        "dealerInfo": [
            {
                "dealerName": "MASSEY HYUNDAI",
                "dealerCode": "MD010",
                "zip": 21740,
                "state": "MD",
                "id": "MD010",
                "CBSA": "1980"
            }
        ]
    },
    "MI DETROIT [1840]": {
        "dealerInfo": [
            {
                "dealerName": "GLASSMAN HYUNDAI",
                "dealerCode": "MI007",
                "zip": 48034,
                "state": "MI",
                "id": "MI007",
                "CBSA": "1840"
            },
            {
                "dealerName": "LAFONTAINE HYUNDAI DEARBORN",
                "dealerCode": "MI027",
                "zip": 48124,
                "state": "MI",
                "id": "MI027",
                "CBSA": "1840"
            },
            {
                "dealerName": "RANDY WISE HYUNDAI",
                "dealerCode": "MI039",
                "zip": 48507,
                "state": "MI",
                "id": "MI039",
                "CBSA": "1840"
            },
            {
                "dealerName": "FELDMAN HYUNDAI OF NEW HUDSON",
                "dealerCode": "MI048",
                "zip": 48165,
                "state": "MI",
                "id": "MI048",
                "CBSA": "1840"
            },
            {
                "dealerName": "ELDER HYUNDAI",
                "dealerCode": "MI056",
                "zip": 48044,
                "state": "MI",
                "id": "MI056",
                "CBSA": "1840"
            },
            {
                "dealerName": "FOX ANN ARBOR HYUNDAI",
                "dealerCode": "MI058",
                "zip": 48103,
                "state": "MI",
                "id": "MI058",
                "CBSA": "1840"
            },
            {
                "dealerName": "SUBURBAN HYUNDAI OF TROY",
                "dealerCode": "MI060",
                "zip": 48084,
                "state": "MI",
                "id": "MI060",
                "CBSA": "1840"
            },
            {
                "dealerName": "LAFONTAINE HYUNDAI OF LIVONIA",
                "dealerCode": "MI061",
                "zip": 48150,
                "state": "MI",
                "id": "MI061",
                "CBSA": "1840"
            }
        ]
    },
    "MO JOPLIN [1030]": {
        "dealerInfo": [
            {
                "dealerName": "FLETCHER HYUNDAI",
                "dealerCode": "MO036",
                "zip": 64804,
                "state": "MO",
                "id": "MO036",
                "CBSA": "1030"
            }
        ]
    },
    "MO-KS KANSAS CITY [2059]": {
        "dealerInfo": [
            {
                "dealerName": "MCCARTHY OLATHE HYUNDAI",
                "dealerCode": "KS010",
                "zip": 66061,
                "state": "KS",
                "id": "KS010",
                "CBSA": "2059"
            },
            {
                "dealerName": "LAIRD NOLLER HYUNDAI",
                "dealerCode": "KS011",
                "zip": 66046,
                "state": "KS",
                "id": "KS011",
                "CBSA": "2059"
            },
            {
                "dealerName": "VICTORY HYUNDAI AT THE LEGENDS",
                "dealerCode": "KS020",
                "zip": 66111,
                "state": "KS",
                "id": "KS020",
                "CBSA": "2059"
            },
            {
                "dealerName": "KANSAS CITY HYUNDAI",
                "dealerCode": "KS021",
                "zip": 66203,
                "state": "KS",
                "id": "KS021",
                "CBSA": "2059"
            },
            {
                "dealerName": "NORTHTOWNE HYUNDAI",
                "dealerCode": "MO006",
                "zip": 64118,
                "state": "MO",
                "id": "MO006",
                "CBSA": "2059"
            },
            {
                "dealerName": "MCCARTHY HYUNDAI",
                "dealerCode": "MO029",
                "zip": 64015,
                "state": "MO",
                "id": "MO029",
                "CBSA": "2059"
            },
            {
                "dealerName": "REED HYUNDAI",
                "dealerCode": "MO047",
                "zip": 64503,
                "state": "MO",
                "id": "MO047",
                "CBSA": "2059"
            }
        ]
    },
    "MS JACKSON [2201]": {
        "dealerInfo": [
            {
                "dealerName": "HALLMARK HYUNDAI FLOWOOD",
                "dealerCode": "MS042",
                "zip": 39232,
                "state": "MS",
                "id": "MS042",
                "CBSA": "2201"
            },
            {
                "dealerName": "HALLMARK HYUNDAI NORTH",
                "dealerCode": "MS043",
                "zip": 39157,
                "state": "MS",
                "id": "MS043",
                "CBSA": "2201"
            }
        ]
    },
    "MT BILLINGS [2471]": {
        "dealerInfo": [
            {
                "dealerName": "UNDERRINER HYUNDAI",
                "dealerCode": "MT007",
                "zip": 59106,
                "state": "MT",
                "id": "MT007",
                "CBSA": "2471"
            }
        ]
    },
    "NC ASHEVILLE [615]": {
        "dealerInfo": [
            {
                "dealerName": "JOE PECHELES HYUNDAI",
                "dealerCode": "NC018",
                "zip": 27858,
                "state": "NC",
                "id": "NC018",
                "CBSA": "615"
            },
            {
                "dealerName": "HUNTER HYUNDAI",
                "dealerCode": "NC021",
                "zip": 28732,
                "state": "NC",
                "id": "NC021",
                "CBSA": "615"
            },
            {
                "dealerName": "HYUNDAI OF ASHEVILLE",
                "dealerCode": "NC060",
                "zip": 28805,
                "state": "NC",
                "id": "NC060",
                "CBSA": "615"
            }
        ]
    },
    "NC-SC CHARLOTTE-CONCORD-GASTON [2030]": {
        "dealerInfo": [
            {
                "dealerName": "BOB KING HYUNDAI",
                "dealerCode": "NC032",
                "zip": 27127,
                "state": "NC",
                "id": "NC032",
                "CBSA": "2030"
            },
            {
                "dealerName": "KEFFER HYUNDAI",
                "dealerCode": "NC038",
                "zip": 28105,
                "state": "NC",
                "id": "NC038",
                "CBSA": "2030"
            },
            {
                "dealerName": "KEITH HAWTHORNE HYUNDAI",
                "dealerCode": "NC041",
                "zip": 28098,
                "state": "NC",
                "id": "NC041",
                "CBSA": "2030"
            },
            {
                "dealerName": "LAKE NORMAN HYUNDAI",
                "dealerCode": "NC044",
                "zip": 28031,
                "state": "NC",
                "id": "NC044",
                "CBSA": "2030"
            },
            {
                "dealerName": "MODERN HYUNDAI OF CONCORD",
                "dealerCode": "NC048",
                "zip": 28027,
                "state": "NC",
                "id": "NC048",
                "CBSA": "2030"
            },
            {
                "dealerName": "SOUTH CHARLOTTE HYUNDAI",
                "dealerCode": "NC064",
                "zip": 28134,
                "state": "NC",
                "id": "NC064",
                "CBSA": "2030"
            },
            {
                "dealerName": "FLOW HYUNDAI OF STATESVILLE",
                "dealerCode": "NC071",
                "zip": 28625,
                "state": "NC",
                "id": "NC071",
                "CBSA": "2030"
            },
            {
                "dealerName": "HYUNDAI OF UNION COUNTY",
                "dealerCode": "NC074",
                "zip": 28110,
                "state": "NC",
                "id": "NC074",
                "CBSA": "2030"
            },
            {
                "dealerName": "FORT MILL HYUNDAI",
                "dealerCode": "SC030",
                "zip": 29708,
                "state": "SC",
                "id": "SC030",
                "CBSA": "2030"
            }
        ]
    },
    "NE-IA OMAHA COUNCIL BLUFFS [1941]": {
        "dealerInfo": [
            {
                "dealerName": "EDWARDS HYUNDAI",
                "dealerCode": "IA009",
                "zip": 51501,
                "state": "IA",
                "id": "IA009",
                "CBSA": "1941"
            },
            {
                "dealerName": "WOODHOUSE PLACE HYUNDAI",
                "dealerCode": "NE011",
                "zip": 68138,
                "state": "NE",
                "id": "NE011",
                "CBSA": "1941"
            },
            {
                "dealerName": "BEARDMORE HYUNDAI",
                "dealerCode": "NE012",
                "zip": 68005,
                "state": "NE",
                "id": "NE012",
                "CBSA": "1941"
            },
            {
                "dealerName": "WOODHOUSE HYUNDAI",
                "dealerCode": "NE013",
                "zip": 68022,
                "state": "NE",
                "id": "NE013",
                "CBSA": "1941"
            }
        ]
    },
    "NH CONCORD [2152]": {
        "dealerInfo": [
            {
                "dealerName": "GRAPPONE HYUNDAI",
                "dealerCode": "NH011",
                "zip": 3304,
                "state": "NH",
                "id": "NH011",
                "CBSA": "2152"
            }
        ]
    },
    "NH MANCHESTER NASHUA [2171]": {
        "dealerInfo": [
            {
                "dealerName": "NASHUA HYUNDAI",
                "dealerCode": "NH012",
                "zip": 3060,
                "state": "NH",
                "id": "NH012",
                "CBSA": "2171"
            },
            {
                "dealerName": "AUTOFAIR HYUNDAI",
                "dealerCode": "NH018",
                "zip": 3103,
                "state": "NH",
                "id": "NH018",
                "CBSA": "2171"
            }
        ]
    },
    "NM ALBUQUERQUE [1991]": {
        "dealerInfo": [
            {
                "dealerName": "FIESTA HYUNDAI",
                "dealerCode": "NM023",
                "zip": 87505,
                "state": "NM",
                "id": "NM023",
                "CBSA": "1991"
            },
            {
                "dealerName": "LARRY H MILLER SW HYUNDAI ALBUQUERQ",
                "dealerCode": "NM024",
                "zip": 87112,
                "state": "NM",
                "id": "NM024",
                "CBSA": "1991"
            },
            {
                "dealerName": "LARRY H MILLER HYUNDAI ALBUQUERQUE",
                "dealerCode": "NM025",
                "zip": 87114,
                "state": "NM",
                "id": "NM025",
                "CBSA": "1991"
            }
        ]
    },
    "NV LAS VEGAS-HENDERSON [1994]": {
        "dealerInfo": [
            {
                "dealerName": "CENTENNIAL HYUNDAI",
                "dealerCode": "NV030",
                "zip": 89149,
                "state": "NV",
                "id": "NV030",
                "CBSA": "1994"
            },
            {
                "dealerName": "ABC HYUNDAI",
                "dealerCode": "NV031",
                "zip": 89118,
                "state": "NV",
                "id": "NV031",
                "CBSA": "1994"
            },
            {
                "dealerName": "HYUNDAI OF LAS VEGAS",
                "dealerCode": "NV032",
                "zip": 89117,
                "state": "NV",
                "id": "NV032",
                "CBSA": "1994"
            },
            {
                "dealerName": "HENDERSON HYUNDAI SUPERSTORE",
                "dealerCode": "NV033",
                "zip": 89015,
                "state": "NV",
                "id": "NV033",
                "CBSA": "1994"
            }
        ]
    },
    "NY ROCHESTER [2180]": {
        "dealerInfo": [
            {
                "dealerName": "MATTHEWS HYUNDAI OF GREECE",
                "dealerCode": "NY142",
                "zip": 14626,
                "state": "NY",
                "id": "NY142",
                "CBSA": "2180"
            },
            {
                "dealerName": "VISION HYUNDAI WEBSTER",
                "dealerCode": "NY149",
                "zip": 14580,
                "state": "NY",
                "id": "NY149",
                "CBSA": "2180"
            },
            {
                "dealerName": "VISION HYUNDAI HENRIETTA",
                "dealerCode": "NY150",
                "zip": 14623,
                "state": "NY",
                "id": "NY150",
                "CBSA": "2180"
            },
            {
                "dealerName": "VISION HYUNDAI CANANDAIGUA",
                "dealerCode": "NY151",
                "zip": 14424,
                "state": "NY",
                "id": "NY151",
                "CBSA": "2180"
            }
        ]
    },
    "OH AKRON [2052]": {
        "dealerInfo": [
            {
                "dealerName": "RON MARHOFER HYUNDAI",
                "dealerCode": "OH011",
                "zip": 44221,
                "state": "OH",
                "id": "OH011",
                "CBSA": "2052"
            },
            {
                "dealerName": "RON MARHOFER HYUNDAI",
                "dealerCode": "OH053",
                "zip": 44312,
                "state": "OH",
                "id": "OH053",
                "CBSA": "2052"
            }
        ]
    },
    "OH CLEVELAND-ELYRIA [2232]": {
        "dealerInfo": [
            {
                "dealerName": "CRESTMONT HYUNDAI",
                "dealerCode": "OH058",
                "zip": 44212,
                "state": "OH",
                "id": "OH058",
                "CBSA": "2232"
            },
            {
                "dealerName": "GREAT LAKES HYUNDAI",
                "dealerCode": "OH060",
                "zip": 44241,
                "state": "OH",
                "id": "OH060",
                "CBSA": "2232"
            },
            {
                "dealerName": "CLASSIC HYUNDAI",
                "dealerCode": "OH061",
                "zip": 44060,
                "state": "OH",
                "id": "OH061",
                "CBSA": "2232"
            },
            {
                "dealerName": "HYUNDAI OF BEDFORD",
                "dealerCode": "OH073",
                "zip": 44146,
                "state": "OH",
                "id": "OH073",
                "CBSA": "2232"
            },
            {
                "dealerName": "ELYRIA HYUNDAI",
                "dealerCode": "OH074",
                "zip": 44035,
                "state": "OH",
                "id": "OH074",
                "CBSA": "2232"
            },
            {
                "dealerName": "KEN GANLEY HYUNDAI NORWALK",
                "dealerCode": "OH076",
                "zip": 44857,
                "state": "OH",
                "id": "OH076",
                "CBSA": "2232"
            },
            {
                "dealerName": "SPITZER HYUNDAI",
                "dealerCode": "OH078",
                "zip": 44119,
                "state": "OH",
                "id": "OH078",
                "CBSA": "2232"
            },
            {
                "dealerName": "VICTORY HYUNDAI",
                "dealerCode": "OH082",
                "zip": 44010,
                "state": "OH",
                "id": "OH082",
                "CBSA": "2232"
            },
            {
                "dealerName": "KEN GANLEY HYUNDAI PARMA",
                "dealerCode": "OH083",
                "zip": 44129,
                "state": "OH",
                "id": "OH083",
                "CBSA": "2232"
            },
            {
                "dealerName": "KEN GANLEY HYUNDAI NORTH OLMSTED",
                "dealerCode": "OH084",
                "zip": 44070,
                "state": "OH",
                "id": "OH084",
                "CBSA": "2232"
            },
            {
                "dealerName": "DIEHL HYUNDAI OF MASSILLON",
                "dealerCode": "OH085",
                "zip": 44646,
                "state": "OH",
                "id": "OH085",
                "CBSA": "2232"
            }
        ]
    },
    "OH COLUMBUS [2233]": {
        "dealerInfo": [
            {
                "dealerName": "RICART HYUNDAI",
                "dealerCode": "OH037",
                "zip": 43125,
                "state": "OH",
                "id": "OH037",
                "CBSA": "2233"
            },
            {
                "dealerName": "MATHEWS HYUNDAI",
                "dealerCode": "OH050",
                "zip": 43302,
                "state": "OH",
                "id": "OH050",
                "CBSA": "2233"
            },
            {
                "dealerName": "HERRNSTEIN HYUNDAI",
                "dealerCode": "OH063",
                "zip": 45601,
                "state": "OH",
                "id": "OH063",
                "CBSA": "2233"
            },
            {
                "dealerName": "COUGHLIN HYUNDAI",
                "dealerCode": "OH068",
                "zip": 43056,
                "state": "OH",
                "id": "OH068",
                "CBSA": "2233"
            },
            {
                "dealerName": "GERMAIN HYUNDAI",
                "dealerCode": "OH077",
                "zip": 43228,
                "state": "OH",
                "id": "OH077",
                "CBSA": "2233"
            },
            {
                "dealerName": "GREAT LAKES HYUNDAI OF COLUMBUS",
                "dealerCode": "OH087",
                "zip": 43231,
                "state": "OH",
                "id": "OH087",
                "CBSA": "2233"
            },
            {
                "dealerName": "GREAT LAKES HYUNDAI OF DUBLIN",
                "dealerCode": "OH088",
                "zip": 43235,
                "state": "OH",
                "id": "OH088",
                "CBSA": "2233"
            }
        ]
    },
    "OK OKLAHOMA CITY [2054]": {
        "dealerInfo": [
            {
                "dealerName": "EDMOND HYUNDAI",
                "dealerCode": "OK018",
                "zip": 73013,
                "state": "OK",
                "id": "OK018",
                "CBSA": "2054"
            },
            {
                "dealerName": "BOB HOWARD HYUNDAI",
                "dealerCode": "OK030",
                "zip": 73139,
                "state": "OK",
                "id": "OK030",
                "CBSA": "2054"
            },
            {
                "dealerName": "NORMAN HYUNDAI",
                "dealerCode": "OK033",
                "zip": 73069,
                "state": "OK",
                "id": "OK033",
                "CBSA": "2054"
            },
            {
                "dealerName": "JOE COOPER HYUNDAI OF MIDWEST CITY",
                "dealerCode": "OK034",
                "zip": 73110,
                "state": "OK",
                "id": "OK034",
                "CBSA": "2054"
            }
        ]
    },
    "OR BEND [2480]": {
        "dealerInfo": [
            {
                "dealerName": "TEAM HYUNDAI OF BEND",
                "dealerCode": "OR036",
                "zip": 97701,
                "state": "OR",
                "id": "OR036",
                "CBSA": "2480"
            }
        ]
    },
    "OR-WA PORTLAND VANCOUVER HILLS [2487]": {
        "dealerInfo": [
            {
                "dealerName": "WITHNELL HYUNDAI",
                "dealerCode": "OR015",
                "zip": 97302,
                "state": "OR",
                "id": "OR015",
                "CBSA": "2487"
            },
            {
                "dealerName": "BEAVERTON HYUNDAI",
                "dealerCode": "OR025",
                "zip": 97005,
                "state": "OR",
                "id": "OR025",
                "CBSA": "2487"
            },
            {
                "dealerName": "DICK HANNAH'S HYUNDAI OF PORTLAND",
                "dealerCode": "OR033",
                "zip": 97233,
                "state": "OR",
                "id": "OR033",
                "CBSA": "2487"
            },
            {
                "dealerName": "DICK'S HILLSBORO HYUNDAI",
                "dealerCode": "OR035",
                "zip": 97123,
                "state": "OR",
                "id": "OR035",
                "CBSA": "2487"
            },
            {
                "dealerName": "RON TONKIN HYUNDAI",
                "dealerCode": "OR038",
                "zip": 97030,
                "state": "OR",
                "id": "OR038",
                "CBSA": "2487"
            },
            {
                "dealerName": "TONKIN GLADSTONE HYUNDAI",
                "dealerCode": "OR039",
                "zip": 97027,
                "state": "OR",
                "id": "OR039",
                "CBSA": "2487"
            },
            {
                "dealerName": "HYUNDAI OF ALBANY",
                "dealerCode": "OR040",
                "zip": 97322,
                "state": "OR",
                "id": "OR040",
                "CBSA": "2487"
            },
            {
                "dealerName": "BUD CLARY HYUNDAI",
                "dealerCode": "WA058",
                "zip": 98632,
                "state": "WA",
                "id": "WA058",
                "CBSA": "2487"
            },
            {
                "dealerName": "KENDALL HYUNDAI OF VANCOUVER",
                "dealerCode": "WA060",
                "zip": 98661,
                "state": "WA",
                "id": "WA060",
                "CBSA": "2487"
            }
        ]
    },
    "PA ALLENTOWN BETHLEHEM EASTON [2407]": {
        "dealerInfo": [
            {
                "dealerName": "TOWNE HYUNDAI OF HACKETTSTOWN",
                "dealerCode": "NJ068",
                "zip": 7840,
                "state": "NJ",
                "id": "NJ068",
                "CBSA": "2407"
            },
            {
                "dealerName": "LEHIGH VALLEY HYUNDAI",
                "dealerCode": "PA024",
                "zip": 18049,
                "state": "PA",
                "id": "PA024",
                "CBSA": "2407"
            },
            {
                "dealerName": "BROWN-DAUB HYUNDAI",
                "dealerCode": "PA085",
                "zip": 18045,
                "state": "PA",
                "id": "PA085",
                "CBSA": "2407"
            }
        ]
    },
    "PA PHILADELPHIA CAMDEN WILMGTN [2408]": {
        "dealerInfo": [
            {
                "dealerName": "PORTER HYUNDAI",
                "dealerCode": "DE004",
                "zip": 19711,
                "state": "DE",
                "id": "DE004",
                "CBSA": "2408"
            },
            {
                "dealerName": "HERTRICH HYUNDAI",
                "dealerCode": "DE007",
                "zip": 19720,
                "state": "DE",
                "id": "DE007",
                "CBSA": "2408"
            },
            {
                "dealerName": "WINNER HYUNDAI",
                "dealerCode": "DE008",
                "zip": 19901,
                "state": "DE",
                "id": "DE008",
                "CBSA": "2408"
            },
            {
                "dealerName": "BURNS HYUNDAI",
                "dealerCode": "NJ039",
                "zip": 8053,
                "state": "NJ",
                "id": "NJ039",
                "CBSA": "2408"
            },
            {
                "dealerName": "HYUNDAI OF TURNERSVILLE",
                "dealerCode": "NJ040",
                "zip": 8012,
                "state": "NJ",
                "id": "NJ040",
                "CBSA": "2408"
            },
            {
                "dealerName": "SPORT HYUNDAI",
                "dealerCode": "NJ062",
                "zip": 8234,
                "state": "NJ",
                "id": "NJ062",
                "CBSA": "2408"
            },
            {
                "dealerName": "BURLINGTON HYUNDAI",
                "dealerCode": "NJ064",
                "zip": 8016,
                "state": "NJ",
                "id": "NJ064",
                "CBSA": "2408"
            },
            {
                "dealerName": "VINELAND HYUNDAI",
                "dealerCode": "NJ067",
                "zip": 8332,
                "state": "NJ",
                "id": "NJ067",
                "CBSA": "2408"
            },
            {
                "dealerName": "FRED BEANS HYUNDAI OF LANGHORNE",
                "dealerCode": "PA002",
                "zip": 19047,
                "state": "PA",
                "id": "PA002",
                "CBSA": "2408"
            },
            {
                "dealerName": "PACIFICO HYUNDAI",
                "dealerCode": "PA003",
                "zip": 19153,
                "state": "PA",
                "id": "PA003",
                "CBSA": "2408"
            },
            {
                "dealerName": "SEIDEL HYUNDAI",
                "dealerCode": "PA014",
                "zip": 19607,
                "state": "PA",
                "id": "PA014",
                "CBSA": "2408"
            },
            {
                "dealerName": "SPRINGFIELD HYUNDAI",
                "dealerCode": "PA034",
                "zip": 19064,
                "state": "PA",
                "id": "PA034",
                "CBSA": "2408"
            },
            {
                "dealerName": "FRED BEANS HYUNDAI OF DOYLESTOWN",
                "dealerCode": "PA039",
                "zip": 18902,
                "state": "PA",
                "id": "PA039",
                "CBSA": "2408"
            },
            {
                "dealerName": "CONICELLI HYUNDAI",
                "dealerCode": "PA065",
                "zip": 19428,
                "state": "PA",
                "id": "PA065",
                "CBSA": "2408"
            },
            {
                "dealerName": "CIOCCA HYUNDAI",
                "dealerCode": "PA070",
                "zip": 18951,
                "state": "PA",
                "id": "PA070",
                "CBSA": "2408"
            },
            {
                "dealerName": "PIAZZA HYUNDAI OF POTTSTOWN",
                "dealerCode": "PA071",
                "zip": 19468,
                "state": "PA",
                "id": "PA071",
                "CBSA": "2408"
            },
            {
                "dealerName": "FAULKNER HYUNDAI",
                "dealerCode": "PA079",
                "zip": 19116,
                "state": "PA",
                "id": "PA079",
                "CBSA": "2408"
            },
            {
                "dealerName": "PIAZZA HYUNDAI OF WEST CHESTER",
                "dealerCode": "PA083",
                "zip": 19382,
                "state": "PA",
                "id": "PA083",
                "CBSA": "2408"
            },
            {
                "dealerName": "KELLY HYUNDAI",
                "dealerCode": "PA090",
                "zip": 19526,
                "state": "PA",
                "id": "PA090",
                "CBSA": "2408"
            },
            {
                "dealerName": "COLONIAL HYUNDAI",
                "dealerCode": "PA093",
                "zip": 19335,
                "state": "PA",
                "id": "PA093",
                "CBSA": "2408"
            },
            {
                "dealerName": "FRED BEANS HYUNDAI OF ABINGTON",
                "dealerCode": "PA100",
                "zip": 19090,
                "state": "PA",
                "id": "PA100",
                "CBSA": "2408"
            }
        ]
    },
    "PA PITTSBURGH [2330]": {
        "dealerInfo": [
            {
                "dealerName": "MOON TOWNSHIP HYUNDAI",
                "dealerCode": "PA012",
                "zip": 15108,
                "state": "PA",
                "id": "PA012",
                "CBSA": "2330"
            },
            {
                "dealerName": "WRIGHT HYUNDAI",
                "dealerCode": "PA037",
                "zip": 15090,
                "state": "PA",
                "id": "PA037",
                "CBSA": "2330"
            },
            {
                "dealerName": "#1 COCHRAN HYUNDAI",
                "dealerCode": "PA043",
                "zip": 15146,
                "state": "PA",
                "id": "PA043",
                "CBSA": "2330"
            },
            {
                "dealerName": "BOWSER HYUNDAI",
                "dealerCode": "PA044",
                "zip": 15236,
                "state": "PA",
                "id": "PA044",
                "CBSA": "2330"
            },
            {
                "dealerName": "MIKE KELLY HYUNDAI",
                "dealerCode": "PA057",
                "zip": 16002,
                "state": "PA",
                "id": "PA057",
                "CBSA": "2330"
            },
            {
                "dealerName": "AUTO LAND HYUNDAI OF UNIONTOWN",
                "dealerCode": "PA058",
                "zip": 15401,
                "state": "PA",
                "id": "PA058",
                "CBSA": "2330"
            },
            {
                "dealerName": "WASHINGTON HYUNDAI",
                "dealerCode": "PA062",
                "zip": 15301,
                "state": "PA",
                "id": "PA062",
                "CBSA": "2330"
            },
            {
                "dealerName": "#1 COCHRAN HYU OF SOUTH HILLS",
                "dealerCode": "PA063",
                "zip": 15216,
                "state": "PA",
                "id": "PA063",
                "CBSA": "2330"
            },
            {
                "dealerName": "DELANEY HYUNDAI",
                "dealerCode": "PA067",
                "zip": 15701,
                "state": "PA",
                "id": "PA067",
                "CBSA": "2330"
            },
            {
                "dealerName": "BOWSER HYUNDAI",
                "dealerCode": "PA073",
                "zip": 15010,
                "state": "PA",
                "id": "PA073",
                "CBSA": "2330"
            },
            {
                "dealerName": "MIKE CAMLIN HYUNDAI OF GREENSBURG",
                "dealerCode": "PA084",
                "zip": 15601,
                "state": "PA",
                "id": "PA084",
                "CBSA": "2330"
            }
        ]
    },
    "SC CHARLESTON-NORTH CHARLESTON [59]": {
        "dealerInfo": [
            {
                "dealerName": "HYUNDAI OF NORTH CHARLESTON",
                "dealerCode": "SC044",
                "zip": 29406,
                "state": "SC",
                "id": "SC044",
                "CBSA": "59"
            },
            {
                "dealerName": "HYUNDAI OF CHARLESTON",
                "dealerCode": "SC052",
                "zip": 29414,
                "state": "SC",
                "id": "SC052",
                "CBSA": "59"
            }
        ]
    },
    "TN JACKSON [2348]": {
        "dealerInfo": [
            {
                "dealerName": "ALLEN SAMUELS HYUNDAI",
                "dealerCode": "TN053",
                "zip": 38305,
                "state": "TN",
                "id": "TN053",
                "CBSA": "2348"
            }
        ]
    },
    "TN KNOXVILLE [2351]": {
        "dealerInfo": [
            {
                "dealerName": "TWIN CITY HYUNDAI",
                "dealerCode": "TN029",
                "zip": 37701,
                "state": "TN",
                "id": "TN029",
                "CBSA": "2351"
            },
            {
                "dealerName": "GRAYSON HYUNDAI",
                "dealerCode": "TN033",
                "zip": 37923,
                "state": "TN",
                "id": "TN033",
                "CBSA": "2351"
            },
            {
                "dealerName": "TARR HYUNDAI",
                "dealerCode": "TN054",
                "zip": 37814,
                "state": "TN",
                "id": "TN054",
                "CBSA": "2351"
            },
            {
                "dealerName": "RUSTY WALLACE HYUNDAI",
                "dealerCode": "TN057",
                "zip": 37918,
                "state": "TN",
                "id": "TN057",
                "CBSA": "2351"
            }
        ]
    },
    "TN NASHVILLE-DAVIDSON-MURFREES [2356]": {
        "dealerInfo": [
            {
                "dealerName": "WILSON COUNTY HYUNDAI, INC",
                "dealerCode": "TN045",
                "zip": 37087,
                "state": "TN",
                "id": "TN045",
                "CBSA": "2356"
            },
            {
                "dealerName": "HYUNDAI OF COOL SPRINGS",
                "dealerCode": "TN046",
                "zip": 37067,
                "state": "TN",
                "id": "TN046",
                "CBSA": "2356"
            },
            {
                "dealerName": "HYUNDAI OF COOKEVILLE",
                "dealerCode": "TN047",
                "zip": 38501,
                "state": "TN",
                "id": "TN047",
                "CBSA": "2356"
            },
            {
                "dealerName": "HYUNDAI OF HICKORY HOLLOW",
                "dealerCode": "TN048",
                "zip": 37211,
                "state": "TN",
                "id": "TN048",
                "CBSA": "2356"
            },
            {
                "dealerName": "MURFREESBORO HYUNDAI",
                "dealerCode": "TN051",
                "zip": 37130,
                "state": "TN",
                "id": "TN051",
                "CBSA": "2356"
            },
            {
                "dealerName": "HYUNDAI OF COLUMBIA",
                "dealerCode": "TN052",
                "zip": 38401,
                "state": "TN",
                "id": "TN052",
                "CBSA": "2356"
            },
            {
                "dealerName": "HALLMARK HYUNDAI",
                "dealerCode": "TN055",
                "zip": 37075,
                "state": "TN",
                "id": "TN055",
                "CBSA": "2356"
            }
        ]
    },
    "TN-KY CLARKSVILLE [2266]": {
        "dealerInfo": [
            {
                "dealerName": "WYATT JOHNSON HYUNDAI",
                "dealerCode": "TN056",
                "zip": 37040,
                "state": "TN",
                "id": "TN056",
                "CBSA": "2266"
            }
        ]
    },
    "TN-MS-AR MEMPHIS [2354]": {
        "dealerInfo": [
            {
                "dealerName": "HOMER SKELTON HYUNDAI",
                "dealerCode": "MS032",
                "zip": 38654,
                "state": "MS",
                "id": "MS032",
                "CBSA": "2354"
            },
            {
                "dealerName": "GOSSETT HYUNDAI",
                "dealerCode": "TN030",
                "zip": 38128,
                "state": "TN",
                "id": "TN030",
                "CBSA": "2354"
            },
            {
                "dealerName": "GOSSETT HYUNDAI SOUTH",
                "dealerCode": "TN031",
                "zip": 38115,
                "state": "TN",
                "id": "TN031",
                "CBSA": "2354"
            },
            {
                "dealerName": "WOLFCHASE HYUNDAI",
                "dealerCode": "TN049",
                "zip": 38133,
                "state": "TN",
                "id": "TN049",
                "CBSA": "2354"
            }
        ]
    },
    "TX AUSTIN-ROUND ROCK [2537]": {
        "dealerInfo": [
            {
                "dealerName": "ROUND ROCK HYUNDAI",
                "dealerCode": "TX095",
                "zip": 78664,
                "state": "TX",
                "id": "TX095",
                "CBSA": "2537"
            },
            {
                "dealerName": "SOUTH POINT HYUNDAI",
                "dealerCode": "TX171",
                "zip": 78745,
                "state": "TX",
                "id": "TX171",
                "CBSA": "2537"
            },
            {
                "dealerName": "STEELE HYUNDAI KYLE, INC",
                "dealerCode": "TX200",
                "zip": 78640,
                "state": "TX",
                "id": "TX200",
                "CBSA": "2537"
            },
            {
                "dealerName": "HYUNDAI OF LEANDER",
                "dealerCode": "TX211",
                "zip": 78641,
                "state": "TX",
                "id": "TX211",
                "CBSA": "2537"
            }
        ]
    },
    "TX DALLAS FORT WORTH ARLINGTON [2531]": {
        "dealerInfo": [
            {
                "dealerName": "HUFFINES HYUNDAI PLANO",
                "dealerCode": "TX040",
                "zip": 75075,
                "state": "TX",
                "id": "TX040",
                "CBSA": "2531"
            },
            {
                "dealerName": "ECKERT HYUNDAI, INC.",
                "dealerCode": "TX063",
                "zip": 76210,
                "state": "TX",
                "id": "TX063",
                "CBSA": "2531"
            },
            {
                "dealerName": "HUFFINES HYUNDAI MCKINNEY",
                "dealerCode": "TX132",
                "zip": 75070,
                "state": "TX",
                "id": "TX132",
                "CBSA": "2531"
            },
            {
                "dealerName": "JERRY'S HYUNDAI",
                "dealerCode": "TX136",
                "zip": 76087,
                "state": "TX",
                "id": "TX136",
                "CBSA": "2531"
            },
            {
                "dealerName": "JAMES WOOD HYUNDAI",
                "dealerCode": "TX141",
                "zip": 76234,
                "state": "TX",
                "id": "TX141",
                "CBSA": "2531"
            },
            {
                "dealerName": "VANDERGRIFF HYUNDAI",
                "dealerCode": "TX173",
                "zip": 76017,
                "state": "TX",
                "id": "TX173",
                "CBSA": "2531"
            },
            {
                "dealerName": "VAN HYUNDAI",
                "dealerCode": "TX174",
                "zip": 75006,
                "state": "TX",
                "id": "TX174",
                "CBSA": "2531"
            },
            {
                "dealerName": "HILEY HYUNDAI OF BURLESON",
                "dealerCode": "TX175",
                "zip": 76028,
                "state": "TX",
                "id": "TX175",
                "CBSA": "2531"
            },
            {
                "dealerName": "AUTONATION HYUNDAI N RICHLAND HILLS",
                "dealerCode": "TX181",
                "zip": 76180,
                "state": "TX",
                "id": "TX181",
                "CBSA": "2531"
            },
            {
                "dealerName": "CLAY COOLEY HYUNDAI OF ROCKWALL",
                "dealerCode": "TX183",
                "zip": 75087,
                "state": "TX",
                "id": "TX183",
                "CBSA": "2531"
            },
            {
                "dealerName": "HILEY HYUNDAI WEST",
                "dealerCode": "TX184",
                "zip": 76108,
                "state": "TX",
                "id": "TX184",
                "CBSA": "2531"
            },
            {
                "dealerName": "CLAY COOLEY HYUNDAI MESQUITE",
                "dealerCode": "TX189",
                "zip": 75150,
                "state": "TX",
                "id": "TX189",
                "CBSA": "2531"
            },
            {
                "dealerName": "SHOTTENKIRK HYUNDAI GRANBURY",
                "dealerCode": "TX191",
                "zip": 76049,
                "state": "TX",
                "id": "TX191",
                "CBSA": "2531"
            },
            {
                "dealerName": "TEXOMA HYUNDAI",
                "dealerCode": "TX198",
                "zip": 75090,
                "state": "TX",
                "id": "TX198",
                "CBSA": "2531"
            },
            {
                "dealerName": "GREENVILLE HYUNDAI",
                "dealerCode": "TX199",
                "zip": 75402,
                "state": "TX",
                "id": "TX199",
                "CBSA": "2531"
            },
            {
                "dealerName": "CLAY COOLEY HYUNDAI OF DALLAS",
                "dealerCode": "TX202",
                "zip": 75232,
                "state": "TX",
                "id": "TX202",
                "CBSA": "2531"
            },
            {
                "dealerName": "CLAY COOLEY HYUNDAI OF TERRELL",
                "dealerCode": "TX204",
                "zip": 75160,
                "state": "TX",
                "id": "TX204",
                "CBSA": "2531"
            },
            {
                "dealerName": "NORM REEVES HYUNDAI OF IRVING",
                "dealerCode": "TX208",
                "zip": 75062,
                "state": "TX",
                "id": "TX208",
                "CBSA": "2531"
            },
            {
                "dealerName": "ALLIANCE HYUNDAI",
                "dealerCode": "TX210",
                "zip": 76177,
                "state": "TX",
                "id": "TX210",
                "CBSA": "2531"
            }
        ]
    },
    "TX HOUSTON-THE WOODLANDS-SUGAR [2546]": {
        "dealerInfo": [
            {
                "dealerName": "WIESNER HYUNDAI",
                "dealerCode": "TX086",
                "zip": 77304,
                "state": "TX",
                "id": "TX086",
                "CBSA": "2546"
            },
            {
                "dealerName": "NORTH FREEWAY HYUNDAI",
                "dealerCode": "TX104",
                "zip": 77373,
                "state": "TX",
                "id": "TX104",
                "CBSA": "2546"
            },
            {
                "dealerName": "HUMBLE HYUNDAI",
                "dealerCode": "TX111",
                "zip": 77338,
                "state": "TX",
                "id": "TX111",
                "CBSA": "2546"
            },
            {
                "dealerName": "DON DAVIS HYUNDAI",
                "dealerCode": "TX116",
                "zip": 77566,
                "state": "TX",
                "id": "TX116",
                "CBSA": "2546"
            },
            {
                "dealerName": "STERLING MCCALL HYUNDAI",
                "dealerCode": "TX145",
                "zip": 77074,
                "state": "TX",
                "id": "TX145",
                "CBSA": "2546"
            },
            {
                "dealerName": "DEMONTROND HYUNDAI",
                "dealerCode": "TX150",
                "zip": 77591,
                "state": "TX",
                "id": "TX150",
                "CBSA": "2546"
            },
            {
                "dealerName": "HYUNDAI OF BRENHAM",
                "dealerCode": "TX153",
                "zip": 77833,
                "state": "TX",
                "id": "TX153",
                "CBSA": "2546"
            },
            {
                "dealerName": "TEXAN HYUNDAI",
                "dealerCode": "TX155",
                "zip": 77471,
                "state": "TX",
                "id": "TX155",
                "CBSA": "2546"
            },
            {
                "dealerName": "BAYTOWN HYUNDAI",
                "dealerCode": "TX169",
                "zip": 77521,
                "state": "TX",
                "id": "TX169",
                "CBSA": "2546"
            },
            {
                "dealerName": "BIG STAR HYUNDAI",
                "dealerCode": "TX192",
                "zip": 77546,
                "state": "TX",
                "id": "TX192",
                "CBSA": "2546"
            },
            {
                "dealerName": "NORTHWEST HYUNDAI",
                "dealerCode": "TX195",
                "zip": 77065,
                "state": "TX",
                "id": "TX195",
                "CBSA": "2546"
            },
            {
                "dealerName": "WEST HOUSTON HYUNDAI",
                "dealerCode": "TX196",
                "zip": 77094,
                "state": "TX",
                "id": "TX196",
                "CBSA": "2546"
            },
            {
                "dealerName": "STEELE SOUTH LOOP HYUNDAI",
                "dealerCode": "TX203",
                "zip": 77054,
                "state": "TX",
                "id": "TX203",
                "CBSA": "2546"
            },
            {
                "dealerName": "BROOKSHIRE HYUNDAI",
                "dealerCode": "TX205",
                "zip": 77423,
                "state": "TX",
                "id": "TX205",
                "CBSA": "2546"
            },
            {
                "dealerName": "TOMBALL HYUNDAI",
                "dealerCode": "TX209",
                "zip": 77375,
                "state": "TX",
                "id": "TX209",
                "CBSA": "2546"
            }
        ]
    },
    "TX LUBBOCK [2534]": {
        "dealerInfo": [
            {
                "dealerName": "GENE MESSER HYUNDAI",
                "dealerCode": "TX090",
                "zip": 79407,
                "state": "TX",
                "id": "TX090",
                "CBSA": "2534"
            }
        ]
    },
    "TX SAN ANTONIO-NEW BRAUNFELS [1665]": {
        "dealerInfo": [
            {
                "dealerName": "RED MCCOMBS HYUNDAI",
                "dealerCode": "TX016",
                "zip": 78229,
                "state": "TX",
                "id": "TX016",
                "CBSA": "1665"
            },
            {
                "dealerName": "WORLD CAR HYUNDAI",
                "dealerCode": "TX077",
                "zip": 78233,
                "state": "TX",
                "id": "TX077",
                "CBSA": "1665"
            },
            {
                "dealerName": "WORLD CAR HYUNDAI",
                "dealerCode": "TX087",
                "zip": 78224,
                "state": "TX",
                "id": "TX087",
                "CBSA": "1665"
            },
            {
                "dealerName": "RED MCCOMBS HYUNDAI NORTHWEST",
                "dealerCode": "TX127",
                "zip": 78249,
                "state": "TX",
                "id": "TX127",
                "CBSA": "1665"
            },
            {
                "dealerName": "PRINCIPLE HYUNDAI  BOERNE",
                "dealerCode": "TX190",
                "zip": 78006,
                "state": "TX",
                "id": "TX190",
                "CBSA": "1665"
            },
            {
                "dealerName": "STEELE HYUNDAI NEW BRAUNFELS",
                "dealerCode": "TX201",
                "zip": 78130,
                "state": "TX",
                "id": "TX201",
                "CBSA": "1665"
            }
        ]
    },
    "TX WACO [2554]": {
        "dealerInfo": [
            {
                "dealerName": "WACO HYUNDAI",
                "dealerCode": "TX206",
                "zip": 76712,
                "state": "TX",
                "id": "TX206",
                "CBSA": "2554"
            }
        ]
    },
    "UT SALT LAKE CITY [2009]": {
        "dealerInfo": [
            {
                "dealerName": "KEN GARFF HYUNDAI DOWNTOWN",
                "dealerCode": "UT002",
                "zip": 84101,
                "state": "UT",
                "id": "UT002",
                "CBSA": "2009"
            },
            {
                "dealerName": "MURDOCK HYUNDAI",
                "dealerCode": "UT013",
                "zip": 84042,
                "state": "UT",
                "id": "UT013",
                "CBSA": "2009"
            },
            {
                "dealerName": "MURDOCK HYUNDAI MURRAY, LLC",
                "dealerCode": "UT015",
                "zip": 84107,
                "state": "UT",
                "id": "UT015",
                "CBSA": "2009"
            },
            {
                "dealerName": "KEN GARFF HYUNDAI SOUTHTOWNE",
                "dealerCode": "UT016",
                "zip": 84070,
                "state": "UT",
                "id": "UT016",
                "CBSA": "2009"
            },
            {
                "dealerName": "YOUNG HYUNDAI",
                "dealerCode": "UT017",
                "zip": 84401,
                "state": "UT",
                "id": "UT017",
                "CBSA": "2009"
            }
        ]
    },
    "VA LYNCHBURG [555]": {
        "dealerInfo": [
            {
                "dealerName": "CMA'S HYUNDAI OF LYNCHBURG",
                "dealerCode": "VA058",
                "zip": 24501,
                "state": "VA",
                "id": "VA058",
                "CBSA": "555"
            }
        ]
    },
    "VA RICHMOND [2048]": {
        "dealerInfo": [
            {
                "dealerName": "PEARSON HYUNDAI",
                "dealerCode": "VA003",
                "zip": 23113,
                "state": "VA",
                "id": "VA003",
                "CBSA": "2048"
            },
            {
                "dealerName": "WEST BROAD HYUNDAI",
                "dealerCode": "VA024",
                "zip": 23294,
                "state": "VA",
                "id": "VA024",
                "CBSA": "2048"
            },
            {
                "dealerName": "CMA'S COLONIAL HYUNDAI",
                "dealerCode": "VA036",
                "zip": 23834,
                "state": "VA",
                "id": "VA036",
                "CBSA": "2048"
            }
        ]
    },
    "VA-NC VIRGINIA BEACH-CHESAPEAKE-NORFOLK [2047]": {
        "dealerInfo": [
            {
                "dealerName": "HALL HYUNDAI ELIZABETH CITY",
                "dealerCode": "NC062",
                "zip": 27909,
                "state": "NC",
                "id": "NC062",
                "CBSA": "2047"
            },
            {
                "dealerName": "CHECKERED FLAG HYUNDAI WORLD",
                "dealerCode": "VA004",
                "zip": 23452,
                "state": "VA",
                "id": "VA004",
                "CBSA": "2047"
            },
            {
                "dealerName": "WILLIAMSBURG HYUNDAI",
                "dealerCode": "VA047",
                "zip": 23188,
                "state": "VA",
                "id": "VA047",
                "CBSA": "2047"
            },
            {
                "dealerName": "HYUNDAI OF HAMPTON",
                "dealerCode": "VA055",
                "zip": 23666,
                "state": "VA",
                "id": "VA055",
                "CBSA": "2047"
            },
            {
                "dealerName": "PRIORITY HYUNDAI",
                "dealerCode": "VA062",
                "zip": 23320,
                "state": "VA",
                "id": "VA062",
                "CBSA": "2047"
            },
            {
                "dealerName": "SOUTHERN HYUNDAI NEWPORT NEWS",
                "dealerCode": "VA063",
                "zip": 23608,
                "state": "VA",
                "id": "VA063",
                "CBSA": "2047"
            },
            {
                "dealerName": "SOUTHERN HYUNDAI CHESAPEAKE",
                "dealerCode": "VA064",
                "zip": 23321,
                "state": "VA",
                "id": "VA064",
                "CBSA": "2047"
            }
        ]
    },
    "WA BELLINGHAM [2506]": {
        "dealerInfo": [
            {
                "dealerName": "RAIRDONS HYUNDAI OF BELLINGHAM",
                "dealerCode": "WA045",
                "zip": 98229,
                "state": "WA",
                "id": "WA045",
                "CBSA": "2506"
            }
        ]
    },
    "WA SEATTLE TACOMA BELLEVUE [2513]": {
        "dealerInfo": [
            {
                "dealerName": "ROBERT LARSON'S HYUNDAI",
                "dealerCode": "WA019",
                "zip": 98409,
                "state": "WA",
                "id": "WA019",
                "CBSA": "2513"
            },
            {
                "dealerName": "DOUG'S HYUNDAI",
                "dealerCode": "WA020",
                "zip": 98026,
                "state": "WA",
                "id": "WA020",
                "CBSA": "2513"
            },
            {
                "dealerName": "KORUM HYUNDAI",
                "dealerCode": "WA025",
                "zip": 98371,
                "state": "WA",
                "id": "WA025",
                "CBSA": "2513"
            },
            {
                "dealerName": "TITUS-WILL HYUNDAI",
                "dealerCode": "WA033",
                "zip": 98502,
                "state": "WA",
                "id": "WA033",
                "CBSA": "2513"
            },
            {
                "dealerName": "JACK CARROLL'S SKAGIT HYUNDAI",
                "dealerCode": "WA048",
                "zip": 98233,
                "state": "WA",
                "id": "WA048",
                "CBSA": "2513"
            },
            {
                "dealerName": "CAR PROS RENTON HYUNDAI",
                "dealerCode": "WA050",
                "zip": 98057,
                "state": "WA",
                "id": "WA050",
                "CBSA": "2513"
            },
            {
                "dealerName": "AUBURN HYUNDAI",
                "dealerCode": "WA051",
                "zip": 98002,
                "state": "WA",
                "id": "WA051",
                "CBSA": "2513"
            },
            {
                "dealerName": "HASELWOOD HYUNDAI",
                "dealerCode": "WA052",
                "zip": 98312,
                "state": "WA",
                "id": "WA052",
                "CBSA": "2513"
            },
            {
                "dealerName": "SEATTLE HYUNDAI",
                "dealerCode": "WA053",
                "zip": 98133,
                "state": "WA",
                "id": "WA053",
                "CBSA": "2513"
            },
            {
                "dealerName": "LEE JOHNSON HYUNDAI OF EVERETT",
                "dealerCode": "WA054",
                "zip": 98203,
                "state": "WA",
                "id": "WA054",
                "CBSA": "2513"
            },
            {
                "dealerName": "HYUNDAI OF KIRKLAND",
                "dealerCode": "WA056",
                "zip": 98034,
                "state": "WA",
                "id": "WA056",
                "CBSA": "2513"
            }
        ]
    },
    "WA SPOKANE SPOKANE VALLEY [2514]": {
        "dealerInfo": [
            {
                "dealerName": "SPOKANE HYUNDAI",
                "dealerCode": "WA055",
                "zip": 99212,
                "state": "WA",
                "id": "WA055",
                "CBSA": "2514"
            }
        ]
    },
    "WI MILWAUKEE WAUKESHA [1886]": {
        "dealerInfo": [
            {
                "dealerName": "BOUCHER HYUNDAI",
                "dealerCode": "WI014",
                "zip": 53186,
                "state": "WI",
                "id": "WI014",
                "CBSA": "1886"
            },
            {
                "dealerName": "JOHN AMATO HYUNDAI",
                "dealerCode": "WI022",
                "zip": 53051,
                "state": "WI",
                "id": "WI022",
                "CBSA": "1886"
            },
            {
                "dealerName": "HYUNDAI WEST ALLIS",
                "dealerCode": "WI036",
                "zip": 53227,
                "state": "WI",
                "id": "WI036",
                "CBSA": "1886"
            },
            {
                "dealerName": "ROSEN HYUNDAI GREENFIELD",
                "dealerCode": "WI039",
                "zip": 53221,
                "state": "WI",
                "id": "WI039",
                "CBSA": "1886"
            },
            {
                "dealerName": "AMATO HYUNDAI OF GLENDALE",
                "dealerCode": "WI041",
                "zip": 53217,
                "state": "WI",
                "id": "WI041",
                "CBSA": "1886"
            },
            {
                "dealerName": "ZEIGLER HYUNDAI OF RACINE",
                "dealerCode": "WI042",
                "zip": 53177,
                "state": "WI",
                "id": "WI042",
                "CBSA": "1886"
            }
        ]
    }
}
