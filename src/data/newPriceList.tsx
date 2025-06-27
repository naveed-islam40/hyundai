export interface Service {
  name: string;
  cost: number;
}

export interface Panel {
  name: string;
  services: Service[];
}

export interface CarPanels {
  [panelName: string]: Panel;
}

export interface DealerCars {
  [carName: string]: CarPanels;
}

export interface DealerInfo {
  dealerName: string;
  dealerCode: string;
  zip: number;
  state: string;
  id: string;
  CBSA: string;
}

export interface DealerRegionData {
  dealerInfo?: DealerInfo[];
  vehicles: DealerCars;
}

export const panelPricesByDealer: {
  [dealerName: string]: DealerRegionData;
} = {
  "AL DAPHNE-FAIRHOPE-FOLEY [2141]": {
    dealerInfo: [
      {
        dealerName: "EASTERN SHORE HYUNDAI",
        dealerCode: "AL027",
        zip: 36526,
        state: "AL",
        id: "AL027",
        CBSA: "2141",
      },
      {
        dealerName: "PALMER'S AIRPORT HYUNDAI",
        dealerCode: "AL029",
        zip: 36608,
        state: "AL",
        id: "AL029",
        CBSA: "2141",
      },
      {
        dealerName: "ALLEN TURNER HYUNDAI",
        dealerCode: "FL080",
        zip: 32505,
        state: "FL",
        id: "FL080",
        CBSA: "2141",
      },
    ],
    vehicles: {
      "2016-21 Tucson": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 610.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.6,
            },
            {
              name: "BLEND",
              cost: 720.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.0,
            },
            {
              name: "BLEND",
              cost: 810.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
      },
      "2017-18 Santa Fe Sport": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 620.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 9.6,
            },
            {
              name: "BLEND",
              cost: 690.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 780.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
      },
      "2017-18 Sonata": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 570.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 730.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
      },
      "2017-20 Elantra": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 340.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 650.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.6,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
      "2019 Santa Fe": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 400.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 760.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 500.0,
            },
          ],
        },
      },
      "2020-23 Palisade": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 4.8,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.2,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
      },
      "2021-23 Santa Fe Hybrid": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 530.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.4,
            },
            {
              name: "BLEND",
              cost: 760.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 820.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
    },
  },
  "AR FAYETTEVILLE SPRINGDALE ROG [2390]": {
    dealerInfo: [
      {
        dealerName: "CRAIN HYUNDAI OF FAYETTEVILLE",
        dealerCode: "AR034",
        zip: 72704,
        state: "AR",
        id: "AR034",
        CBSA: "2390",
      },
      {
        dealerName: "CRAIN HYUNDAI OF BENTONVILLE",
        dealerCode: "AR035",
        zip: 72712,
        state: "AR",
        id: "AR035",
        CBSA: "2390",
      },
    ],
    vehicles: {
      "2016-21 Tucson": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 250.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 610.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.6,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.0,
            },
            {
              name: "BLEND",
              cost: 800.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
      },
      "2017-18 Santa Fe Sport": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 610.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 9.6,
            },
            {
              name: "BLEND",
              cost: 680.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 780.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
      },
      "2017-18 Sonata": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 560.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 720.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
      },
      "2017-20 Elantra": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 330.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 650.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.6,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
      "2019 Santa Fe": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 750.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
      },
      "2020-23 Palisade": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 4.8,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.2,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
      },
      "2021-23 Santa Fe Hybrid": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 400.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.4,
            },
            {
              name: "BLEND",
              cost: 750.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 810.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
    },
  },
  "AR LITTLE ROCK NORTH LITTLE RO [2397]": {
    dealerInfo: [
      {
        dealerName: "CRAIN HYUNDAI LITTLE ROCK",
        dealerCode: "AR028",
        zip: 72210,
        state: "AR",
        id: "AR028",
        CBSA: "2397",
      },
      {
        dealerName: "CRAIN HYUNDAI NORTH LITTLE ROCK",
        dealerCode: "AR029",
        zip: 72116,
        state: "AR",
        id: "AR029",
        CBSA: "2397",
      },
      {
        dealerName: "SMART HYUNDAI",
        dealerCode: "AR031",
        zip: 71602,
        state: "AR",
        id: "AR031",
        CBSA: "2397",
      },
      {
        dealerName: "CHRIS CRAIN HYUNDAI",
        dealerCode: "AR038",
        zip: 72032,
        state: "AR",
        id: "AR038",
        CBSA: "2397",
      },
    ],
    vehicles: {
      "2016-21 Tucson": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 250.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 600.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.6,
            },
            {
              name: "BLEND",
              cost: 700.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.0,
            },
            {
              name: "BLEND",
              cost: 790.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
      },
      "2017-18 Santa Fe Sport": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 600.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 9.6,
            },
            {
              name: "BLEND",
              cost: 680.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 770.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
      },
      "2017-18 Sonata": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 180.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 560.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
      },
      "2017-20 Elantra": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 180.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 350.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 330.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.6,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
      "2019 Santa Fe": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 500.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 620.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 700.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 740.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
      },
      "2020-23 Palisade": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 4.8,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 620.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.2,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
      },
      "2021-23 Santa Fe Hybrid": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 400.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 200.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 620.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.4,
            },
            {
              name: "BLEND",
              cost: 740.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 800.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
      },
    },
  },
  "AZ PHOENIX-MESA-SCOTTSDALE [1998]": {
    dealerInfo: [
      {
        dealerName: "HORNE HYUNDAI",
        dealerCode: "AZ028",
        zip: 85119,
        state: "AZ",
        id: "AZ028",
        CBSA: "1998",
      },
      {
        dealerName: "CHAPMAN HYUNDAI",
        dealerCode: "AZ032",
        zip: 85023,
        state: "AZ",
        id: "AZ032",
        CBSA: "1998",
      },
      {
        dealerName: "EARNHARDT HYUNDAI SAN TAN",
        dealerCode: "AZ035",
        zip: 85297,
        state: "AZ",
        id: "AZ035",
        CBSA: "1998",
      },
      {
        dealerName: "CHAPMAN SCOTTSDALE HYUNDAI",
        dealerCode: "AZ036",
        zip: 85251,
        state: "AZ",
        id: "AZ036",
        CBSA: "1998",
      },
      {
        dealerName: "EARNHARDT HYUNDAI",
        dealerCode: "AZ042",
        zip: 85323,
        state: "AZ",
        id: "AZ042",
        CBSA: "1998",
      },
      {
        dealerName: "EARNHARDT HYUNDAI NORTH SCOTTSDALE",
        dealerCode: "AZ043",
        zip: 85260,
        state: "AZ",
        id: "AZ043",
        CBSA: "1998",
      },
      {
        dealerName: "AUTONATION HYUNDAI TEMPE",
        dealerCode: "AZ046",
        zip: 85284,
        state: "AZ",
        id: "AZ046",
        CBSA: "1998",
      },
      {
        dealerName: "CAMELBACK HYUNDAI",
        dealerCode: "AZ047",
        zip: 85014,
        state: "AZ",
        id: "AZ047",
        CBSA: "1998",
      },
      {
        dealerName: "KEN GARFF HYUNDAI SURPRISE",
        dealerCode: "AZ052",
        zip: 85388,
        state: "AZ",
        id: "AZ052",
        CBSA: "1998",
      },
      {
        dealerName: "LARRY H MILLER HYUNDAI PEORIA",
        dealerCode: "AZ053",
        zip: 85382,
        state: "AZ",
        id: "AZ053",
        CBSA: "1998",
      },
    ],
    vehicles: {
      "2016-21 Tucson": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 240.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 600.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.6,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.0,
            },
            {
              name: "BLEND",
              cost: 800.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
      },
      "2017-18 Santa Fe Sport": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 610.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 9.6,
            },
            {
              name: "BLEND",
              cost: 680.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 770.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
      },
      "2017-18 Sonata": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 180.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 370.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 360.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 560.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
      },
      "2017-20 Elantra": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 180.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 350.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 330.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 640.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.6,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
      "2019 Santa Fe": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 500.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 700.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 750.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
      },
      "2020-23 Palisade": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 4.8,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 380.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 620.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.2,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
      },
      "2021-23 Santa Fe Hybrid": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 460.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 400.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 190.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 630.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.4,
            },
            {
              name: "BLEND",
              cost: 750.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 810.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
      },
    },
  },
  "CA BAKERSFIELD-DELANO [2417]": {
    dealerInfo: [
      {
        dealerName: "BAKERSFIELD HYUNDAI",
        dealerCode: "CA391",
        zip: 93313,
        state: "CA",
        id: "CA391",
        CBSA: "2417",
      },
    ],
    vehicles: {
      "2016-21 Tucson": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 570.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 280.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.6,
            },
            {
              name: "BLEND",
              cost: 820.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.0,
            },
            {
              name: "BLEND",
              cost: 920.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
      },
      "2017-18 Santa Fe Sport": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 510.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 430.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 230.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 710.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 9.6,
            },
            {
              name: "BLEND",
              cost: 790.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 880.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
      },
      "2017-18 Sonata": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 530.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 210.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 420.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 9.0,
            },
            {
              name: "BLEND",
              cost: 660.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 830.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 530.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 540.0,
            },
          ],
        },
      },
      "2017-20 Elantra": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 530.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 210.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 410.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 5.6,
            },
            {
              name: "BLEND",
              cost: 390.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 750.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.6,
            },
            {
              name: "BLEND",
              cost: 590.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 480.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
      },
      "2019 Santa Fe": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 560.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 450.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 230.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 590.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 500.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 740.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 810.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 850.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 570.0,
            },
          ],
        },
      },
      "2020-23 Palisade": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 4.8,
            },
            {
              name: "BLEND",
              cost: 560.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 440.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 230.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 5.800000000000001,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 490.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 11.2,
            },
            {
              name: "BLEND",
              cost: 730.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 8.2,
            },
            {
              name: "BLEND",
              cost: 730.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 7.8,
            },
            {
              name: "BLEND",
              cost: 730.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 600.0,
            },
          ],
        },
      },
      "2021-23 Santa Fe Hybrid": {
        "Front Bumper": {
          name: "Front Bumper",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 540.0,
            },
          ],
        },
        "Left Fender": {
          name: "Left Fender",
          services: [
            {
              name: "Repair",
              cost: 6.2,
            },
            {
              name: "BLEND",
              cost: 470.0,
            },
          ],
        },
        Hood: {
          name: "Hood",
          services: [
            {
              name: "Repair",
              cost: 8.4,
            },
            {
              name: "BLEND",
              cost: 230.0,
            },
          ],
        },
        "Left Front Door": {
          name: "Left Front Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 600.0,
            },
          ],
        },
        "Left Rear Door": {
          name: "Left Rear Door",
          services: [
            {
              name: "Repair",
              cost: 6.4,
            },
            {
              name: "BLEND",
              cost: 500.0,
            },
          ],
        },
        Roof: {
          name: "Roof",
          services: [
            {
              name: "Repair",
              cost: 10.0,
            },
            {
              name: "BLEND",
              cost: 740.0,
            },
          ],
        },
        "Left Quarter Panel": {
          name: "Left Quarter Panel",
          services: [
            {
              name: "Repair",
              cost: 10.4,
            },
            {
              name: "BLEND",
              cost: 870.0,
            },
          ],
        },
        "Deck Lid": {
          name: "Deck Lid",
          services: [
            {
              name: "Repair",
              cost: 6.8,
            },
            {
              name: "BLEND",
              cost: 920.0,
            },
          ],
        },
        "Rear Bumper": {
          name: "Rear Bumper",
          services: [
            {
              name: "Repair",
              cost: 7.2,
            },
            {
              name: "BLEND",
              cost: 520.0,
            },
          ],
        },
      },
    },
  },
};
