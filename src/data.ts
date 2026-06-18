/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Car, CustomerReview, FAQItem } from './types';

export const LOCATIONS = [
  'Mopa Airport (New Goa International Airport)',
  'Dabolim Airport (Goa International Airport)',
  'Thivim Railway Station (North Goa)',
  'Madgaon Railway Station (South Goa)',
  'Calangute Beach / Resort Delivery',
  'Baga Beach / Hotel Delivery',
  'Candolim Beach / Resort Delivery',
  'Panaji (Panjim) Bus Stand / Delivery Desk',
  'Mapusa City Centre',
  'Margao City Centre / Railway Hub'
];

export const CARS: Car[] = [
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
    isPopular: true
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
    isPopular: true
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
    isPopular: false
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
    isPopular: true
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
    isPopular: false
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
    isPopular: true
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
    isPopular: true
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
    isPopular: true
  },
  {
    id: 'ertiga',
    category: 'SUV',
    name: 'Maruti Suzuki Ertiga (7-Seater)',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 7,
    luggage: 4,
    pricePerDay: 2200,
    securityDeposit: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&q=80&w=600',
    features: ['Spacious 3-Row Seating', 'Roof Mounted Rear AC Vents', 'Convertible Cargo Space', 'Excellent for Groups & Families', 'Elegant Projector Lamps'],
    isPopular: true
  },
  {
    id: 'scorpio-n',
    name: 'Mahindra Scorpio N Z8',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 7,
    luggage: 4,
    pricePerDay: 2800,
    securityDeposit: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    features: ['Muscular Offroad Presence', 'Powerful mHawk Engine', 'Adrenox Luxury Connected Tech', 'Sony Surround Audio Grid', 'Dual-Zone Climate Control'],
    isPopular: false
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
    isPopular: true
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
    isPopular: false
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
    isPopular: true
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
    isPopular: true
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
    isPopular: false
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
    isPopular: false
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
    isPopular: true
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
    isPopular: true
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
    isPopular: true
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
    isPopular: false
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
    isPopular: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'req-doc',
    question: 'What documents are required to rent a self-drive car in Goa?',
    answer: 'You need to present an Original Original Indian Driving License (Laminated DL) and a matching Aadhaar Card or Passport. Foreign tourists require an International Driving Permit (IDP) along with their country national DL and Passport.',
    category: 'documents'
  },
  {
    id: 'sec-dep',
    question: 'How much is the security deposit and is it refundable?',
    answer: 'The security deposit ranges from ₹2,000 to ₹5,000 depending on the vehicle class (hatchbacks are lowest, Thar and Luxury are highest). The security deposit is 100% refundable immediately at the time of drop-off after checking the vehicle for any new damages or traffic violations.',
    category: 'payments'
  },
  {
    id: 'fuel-pol',
    question: 'What is your fuel policy?',
    answer: 'We provide you the car with a certain level of fuel, and you are expected to return it with the same level of fuel. If it is returned with less fuel, fuel charges at market rate will be deducted from your deposit.',
    category: 'payments'
  },
  {
    id: 'speed-lim',
    question: 'Are there speed limits for rental cars in Goa?',
    answer: 'Yes. The general speed limit for passengers and self-drive vehicles in Goa is 70 km/h on highways and 40 km/h within city limits, town streets, and tourist zones. Several speed cameras are active near Mandovi Bridge, Zuari Bridge, and Airport roads. Violations are instantly fined by Goa Traffic Police.',
    category: 'driving'
  },
  {
    id: 'del-loc',
    question: 'Do you deliver cars directly to Mopa Airport or hotels in Goa?',
    answer: 'Yes! We offer 24/7 complimentary doorstep delivery and returns at Mopa Airport (New Goa Airport VXD), Dabolim Airport (GOI), and Calangute area. For remote hotels in far North (Arambol, Morjim) or deep South Goa (Palolem, Colva), a nominal pickup/drop-off delivery charge of ₹500 is requested.',
    category: 'booking'
  },
  {
    id: 'min-age',
    question: 'What is the minimum age to rent and drive a car?',
    answer: 'The driver must carry a valid non-learner driving license and must be at least 21 years of age for economy hatchbacks, and 23 years of age for SUVs, Mahindra Thars, and luxury category vehicles.',
    category: 'driving'
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Aman Sharma',
    location: 'New Delhi, India',
    rating: 5,
    comment: 'Booked the Mahindra Thar Open-Top for 4 days. Delivery was right at Mopa Airport parking lot within 5 minutes of landing! The car was super clean and we had an amazing trip. Highly recommend Go Goa Car Booking.',
    date: 'May 12, 2026',
    carRented: 'Mahindra Thar 4x4 Automatic'
  },
  {
    id: 'rev-2',
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    comment: 'Excellent service. We rented a Wagon R and then extended for another 2 days due to weather. The team was extremely accommodating, processed extension on WhatsApp, and picked up the vehicle from our South Goa resort without any hassle.',
    date: 'April 28, 2026',
    carRented: 'Maruti Wagon R'
  },
  {
    id: 'rev-3',
    name: 'John Miller',
    location: 'London, UK',
    rating: 5,
    comment: 'The best car rental company in Goa. The Baleno was automatic, perfect for Goa narrow streets. Reasonable pricing, clear communication, and the refundable security deposit was sent back to my bank account instantly upon check-out.',
    date: 'March 15, 2026',
    carRented: 'Maruti Suzuki Baleno Alpha'
  },
  {
    id: 'rev-4',
    name: 'Rohit Sen',
    location: 'Kolkata, India',
    rating: 5,
    comment: 'Fabulous experience renting Ertiga for my family group. Prompt service, great price compared to local taxi rates. Clean car, high confidence, will definitely book from them again on my next Goa trip!',
    date: 'May 20, 2026',
    carRented: 'Maruti Suzuki Ertiga (7-Seater)'
  }
];

export const OFFICE_CONTACT = {
  phone1: '+91 62871 68644',
  phone2: '+91 62871 68644',
  whatsapp: '916287168644',
  whatsappUrl: 'https://wa.me/916287168644',
  email: 'support@gogoacarbooking.in',
  backupEmail: 'gogoacarbooking@gmail.com',
  mainAddress: 'Counter 15, Manohar International Airport, Mopa, Kasarvarne, Goa 403512',
  calanguteAddress: 'Opp. Calangute Mall, Calangute-Baga Road, Calangute, Goa 403516',
  dabolimAddress: 'Shop No. 4, Ground Floor, Opp. Dabolim Airport Terminal, Dabolim, Goa 403801'
};
