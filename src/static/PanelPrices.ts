const colorTemplates = [
 "Quartz White Pearl Tricoat",
"Cream White Tricoat",
"Powder White Pearl Tricoat",
"Dazzling White Tricoat",
"Ceramic White Tricoat",
"Frost White Pearl Tricoat",
"Hyper White Tricoat",
"Ceramic White Tricoat",
].reduce((acc, color) => {
  acc[color] = {
    name: color,
    cost: 1,
    services: [
      {name: "Three Stage", cost: 1},
    ]
  };
  return acc;
}, {} as Record<string, { name: string; cost: number; services: any[] }>);


export const panelDetails: any = {
  "Front Bumper": {
    name: "Front Bumper",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 830 },
      { name: "BLEND", cost: 120 },
    ],
  },
  "Left Fender": {
    name: "Left Fender",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 670 },
      { name: "BLEND", cost: 80 },
    ],
  },
  "Right Fender": {
    name: "Right Fenderr",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 670 },
      { name: "BLEND", cost: 80 },
    ],
  },
  Hood: {
    name: "Hood",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 540 },
      { name: "BLEND", cost: 120 },
    ],
  },
  "Left Front Door": {
    name: "Left Front Door",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 620 },
      { name: "BLEND", cost: 80 },
    ],
  },
  "Right Front Door": {
    name: "Right Front Door",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 620 },
      { name: "BLEND", cost: 80 },
    ],
  },
  "Left Rear Door": {
    name: "Left Rear Door",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 600 },
      { name: "BLEND", cost: 80 },
    ],
  },
  "Right Rear Door": {
    name: "Right Rear Door",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 600 },
      { name: "BLEND", cost: 80 },
    ],
  },
  Roof: {
    name: "Roof",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 1060 },
      { name: "BLEND", cost: 120 },
    ],
  },
  "Left Quarter Panel": {
    name: "Left Quarter Panel",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 930 },
      { name: "BLEND", cost: 130 },
    ],
  },
  "Right Quarter Panel": {
    name: "Right Quarter Panel",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 930 },
      { name: "BLEND", cost: 130 },
    ],
  },
  "Deck Lid": {
    name: "Deck Lid",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 780 },
      { name: "BLEND", cost: 90 },
    ],
  },
  "Rear Bumper": {
    name: "Rear Bumper",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 800 },
      { name: "BLEND", cost: 120 },
    ],
  },
  "Right Roof Rail": {
    name: "Right Roof Rail",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Left Roof Rail": {
    name: "Left Roof Rail",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Cover Car": {
    name: "Cover Car",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Corrosion Protection": {
    name: "Corrosion Protection",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Hazardous Waste": {
    name: "Hazardous Waste",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Color/Sand/Buff": {
    name: "Color/Sand/Buff",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Color Tint": {
    name: "Color Tint",
    cost: 1,
    services: [
      { name: "REFINISH", cost: 0 },
      { name: "BLEND", cost: 0 },
    ],
  },
  "Clear Coat": {
    name: "Clear Coat",
    cost: 1,
    services: [{ name: "both", cost: 1 }],
  },
  "Three Stage": {
    name: "Three Stage",
    cost: 100,
    services: [{ name: "Clear Coat", cost: 100 }],
  },
  CBSA: {
    name: "CBSA",
    cost: 1,
    services: [{ name: "Market Location", cost: 1 }],
  },
  ...colorTemplates
};


