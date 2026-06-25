/**
 * ==========================================================================
 * GO GOA CAR BOOKING - VEHICLE FLEET DATA DATABASE
 * ==========================================================================
 */

window.CARS = [
  {
    id: 'wagon-r',
    name: 'Maruti Wagon R',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 2,
    pricePerDay: 1000,
    securityDeposit: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600',
    features: ['Power Steering', 'Air Conditioner', 'Bluetooth Music System', 'USB Charging', 'Excellent Mileage'],
    isPopular: true,
    tagline: 'Hatchback • Smart Comfort',
    engine: '1.2L K-Series DualJet Dual VVT Petrol',
    power: '88.5 BHP @ 6000 RPM',
    clearance: '165 mm standard clearance',
    waterWading: '150 mm',
    suitability: 'Best compact hatch for Goan narrow streets and easy parking.',
    rules: 'No smoking. Return fuel level matching pickup.',
    classType: 'Compact Family Hatchback'
  },
  {
    id: 'swift-manual',
    name: 'Maruti Suzuki Swift',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 2,
    pricePerDay: 1300,
    securityDeposit: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600',
    features: ['Touchscreen Apple CarPlay', 'Reverse Parking Sensors', 'Air Conditioner', 'Dual Airbags', 'Alloy Wheels'],
    isPopular: true,
    tagline: 'Hatchback • High Mileage',
    engine: '1.2L K-Series DualJet Dual VVT Petrol',
    power: '88.5 BHP @ 6000 RPM',
    clearance: '163 mm - 170 mm standard suspension',
    waterWading: '150 mm',
    suitability: 'Best fuel-economical hatchback for navigating heavy beach corridors of Baga-Calangute or fitting small tight parking layouts.',
    rules: 'Maintain speeds under 70 km/h. Keep clutch riding minimized on extremely steep forest hill sections.',
    classType: 'Budget Compact Family Hatchback'
  },
  {
    id: 'swift-auto',
    name: 'Maruti Suzuki Swift AMT',
    category: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 2,
    pricePerDay: 1500,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=600',
    features: ['Smooth Automatic AMT', 'Keyless Push Start', 'Touchscreen Infotainment', 'Steering Mounted Controls', 'Dual Airbags'],
    isPopular: false,
    tagline: 'Hatchback • Smooth AMT',
    engine: '1.2L K-Series DualJet Dual VVT Petrol',
    power: '88.5 BHP @ 6000 RPM',
    clearance: '163 mm - 170 mm standard suspension',
    waterWading: '150 mm',
    suitability: 'Best fuel-economical hatchback for navigating heavy beach corridors of Baga-Calangute or fitting small tight parking layouts.',
    rules: 'Maintain speeds under 70 km/h. Keep clutch riding minimized on extremely steep forest hill sections.',
    classType: 'Budget Compact Family Hatchback'
  },
  {
    id: 'baleno-auto',
    name: 'Maruti Suzuki Baleno Alpha',
    category: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 3,
    pricePerDay: 1700,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1619682855113-dced48f654b0?auto=format&fit=crop&q=80&w=600',
    features: ['Premium Cabin Space', '360 View Camera', 'Head-Up Display (HUD)', 'Automatic Climate Control', 'Push Button Start'],
    isPopular: true,
    tagline: 'Luxury Hatchback • Top tier specs',
    engine: '1.2L K-Series DualJet Dual VVT Petrol',
    power: '88.5 BHP @ 6000 RPM',
    clearance: '163 mm - 170 mm standard suspension',
    waterWading: '150 mm',
    suitability: 'Best fuel-economical hatchback for navigating heavy beach corridors of Baga-Calangute or fitting small tight parking layouts.',
    rules: 'Maintain speeds under 70 km/h. Keep clutch riding minimized on extremely steep forest hill sections.',
    classType: 'Budget Compact Family Hatchback'
  },
  {
    id: 'brezza',
    name: 'Maruti Suzuki Brezza LXI',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 3,
    pricePerDay: 1900,
    securityDeposit: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600',
    features: ['High Ground Clearance', 'Aggressive SUV Styling', 'Strong Air Conditioning', 'Bluetooth Audio System', 'Spacious Boot Space'],
    isPopular: false,
    tagline: 'SUV • Robust Build',
    engine: '1.5L K-Series Petrol with Mild Hybrid',
    power: '102 BHP @ 6000 RPM',
    clearance: '200 mm high ground clearance',
    waterWading: '350 mm',
    suitability: 'Brilliant rugged utility compact SUV. Perfect for speed-breakers, rough parking lots near North Goa beach entries, and reliable family comfort.',
    rules: 'No rash-driving or extreme muddy trails. Speed camera limit strictly at 70 km/h.',
    classType: 'Sub-Compact robust Family SUV'
  },
  {
    id: 'creta',
    name: 'Hyundai Creta SX',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 5,
    luggage: 4,
    pricePerDay: 2300,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600',
    features: ['Panoramic Sunroof', 'Digital Instrument Cluster', 'Powerful CRDi Turbo Engine', 'Cooling Glove Box', 'LED Headlamps'],
    isPopular: true,
    tagline: 'SUV • Feature Rich',
    engine: '1.5L CRDi Turbo Diesel Engine',
    power: '115 PS @ 4000 RPM',
    clearance: '190 mm segment-defining ground height',
    waterWading: '250 mm',
    suitability: 'Elegant premium high-rider for highway stability, long road trips across state borders, and exploring winding roads of Goan Ghats.',
    rules: 'Always watch for high curb lines during manual reverse parking. Use the provided high-beam controls mindfully under city flyovers.',
    classType: 'Full Comfort Mid-Size SUV'
  },
  {
    id: 'thar-4x4-manual',
    name: 'Mahindra Thar 4x4 MT',
    category: 'Thar',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 4,
    luggage: 2,
    pricePerDay: 2800,
    securityDeposit: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=600',
    features: ['Real 4x4 Low-Range Transfer Case', 'Rugged Hard-Top Roof', 'Excellent Water Wading', 'Heavy-Duty Alloy Wheels', 'Adventure GPS Tracker'],
    isPopular: true,
    tagline: 'True 4x4 Offroader • Manual',
    engine: '2.2L mHawk Turbo Diesel',
    power: '130 BHP @ 3750 RPM',
    clearance: '226 mm (Class-leading height)',
    waterWading: '650 mm (Perfect for monsoons)',
    suitability: 'Perfect for exploring Goa\'s rustic interior forest roads, historic fort drives, and steep cliff routes of Cola & Cabo de Rama.',
    rules: 'Absolute zero drift over sandy beach lines (heavy local authority fines). Ensure the vehicle stays locked in 2H mode on dry tarmac.',
    classType: 'Adventure Offroad 4x4 Jeep'
  },
  {
    id: 'thar-4x4-auto',
    name: 'Mahindra Thar 4x4 Automatic',
    category: 'Thar',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 4,
    luggage: 2,
    pricePerDay: 3200,
    securityDeposit: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    features: ['Effortless Torque-Converter AT', 'Convertible Soft-Top (Open Air)', 'Cruising Power Grid', 'Touch Infotainment System', 'Off-road Driving Modes'],
    isPopular: true,
    tagline: 'True 4x4 Offroader • Automatic',
    engine: '2.0L mStallion TGDi Petrol',
    power: '150 BHP @ 5000 RPM',
    clearance: '226 mm ground clearance',
    waterWading: '650 mm',
    suitability: 'Perfect for sunset drives in open air, beach-side cruising, and effortless off-road exploration.',
    rules: 'Maintain low speed when top is open. Secure soft-top locks properly before speeding up.',
    classType: 'Adventure Offroad 4x4 convertible'
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga (7-Seater)',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 7,
    luggage: 4,
    pricePerDay: 2200,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&q=80&w=600',
    features: ['Spacious 3-Row Seating', 'Roof Mounted Rear AC Vents', 'Convertible Cargo Space', 'Excellent for Groups & Families', 'Elegant Projector Lamps'],
    isPopular: true,
    tagline: '7 Seats • Budget Smart Family',
    engine: '1.5L SmartHybrid K15C Petrol Engine',
    power: '103 PS @ 6000 RPM',
    clearance: '180 mm multi-passenger ground height',
    waterWading: '200 mm',
    suitability: 'The gold standard for mid-budget travel packages, facilitating extended family reunions or group outings to Dudhsagar waterfalls.',
    rules: 'Always keep the last row flat if carrying heavy bulk luggage. Drive at conservative speeds when fully loaded with 7 adults.',
    classType: '7-Seater Family Tourer MPV'
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta ZX',
    category: 'Luxury',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 7,
    luggage: 5,
    pricePerDay: 4500,
    securityDeposit: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600',
    features: ['Captain Seats Luxury Pack', 'Whisper-Quiet Cabin', 'Premium Leather Interiors', 'Dual SRS Airbags with ABS', 'Bulletproof Toyota Reliability'],
    isPopular: true,
    tagline: '7 Seats • Premium Captain Row',
    engine: '2.4L GD-Series Turbocharged Common Rail Diesel',
    power: '150 PS @ 3400 RPM',
    clearance: '178 mm luxury passenger-comfort platform',
    waterWading: '300 mm',
    suitability: 'The absolute pinnacle of luxury road cruising. Perfectly tailored for business conferences, high-profile events, and families demanding first-class lounge comfort.',
    rules: 'Treated with premium high-grade upholstery, kindly avoid spillable oil-based snacks inside. Strictly adhere to regional speed limit cameras.',
    classType: 'First-Class Premium Executive MPV'
  },
  {
    id: 'dzire-manual',
    name: 'Maruti Suzuki Dzire VXI',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 3,
    pricePerDay: 1400,
    securityDeposit: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=600',
    features: ['Comfortable Sedan Boot', 'Very High Fuel Economy', 'SmartPlay Infotainment', 'Rear AC Vents', 'Smooth Suspension Click'],
    isPopular: false,
    tagline: 'Compact Sedan • Fuel Efficient',
    engine: '1.2L DualJet Petrol',
    power: '90 BHP',
    clearance: '163 mm ground clearance',
    waterWading: '150 mm',
    suitability: 'Perfect for couples and small families requiring a full-size luggage boot for airport transfers.',
    rules: 'Drive within Goa speed limits. Lock the boot securely before driving.',
    classType: 'Compact Family Sedan'
  },
  {
    id: 'jimny-manual',
    name: 'Maruti Suzuki Jimny 4x4 MT',
    category: 'Thar',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 4,
    luggage: 2,
    pricePerDay: 2300,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600',
    features: ['Compact 4x4 Offroader', 'ALLGRIP PRO Engine Tech', 'Retro Nostalgic Looks', 'Solid Off-Road Axles', 'Spacious Cabin Utility'],
    isPopular: true,
    tagline: 'Compact 4x4 Offroader',
    engine: '1.5L K15B Petrol Engine',
    power: '104 BHP',
    clearance: '210 mm off-road ground clearance',
    waterWading: '400 mm',
    suitability: 'Ideal for travelers looking for retro 4x4 aesthetics coupled with easy maneuvering on narrow streets.',
    rules: 'Utilize 4H/4L modes only on loose sand, gravel, or muddy trails. Avoid asphalt 4x4 binding.',
    classType: 'Retro Utility 4x4 SUV'
  },
  {
    id: 'thar-rwd-auto',
    name: 'Mahindra Thar RWD Automatic',
    category: 'Thar',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 4,
    luggage: 2,
    pricePerDay: 2900,
    securityDeposit: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600',
    features: ['Responsive Turbo Petrol AT', 'RWD High Ground Clearance', 'Sporty Black Alloy Rims', 'Thumping Music System', 'Perfect For Sunset Cruising'],
    isPopular: true,
    tagline: 'Sporty SUV • Wind Cruiser',
    engine: '1.5L Turbo Diesel / 2.0L TGDi Petrol',
    power: '150 BHP mStallion power Output',
    clearance: '226 mm standard ground elevation',
    waterWading: '450 mm',
    suitability: 'Cruising around coastal state highways, catching stunning evening sunset views with high command styling.',
    rules: 'RWD configuration. Strictly do not engage in deep marshy off-road valleys requiring low-gearing.',
    classType: 'High-riding Beach Runner SUV'
  },
  {
    id: 'scorpio-classic',
    name: 'Mahindra Scorpio Classic S11',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 7,
    luggage: 4,
    pricePerDay: 2600,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600',
    features: ['Legendary Muscular Stance', 'mHawk Turbo Diesel Power', 'Premium 9-inch Touchscreen', 'Captain Seats Arrangement', 'Very Commanding Views'],
    isPopular: false,
    tagline: 'Muscular SUV • Powerful Drive',
    engine: '2.2L mHawk Common Rail Diesel',
    power: '130 BHP',
    clearance: '180 mm raw ground clearance',
    waterWading: '350 mm',
    suitability: 'Muscular road presence for larger groups requiring powerful diesel performance on long highway routes.',
    rules: 'Avoid aggressive over-speeding on bridge sections. Maintain proper parking alignment.',
    classType: 'Semi-Luxury Heavy Road SUV'
  },
  {
    id: 'i20-auto',
    name: 'Hyundai i20 Asta IVT',
    category: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 2,
    pricePerDay: 1600,
    securityDeposit: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600',
    features: ['Premium Hatchback Comfort', 'Super Smooth IVT Automatic', 'Electric Sunroof Deck', 'Bose Premium Speakers', 'Ambient Cabin Lighting'],
    isPopular: false,
    tagline: 'Premium Cabin • IVT Smoothness',
    engine: '1.2L Kappa Petrol IVT',
    power: '83 BHP',
    clearance: '170 mm standard city clearance',
    waterWading: '150 mm',
    suitability: 'Superbly quiet city hatchback suited for late night gourmet dining road commutes or family trips.',
    rules: 'Operate sunroof slider gently. Lock windows when running air conditioner.',
    classType: 'Smart Luxury Urban Hatch'
  },
  {
    id: 'seltos-auto',
    name: 'Kia Seltos HTX CVT',
    category: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 3,
    pricePerDay: 2400,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
    features: ['Panoramic Sunroof Glass', 'Dual-Screen High-Tech Dashboard', 'LED Crown Jewel Headlamps', 'Smart Pure Air Purifier', 'Extremely Smooth Driving'],
    isPopular: true,
    tagline: 'Tech SUV • Panoramic Vista',
    engine: '1.5L Smartstream MPi Petrol',
    power: '115 PS output capability',
    clearance: '190 mm robust ground stance',
    waterWading: '220 mm',
    suitability: 'Lovers of high-technology features, smart electronic aids, and beautiful dual-dashboard views.',
    rules: 'Do not stand through the open panoramic sunroof while the vehicle is in motion (strict fine).',
    classType: 'Smart Feature-packed Digital SUV'
  },
  {
    id: 'audi-q3',
    name: 'Audi Q3 Premium Automatic',
    category: 'Luxury',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 4,
    pricePerDay: 6550,
    securityDeposit: 7000,
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
    features: ['Quattro All-Wheel Drive', 'Panoramic Dual Sunroof', 'Virtual Cockpit Display', 'Leather Sports Seats', 'Elite Luxury Status Symbol'],
    isPopular: true,
    tagline: 'German Luxury • Premium AWD',
    engine: '2.0L TFSI Turbocharged Petrol',
    power: '190 BHP high output',
    clearance: '200 mm high premium clearance',
    waterWading: '500 mm',
    suitability: 'Ultra premium sports crossover choice for executive clients, VIP leisure vacations, and luxury coastal hotel stays.',
    rules: 'Use 95+ Octane premium fuel if self-refueling. Maintain clean elite condition of leather seats.',
    classType: 'German Luxury Sporty Crossover'
  },
  {
    id: 'fortuner-suv',
    name: 'Toyota Fortuner Sigma 4x4',
    category: 'Luxury',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 7,
    luggage: 5,
    pricePerDay: 5500,
    securityDeposit: 6000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    features: ['Brutal 4x4 Off-Road Power', 'Commanding Road Presence', 'Ventilated Front Seats', 'Premium JBL Audio System', 'Legendary Toyota Reliability'],
    isPopular: true,
    tagline: 'Colossal Offroad King',
    engine: '2.8L Powerful GD-Turbo Diesel',
    power: '204 BHP massive muscle',
    clearance: '220 mm off-road platform',
    waterWading: '700 mm',
    suitability: 'VIP heavy-duty tours, premium family road presence, and dominant driving feel anywhere in Western India.',
    rules: 'Adhere to defensive speed metrics. Always check tail spacing when reversing this heavy vehicle.',
    classType: 'Dominant Luxury Muscle SUV'
  },
  {
    id: 'nexon-ev',
    name: 'Tata Nexon EV Max',
    category: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Electric',
    seats: 5,
    luggage: 3,
    pricePerDay: 2000,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
    features: ['100% Eco-Friendly Drive', 'Sunroof & Ventilated Seats', 'Quiet & Instant Torque', 'Wireless Charger Pad', 'Very Low Travel Energy Cost'],
    isPopular: false,
    tagline: 'Zero Emissions • Silent Cruise',
    engine: 'High Power Permanent Magnet AC Motor',
    power: '143 PS electric power output',
    clearance: '205 mm high ev ground height',
    waterWading: '300 mm',
    suitability: 'Eco-conscious explorers demanding low noise floor, quiet cabin, and completely free electricity charge utility across Goa.',
    rules: 'Charge battery using official fast charger ports. Return vehicle with at least 15% range left.',
    classType: 'Eco-Smart Clean Energy EV'
  },
  {
    id: 'bmw-3',
    name: 'BMW 3 Series M Sport',
    category: 'Luxury',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    luggage: 3,
    pricePerDay: 8500,
    securityDeposit: 10000,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600',
    features: ['M Sport Aerodynamic Kit', 'Harman Kardon Surround Sound', 'Live Virtual Live Cockpit', 'Dynamic Driving Control Modes', 'Ultra Premium Luxury Drive'],
    isPopular: true,
    tagline: 'High Performance Luxury Sedan',
    engine: '2.0L TwinPower Turbo inline 4-cylinder Petrol',
    power: '258 BHP dynamic power output',
    clearance: '136 mm premium low-slung sedan setup',
    waterWading: '120 mm',
    suitability: 'Experiencing ultimate performance luxury, precision sports handling, and first class styling on your Goa holiday.',
    rules: 'Drive defensively over speed breakers. Absolutely do not attempt to enter marshy sand spaces.',
    classType: 'German high-performance premium saloon'
  }
];

// Compatibility Layers for older page setups
window.CARS_DATA = {};
window.CARS_DATABASE = {};

function getExtendedDescription(car) {
  const name = car.name || 'Premium Car';
  const category = car.category || 'Luxury';
  const trans = car.transmission || 'Automatic';
  const fuel = car.fuelType || car.fuel || 'Petrol';
  const seats = car.seats || 5;
  const eng = car.engine || 'highly advanced';
  const pwr = car.power || 'spirited power delivery';
  const clr = car.clearance || 'ample ground elevation';
  const wad = car.waterWading || car.wading || '150 mm';

  let p1 = `Experience ultimate freedom with the premium ${name}, available for self-drive across Goa. This gorgeous ${trans.toLowerCase()} ${category.toLowerCase()} is perfect for those who want to explore pristine beaches, late-night high-end beach clubs, and historical sites in complete luxury and ease. It offers incredibly smooth drive-ability combined with rich premium accents that match the laid-back coastal aesthetics of popular seaside retreats like Arambol, Morjim, or Palolem. Whether you are aiming to capture beautiful memories or looking for robust everyday performance, this self-drive choice ensures a stellar experience.`;

  let p2 = `Under the hood, the ${name} features a punchy yet efficient ${eng} engine producing ${pwr}. This guarantees rapid pickup and seamless cruising whether you are driving along the wide national highway routes or maneuvering through tight village alleys in Fontainhas, Assagao, or Siolim. The cabin is treated with spacious ${seats}-seater layouts, ensuring high passenger relaxation, cold rapid climate-controlled air conditioning, and top soundproofing for an incredibly silent cabin ambience during your tropical travel excursions.`;

  let p3 = `With a robust ground clearance of ${clr} and professional water articulation up to ${wad}, you can confidently navigate monsoon showers, sudden standard road breaks, and varying high-altitude road profiles without any worries. Combined with low security deposit requirements and high-grade safety configurations, renting this premium ${category} is the most reliable choice for couples, business executives, and luxury holidaymakers seeking top dependability and a memorable self-drive holiday across the stunning Goa coast.`;

  return [p1, p2, p3];
}

window.CARS.forEach(car => {
  // Map legacy property names for backwards compatibility
  car.image = car.imageUrl;
  car.rent = car.pricePerDay;
  car.deposit = car.securityDeposit;
  car.fuel = car.fuelType;
  car.bags = typeof car.luggage === 'number' ? `${car.luggage} Bags` : car.luggage;
  car.wading = car.waterWading;
  
  car.extendedParagraphs = getExtendedDescription(car);

  window.CARS_DATA[car.id] = car;
  window.CARS_DATABASE[car.id] = car;
});

/**
 * ==========================================================================
 * GO GOA CAR BOOKING - PREMIUM NATIVE INTERACTIONS ENGINE
 * ==========================================================================
 */

function runInteractionsEngine() {
  // Initialize Lucide icons on any page
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Mobile Menu Toggling Mechanisms
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuContainer = document.getElementById("mobile-menu");
  
  if (menuBtn && menuContainer) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuContainer.classList.toggle("hidden");
    });

    // Close mobile menu on clicking any link inside it
    menuContainer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuContainer.classList.add("hidden");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuContainer.contains(e.target) && e.target !== menuBtn) {
        menuContainer.classList.add("hidden");
      }
    });
  }

  // Setup Dynamic Cars Booking Dialogs / Forms
  window.openBookingModal = function(carName, ratePerDay) {
    const modal = document.createElement("div");
    modal.className = "modal-backdrop transition-all duration-300";
    modal.id = "booking-modal";

    modal.innerHTML = `
      <div class="modal-content p-6 md:p-8 relative">
        <button onclick="closeBookingModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <span class="text-orange-500 font-bold uppercase tracking-wider text-xs">Direct Booking Enquiry</span>
        <h3 class="text-xl md:text-2xl font-black font-display tracking-tight text-white mt-1 mb-4">${carName}</h3>
        
        <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-4 mb-6">
          <div class="flex justify-between items-center text-sm text-slate-400 mb-1">
            <span>Base rate per day:</span>
            <span class="font-bold text-white">₹${ratePerDay}/day</span>
          </div>
          <div class="flex justify-between items-center text-sm text-slate-400">
            <span>Minimum security deposit:</span>
            <span class="font-bold text-emerald-400">★ Zero Deposit</span>
          </div>
        </div>

        <form id="modal-booking-form" class="flex flex-col gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Selected Car</label>
            <input type="text" id="modal-car-name" value="${carName}" readonly class="font-bold">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Duration (Days)</label>
              <input type="number" id="modal-days" value="3" min="1" max="30" class="font-mono">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Calculated Rent</label>
              <div class="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white font-bold font-mono text-center h-[50px] flex items-center justify-center">
                ₹<span id="modal-total-price">${ratePerDay * 3}</span>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pickup Location Details</label>
            <select id="modal-pickup" required>
              <option value="Mopa Goan Airport">Mopa Airport (NE Goa)</option>
              <option value="Dabolim Goan Airport">Dabolim Airport (South Goa)</option>
              <option value="Calangute/Candolim Core Hub">Calangute / Candolim Center</option>
              <option value="Baga Portal Delivery">Baga Beach Gate</option>
              <option value="Panaji Latin Quarter">Panjim (Latin Quarter / City)</option>
              <option value="Madgaon Railway Station Pickup">Madgaon Station</option>
            </select>
          </div>

          <div class="mt-6 flex flex-col gap-3">
            <button type="button" onclick="submitBookingToWhatsApp('${carName}', ${ratePerDay})" class="btn-bounce bg-emerald-600 text-white font-extrabold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2">
              <i data-lucide="message-square" class="w-5 h-5"></i>
              Confirm & Book on WhatsApp
            </button>
            <p class="text-center text-[10px] text-slate-500">
              *Instant booking allocation. Zero fees, direct confirmation with driver.
            </p>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
    
    // Create new icons inside newly injected HTML
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Dynamic price recalculation on days change
    const daysInput = document.getElementById("modal-days");
    const totalSpan = document.getElementById("modal-total-price");
    if (daysInput && totalSpan) {
      daysInput.addEventListener("input", (e) => {
        const val = parseInt(e.target.value) || 1;
        totalSpan.textContent = val * ratePerDay;
      });
    }
  };

  window.closeBookingModal = function() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.remove();
      document.body.style.overflow = "";
    }
  };

  // Submit direct WhatsApp Booking Format
  window.submitBookingToWhatsApp = function(carName, ratePerDay) {
    const days = document.getElementById("modal-days")?.value || 3;
    const pickup = document.getElementById("modal-pickup")?.value || "Mopa Goa Airport";
    const calculatedRent = days * ratePerDay;

    const message = `Hello Go Goa Car Rental! 🏖️\n\nI am looking to book a self-drive vehicle:\n🚗 車 *Car Select:* ${carName}\n📅 *Rental Period:* ${days} Days\n📍 *Pickup spot:* ${pickup}\n💰 *Expected Rental Value:* ₹${calculatedRent} (at ₹${ratePerDay}/Day with Unlimited KMs)\n\nPlease verify availability! Thank you.`;
    
    const encodedMsg = encodeURIComponent(message);
    const targetNumber = "+916287168644"; // Master Hotline Direct URL Link

    // Cross platform browser redirection
    window.open(`https://wa.me/${targetNumber}?text=${encodedMsg}`, "_blank");
    closeBookingModal();
  };

  // Interactive Live Price Estimation Widget (Homepage / Sidebar Forms support)
  const homeForm = document.getElementById("interactive-calculator-form");
  if (homeForm) {
    homeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const carDropdown = document.getElementById("calc-car");
      const daysInput = document.getElementById("calc-days");
      const deliveryDropdown = document.getElementById("calc-delivery");

      if (!carDropdown || !daysInput || !deliveryDropdown) return;

      const rate = parseInt(carDropdown.value) || 1200;
      const days = parseInt(daysInput.value) || 3;
      const carName = carDropdown.options[carDropdown.selectedIndex].text;
      const deliveryHub = deliveryDropdown.options[deliveryDropdown.selectedIndex].text;

      const totalValue = rate * days;

      const resultBox = document.getElementById("calc-result-box");
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="bg-black/40 border border-emerald-500/30 rounded-xl p-5 mb-4 animate-[fadeIn_0.4s_ease-out]">
            <div class="flex justify-between items-center mb-2">
              <span class="text-emerald-450 font-bold uppercase tracking-wider text-[10px]">Instant Quotation Ready</span>
              <span class="text-[10px] text-slate-500 font-mono">ID: BOOK-${Math.floor(Math.random() * 9000 + 1000)}</span>
            </div>
            <div class="flex flex-col gap-1 mb-3">
              <div class="text-sm text-slate-300 font-semibold">${carName}</div>
              <div class="text-xs text-slate-450">${days} Rental Days at ₹${rate}/day</div>
              <div class="text-xs text-slate-500">Delivery point: ${deliveryHub}</div>
            </div>
            <div class="border-t border-slate-800/80 pt-3 flex justify-between items-center">
              <span class="text-xs text-slate-400">Estimated Rental Rent:</span>
              <span class="text-2xl font-black text-white font-mono">₹${totalValue}</span>
            </div>
          </div>
          <button type="button" onclick="submitCalculatorBooking('${carName}', ${rate}, ${days}, '${deliveryHub}')" class="btn-bounce w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-sm leading-none">
            <i data-lucide="message-square" class="w-4 h-4"></i>
            Lock Premium Cars Spot on WhatsApp
          </button>
        `;
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  }

  window.submitCalculatorBooking = function(carName, rate, days, deliveryHub) {
    const totalRent = rate * days;
    const message = `Hello Go Goa Car Rental! 🏖️\n\nI calculated this quote on the web app:\n🚗 *Car Select:* ${carName}\n📅 *Period:* ${days} Days (₹${rate}/day)\n📍 *Location:* ${deliveryHub}\n💰 *Premium Rental Cost:* ₹${totalRent}\n\nPlease confirm availability for early booking! My selected car spot is ready.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/+916287168644?text=${encoded}`, "_blank");
  };

  // Close modals when ESC key is clicked
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBookingModal();
      if (typeof window.closeCarDetailDialog === 'function') {
        window.closeCarDetailDialog();
      }
    }
  });

  // Dynamic style injection to make the entire card feel luxury-grade & clickable
  const style = document.createElement('style');
  style.textContent = `
    .car-card {
      cursor: pointer !important;
    }
    
    @keyframes luxury-bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    
    .btn-bounce-call {
      animation: luxury-bounce 2.2s infinite ease-in-out !important;
    }
    
    .btn-bounce-whatsapp {
      animation: luxury-bounce 2.2s infinite ease-in-out !important;
      animation-delay: 0.4s !important;
    }
    
    .btn-bounce-ai {
      animation: luxury-bounce 2.2s infinite ease-in-out !important;
      animation-delay: 0.8s !important;
    }
    
    .quick-dock-btn {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    }
    
    .quick-dock-btn:hover {
      transform: scale(1.08) !important;
    }
    
    .quick-dock-btn:active {
      transform: scale(0.95) !important;
    }
    
    #quick-actions-dock-wrapper {
      bottom: calc(1.8rem + env(safe-area-inset-bottom)) !important;
    }

    @media (max-width: 768px) {
      #floating-sticky-sidebar {
        display: flex !important;
        position: fixed !important;
        left: 14px !important;
        bottom: auto !important;
        top: 30% !important; /* Shuffled significantly higher up towards navigation/header */
        transform: translateY(-50%) !important;
        z-index: 100000 !important;
        flex-direction: column !important;
        gap: 12px !important;
      }
      #floating-sticky-sidebar a,
      #floating-sticky-sidebar button {
        width: 46px !important;
        height: 46px !important;
        padding: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 9999px !important;
        background-color: rgb(15, 16, 21, 0.95) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.7) !important;
      }
      #floating-sticky-sidebar a.bg-emerald-600\/95,
      #floating-sticky-sidebar a[href*="wa.me"] {
        background-color: #059669 !important; /* Premium Emerald */
        border-color: rgba(16, 185, 129, 0.2) !important;
      }
      #floating-sticky-sidebar span {
        display: none !important;
      }
      #quick-actions-dock-wrapper {
        display: none !important; /* Clear the screen to avoid dual buttons clashing */
      }

      /* Force chatbot layout and container clearance on mobile viewports without blocking touches when closed */
      .fixed.right-6.bottom-6.z-50, 
      .fixed.right-6.bottom-6.z-\[9999\],
      #ai-chat-widget-container {
        right: 16px !important;
        left: 16px !important;
        bottom: 100px !important; /* Keeps it clear above safe zones */
        width: auto !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        pointer-events: none !important;
      }
      
      #ai-chat-box {
        width: 100% !important;
        max-width: 380px !important; /* Centered layout for comfortable typing */
        margin-bottom: 0 !important;
        height: 400px !important;
        pointer-events: auto !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Dynamic global click handler for .car-card components across ALL pages
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".car-card");
    if (!card) return;

    // Ignore if clicking on buttons or links inside the card
    if (e.target.closest("a, button, input, select, textarea, [onclick*='dispatchWhatsAppBooking'], [onclick*='openBookingModal'], [onclick*='closeBookingModal'], [onclick*='closeCarDetailDialog']")) {
      return;
    }

    // Retrieve the car ID from either dataset or children elements
    let carId = card.getAttribute("data-car-id");
    if (!carId) {
      const trigger = card.querySelector("[onclick*='openCarDetailDialog']");
      if (trigger) {
        const onclickAttr = trigger.getAttribute("onclick");
        const match = onclickAttr ? onclickAttr.match(/openCarDetailDialog\(['"]([^'"]+)['"]\)/) : null;
        if (match && match[1]) {
          carId = match[1];
        }
      }
    }

    if (carId && typeof window.openCarDetailDialog === 'function') {
      e.preventDefault();
      window.openCarDetailDialog(carId);
    }
  });

  // ==========================================================================
  // UNIFIED QUICK ACTIONS DOCK & SITE-WIDE GEMINI AI ASSISTANT INJECTOR
  // ==========================================================================

  // 1. Setup the global AI Chat state and methods if not already defined
  if (typeof window.toggleAIChat !== 'function' || !window.hasUnifiedAIChatInit) {
    window.hasUnifiedAIChatInit = true;
    
    let aiChatHistory = [
      {
        role: "model",
        text: "👋 Susegado! I'm your Go Goa AI Assistant! Planning a Goa trip? Ask me details about standard itineraries, the best beaches, speed limits, or which of our self-drive cars fits your group size. I can also help calculate quotes!"
      }
    ];

    window.toggleAIChat = function() {
      const chatBox = document.getElementById('ai-chat-box');
      if (!chatBox) return;
      if (chatBox.classList.contains('hidden')) {
        chatBox.classList.remove('hidden');
        chatBox.classList.add('flex');
        const historyEl = document.getElementById('ai-chat-history');
        if (historyEl) {
          historyEl.scrollTop = historyEl.scrollHeight;
        }
      } else {
        chatBox.classList.add('hidden');
        chatBox.classList.remove('flex');
      }
    };

    window.appendAIChatMessage = function(role, text) {
      const historyEl = document.getElementById('ai-chat-history');
      if (!historyEl) return;
      const msgDiv = document.createElement('div');
      msgDiv.className = `flex flex-col ${role === 'user' ? 'items-end' : 'items-start'}`;

      const nameToken = role === 'user' ? 'You' : 'Go Goa Host';
      const bubbleClass = role === 'user'
        ? 'bg-orange-600 text-white rounded-tr-none shadow-md shadow-orange-600/10 border border-orange-500/10'
        : 'bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800/60';

      const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const cleanText = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

      msgDiv.innerHTML = `
        <span class="text-[8px] text-slate-500 font-bold uppercase mb-0.5 tracking-wider px-1 font-mono">${nameToken}</span>
        <div class="p-3 rounded-2xl max-w-[85%] leading-relaxed ${bubbleClass}">
          <p class="whitespace-pre-line leading-relaxed">${cleanText}</p>
        </div>
        <span class="text-[8px] text-slate-500 font-mono mt-0.5 px-1 font-medium">${timeString}</span>
      `;
      historyEl.appendChild(msgDiv);
    };

    window.handleAIChatSubmit = async function(event) {
      if (event) event.preventDefault();
      const inputEl = document.getElementById('ai-chat-input');
      if (!inputEl) return;
      const text = inputEl.value.trim();
      if (!text) return;

      inputEl.value = '';
      window.appendAIChatMessage('user', text);
      aiChatHistory.push({ role: 'user', text });

      const loadingEl = document.getElementById('ai-chat-loading');
      if (loadingEl) loadingEl.classList.remove('hidden');

      const historyEl = document.getElementById('ai-chat-history');
      if (historyEl) {
        historyEl.scrollTop = historyEl.scrollHeight;
      }

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: aiChatHistory })
        });
        const data = await response.json();
        if (loadingEl) loadingEl.classList.add('hidden');

        if (data && data.text) {
          window.appendAIChatMessage('model', data.text);
          aiChatHistory.push({ role: 'model', text: data.text });
        } else {
          const errMsg = "I met a small glitch mapping your roads! Please try again or WhatsApp us at +91 82088 18451.";
          window.appendAIChatMessage('model', errMsg);
          aiChatHistory.push({ role: 'model', text: errMsg });
        }
      } catch (err) {
        console.error('Error fetching chat response:', err);
        if (loadingEl) loadingEl.classList.add('hidden');
        const errMsg = "Deepest apologies! Network waves are bumpy right now. Call us at +91 82088 18451 for assistance.";
        window.appendAIChatMessage('model', errMsg);
        aiChatHistory.push({ role: 'model', text: errMsg });
      }

      if (historyEl) {
        historyEl.scrollTop = historyEl.scrollHeight;
      }
    };
  }

  // 2. Keep the floating sticky sidebar active and visible across all viewport sizes as requested by the user
  const legacySidebar = document.getElementById('floating-sticky-sidebar');
  if (legacySidebar) {
    // Ensure it is styled with flex display to be visible
    legacySidebar.style.setProperty('display', 'flex', 'important');

    // Add the AI Planner button as the third button inside the sidebar if not already present
    if (!document.getElementById('floating-sidebar-ai-btn')) {
      const aiBtn = document.createElement('button');
      aiBtn.id = 'floating-sidebar-ai-btn';
      // On mobile, the dimensions/styles will be overridden by the mobile stylesheet we injected above
      aiBtn.className = 'group flex items-center justify-center bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-white p-3 md:p-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 animate-bounce-ai cursor-pointer';
      aiBtn.title = 'Open AI Planner';
      aiBtn.setAttribute('aria-label', 'Open AI Planner');
      aiBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400 animate-pulse shrink-0"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/><path d="M19 17l1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>
      `;
      aiBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleAIChat();
      });
      legacySidebar.appendChild(aiBtn);
    }
  }

  // Hide older redundant triggers precisely (like the sparkles button and other elements)
  const oldSparklesBtns = document.querySelectorAll('button[onclick="toggleAIChat()"]');
  oldSparklesBtns.forEach(btn => {
    btn.style.setProperty('display', 'none', 'important');
  });

  // Upgrade the static chat box container z-index if it exists
  const staticChatContainer = document.querySelector('.fixed.right-6.bottom-6.z-50');
  if (staticChatContainer) {
    staticChatContainer.classList.remove('z-50');
    staticChatContainer.classList.add('z-[9999]');
  }

  // 3. Inject the modern AI Chatbox interface if it's not present (on non-home subpages)
  if (!document.getElementById('ai-chat-box')) {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'ai-chat-widget-container';
    chatContainer.className = 'fixed right-4 bottom-24 sm:right-6 sm:bottom-24 z-[9999] flex flex-col items-end selection:bg-orange-500 selection:text-white font-sans text-slate-350';
    chatContainer.innerHTML = `
      <div id="ai-chat-box" class="hidden flex-col bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-[310px] sm:w-[360px] h-[430px] overflow-hidden mb-3 relative text-slate-300">
        <!-- Header -->
        <div class="bg-slate-950 p-3.5 text-white flex justify-between items-center select-none border-b border-slate-850">
          <div class="flex items-center gap-2">
            <div class="bg-orange-500/10 border border-orange-500/20 text-orange-400 p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400 animate-pulse"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/><path d="M19 17l1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>
            </div>
            <div class="text-left font-display">
              <div class="text-xs font-black tracking-tight">Goa AI Local Planner</div>
              <div class="text-[9px] text-orange-400 font-extrabold uppercase tracking-wider font-mono">Gemini AI Host</div>
            </div>
          </div>
          <button 
            type="button"
            id="ai-chat-close-btn"
            class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 cursor-pointer transition-colors"
            aria-label="Close Chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Chat History -->
        <div id="ai-chat-history" class="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-950/40 select-text text-[11px] scroll-smooth">
          <!-- Welcome Message -->
          <div class="flex flex-col items-start">
            <span class="text-[8px] text-slate-500 font-bold uppercase mb-0.5 tracking-wider px-1 font-mono">Go Goa Host</span>
            <div class="p-3 rounded-2xl max-w-[85%] leading-relaxed bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800/60">
              <p class="whitespace-pre-line leading-relaxed">👋 Susegado! I'm your Go Goa AI Assistant! Planning a Goa trip? Ask me details about standard itineraries, the best beaches, speed limits, or which of our self-drive cars fits your group size. I can also help calculate quotes!</p>
            </div>
            <span class="text-[8px] text-slate-500 font-mono mt-0.5 px-1 font-medium">Just now</span>
          </div>
        </div>

        <!-- Loading Indicator -->
        <div id="ai-chat-loading" class="hidden px-4 py-2 border-t border-slate-850 bg-slate-950/30">
          <div class="flex items-start gap-1">
            <div class="bg-orange-500/10 border border-orange-500/15 text-orange-400 px-3 py-1.5 rounded-xl text-[10px] font-semibold flex items-center gap-2 animate-pulse font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
              <span>AI Host planning your roads...</span>
            </div>
          </div>
        </div>

        <!-- Chat Input Form -->
        <form id="ai-chat-form" class="p-2.5 bg-slate-950 border-t border-slate-850 flex gap-1.5 items-center">
          <input 
            id="ai-chat-input"
            type="text" 
            placeholder="Ask driving limits, routes, vehicle tips..."
            class="flex-1 text-[11px] px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500"
            required
          />
          <button 
            type="submit" 
            class="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-xl block transition-all cursor-pointer"
            aria-label="Send Message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(chatContainer);

    // Setup events
    const closeBtn = document.getElementById('ai-chat-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        window.toggleAIChat();
      });
    }

    const formEl = document.getElementById('ai-chat-form');
    if (formEl) {
      formEl.addEventListener('submit', (e) => {
        window.handleAIChatSubmit(e);
      });
    }
  }

  // 4. Inject the unified Quick Actions Bottom Dock on ALL pages with highest z-index
  if (!document.getElementById('quick-actions-dock-wrapper')) {
    const wrapper = document.createElement('div');
    wrapper.id = 'quick-actions-dock-wrapper';
    wrapper.className = 'fixed bottom-5 inset-x-0 z-[10000] flex justify-center px-4 pointer-events-none transition-all duration-300';
    wrapper.innerHTML = `
      <div id="quick-actions-dock" class="pointer-events-auto flex items-center gap-2 bg-slate-950/90 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-800/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] whitespace-nowrap select-none max-w-[95vw] transition-all hover:-translate-y-0.5 duration-300">
        <!-- Call Support Now -->
        <a href="tel:+916287168644" class="quick-dock-btn btn-bounce-call flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-full font-sans font-extrabold text-[10px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="quick-dock-text font-extrabold">Call Now</span>
        </a>

        <!-- Divider -->
        <div class="quick-dock-divider h-5 w-px bg-slate-800 shrink-0"></div>

        <!-- WhatsApp Desk Now -->
        <a href="https://wa.me/916287168644?text=Hi,%20I%20want%20to%20rent%20a%20self-drive%20car%20for%20my%20Goa%20trip." target="_blank" rel="noreferrer" class="quick-dock-btn btn-bounce-whatsapp flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full font-sans font-extrabold text-[10px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md shrink-0">
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current shrink-0 text-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span class="quick-dock-text font-extrabold">WhatsApp</span>
        </a>

        <!-- Divider -->
        <div class="quick-dock-divider h-5 w-px bg-slate-800 shrink-0"></div>

        <!-- AI Assistant Tool Toggle -->
        <button id="quick-dock-ai-btn" class="quick-dock-btn btn-bounce-ai flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-orange-500/40 text-white px-4 py-2 rounded-full font-sans font-extrabold text-[10px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md hover:bg-slate-850 shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500 animate-pulse shrink-0"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/><path d="M19 17l1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>
          <span class="quick-dock-text font-extrabold">AI Planner</span>
        </button>
      </div>
    `;
    document.body.appendChild(wrapper);

    // Setup action listener
    const dockAiBtn = document.getElementById('quick-dock-ai-btn');
    if (dockAiBtn) {
      dockAiBtn.addEventListener('click', () => {
        window.toggleAIChat();
      });
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runInteractionsEngine);
} else {
  runInteractionsEngine();
}

