/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Car {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | 'Thar';
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  seats: number;
  luggage: number;
  pricePerDay: number;
  securityDeposit: number;
  imageUrl: string;
  features: string[];
  isPopular?: boolean;
}

export interface BookingRequest {
  id?: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropDate: string;
  dropTime: string;
  carId: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  specialRequests?: string;
  estimatedTotal?: number;
  status?: 'Pending' | 'Confirmed' | 'Completed';
  createdAt?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  carRented: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'driving' | 'documents' | 'payments';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
