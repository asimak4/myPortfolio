export interface Place {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  year: number;
}

export const visitedPlaces: Place[] = [
  {
    name: "Washington, DC",
    coordinates: [38.8977, -77.0365],
    year: 2023
  },
  {
    name: "Chicago, IL",
    coordinates: [41.8781, -87.6298],
    year: 2023
  },
  {
    name: "Miami, FL",
    coordinates: [25.7617, -80.1918],
    year: 2023
  },
  {
    name: "Fort Lauderdale, FL",
    coordinates: [26.1224, -80.1373],
    year: 2023
  },
  {
    name: "Clearwater, FL",
    coordinates: [27.9659, -82.8001],
    year: 2023
  },
  {
    name: "Destin, FL",
    coordinates: [30.3935, -86.4958],
    year: 2023
  },
  {
    name: "Wisconsin Dells, WI",
    coordinates: [43.6275, -89.7710],
    year: 2023
  },
  {
    name: "Sedona, AZ",
    coordinates: [34.8697, -111.7610],
    year: 2023
  },
  {
    name: "Poconos, PA",
    coordinates: [41.0998, -75.3242],
    year: 2023
  },
  {
    name: "Cancun, Mexico",
    coordinates: [21.1619, -86.8515],
    year: 2023
  },
  {
    name: "Park City, UT",
    coordinates: [40.6461, -111.4980],
    year: 2023
  },
  {
    name: "Vail, CO",
    coordinates: [39.6433, -106.3781],
    year: 2023
  },
  {
    name: "Myrtle Beach, SC",
    coordinates: [33.6891, -78.8867],
    year: 2023
  },
  {
    name: "Virginia Beach, VA",
    coordinates: [36.8529, -75.9780],
    year: 2023
  },
  {
    name: "Dolly Sods, WV",
    coordinates: [39.0378, -79.3531],
    year: 2023
  },
  {
    name: "New York City, NY",
    coordinates: [40.7128, -74.0060],
    year: 2023
  },
  {
    name: "Whiteface Mountain, NY",
    coordinates: [44.3658, -73.9026],
    year: 2023
  },
  {
    name: "Stowe, VT",
    coordinates: [44.4654, -72.6874],
    year: 2023
  },
  {
    name: "Mullica Hill, NJ",
    coordinates: [39.7390, -75.2240],
    year: 2023
  },
  {
    name: "Baltimore, MD",
    coordinates: [39.2904, -76.6122],
    year: 2023
  },
  {
    name: "Nassau, Bahamas",
    coordinates: [25.0479, -77.3554],
    year: 2023
  },
  {
    name: "Punta Cana, Dominican Republic",
    coordinates: [18.5601, -68.3725],
    year: 2023
  },
  {
    name: "St. Thomas, US Virgin Islands",
    coordinates: [18.3358, -64.8963],
    year: 2023
  },
  {
    name: "Quebec City, Canada",
    coordinates: [46.8139, -71.2080],
    year: 2023
  },
  {
    name: "Toronto, Canada",
    coordinates: [43.6532, -79.3832],
    year: 2023
  },
  {
    name: "Montreal, Canada",
    coordinates: [45.5017, -73.5673],
    year: 2023
  },
  {
    name: "Cinque Terre, Italy",
    coordinates: [44.1461, 9.6439],
    year: 2023
  },
  {
    name: "Florence, Italy",
    coordinates: [43.7696, 11.2558],
    year: 2023
  },
  {
    name: "Paris, France",
    coordinates: [48.8566, 2.3522],
    year: 2023
  },
  {
    name: "Kyiv, Ukraine",
    coordinates: [50.4501, 30.5234],
    year: 2023
  },
  {
    name: "St. Petersburg, Russia",
    coordinates: [59.9311, 30.3609],
    year: 2023
  },
  {
    name: "Moscow, Russia",
    coordinates: [55.7558, 37.6173],
    year: 2023
  },
  {
    name: "Detroit, Michigan",
    coordinates: [42.3314, -83.0458],
    year: 2023
  },
  {
    name: "Ocean City, MD",
    coordinates: [38.3365, -75.0849],
    year: 2023
  },
  {
    name: "Annapolis, MD",
    coordinates: [38.9784, -76.4922],
    year: 2023
  },
  {
    name: "Hanover, PA",
    coordinates: [39.8006, -76.9830],
    year: 2023
  },
  {
    name: "Jerusalem, Israel",
    coordinates: [31.7683, 35.2137],
    year: 2023
  },
  {
    name: "Tel Aviv, Israel",
    coordinates: [32.0853, 34.7818],
    year: 2023
  },
  {
    name: "Haifa, Israel",
    coordinates: [32.7940, 34.9896],
    year: 2023
  },
  {
    name: "Eilat, Israel",
    coordinates: [29.5577, 34.9519],
    year: 2023
  },
  {
    name: "Dead Sea, Israel",
    coordinates: [31.5590, 35.4732],
    year: 2023
  },
  {
    name: "Tiberias, Israel",
    coordinates: [32.7959, 35.5300],
    year: 2023
  },
  {
    name: "Netanya, Israel",
    coordinates: [32.3329, 34.8599],
    year: 2023
  },
  {
    name: "Be'er Sheva, Israel",
    coordinates: [31.2518, 34.7913],
    year: 2023
  }
];

export const wishlistPlaces: Place[] = [
  {
    name: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    year: 2024
  },
  {
    name: "Barcelona, Spain",
    coordinates: [41.3851, 2.1734],
    year: 2024
  },
  {
    name: "Santorini, Greece",
    coordinates: [36.3932, 25.4615],
    year: 2024
  },
  {
    name: "Reykjavik, Iceland",
    coordinates: [64.1470, -21.9408],
    year: 2024
  },
  {
    name: "Lisbon, Portugal",
    coordinates: [38.7223, -9.1393],
    year: 2024
  },
  {
    name: "Zurich, Switzerland",
    coordinates: [47.3769, 8.5417],
    year: 2024
  },
  {
    name: "Zermatt, Switzerland",
    coordinates: [46.0207, 7.7491],
    year: 2024
  },
  {
    name: "Seattle, Washington",
    coordinates: [47.6062, -122.3321],
    year: 2024
  },
  {
    name: "Austin, Texas",
    coordinates: [30.2672, -97.7431],
    year: 2024
  }
]; 