/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory array to store bookings durably for the active server session
interface ServerBooking {
  id: string;
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
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}

const bookings: ServerBooking[] = [];

// Initialize Gemini SDK lazily to avoid crashing on missing key at startup. See guidelines!
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  }
  return aiClient;
}

// ============== API ENDPOINTS ==============

// 1. Fetch available bookings
app.get('/api/bookings', (req, res) => {
  res.json({ bookings });
});

// 2. Handle a new Booking Enquiry
app.post('/api/bookings', (req, res) => {
  try {
    const {
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
      dropDate,
      dropTime,
      carId,
      userName,
      userPhone,
      userEmail,
      specialRequests,
      estimatedTotal
    } = req.body;

    if (!pickupLocation || !dropLocation || !pickupDate || !dropDate || !userName || !userPhone) {
      return res.status(400).json({ error: 'Missing mandatory fields for car rental enquiry' });
    }

    const newBooking: ServerBooking = {
      id: 'GGCB-' + Math.floor(100000 + Math.random() * 900000),
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime: pickupTime || '10:00',
      dropDate,
      dropTime: dropTime || '10:00',
      carId,
      userName,
      userPhone,
      userEmail: userEmail || '',
      specialRequests: specialRequests || '',
      estimatedTotal: estimatedTotal || 0,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);
    console.log(`[Go Goa Car Booking] Recorded new booking: ${newBooking.id} for ${newBooking.userName}`);

    res.status(201).json({
      success: true,
      message: 'Your Booking Enquiry was received successfully!',
      booking: newBooking
    });
  } catch (err: any) {
    console.error('Error in Booking record:', err);
    res.status(500).json({ error: 'Internal server error processing car booking.' });
  }
});

// 2.5 Cancel or update status of active inquiries
app.delete('/api/bookings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index].status = 'Cancelled' as any;
      console.log(`[Go Goa Car Booking] Booking ${id} was marked as Cancelled`);
      return res.json({ success: true, message: 'Reservation successfully marked as Cancelled.' });
    }
    return res.status(404).json({ error: 'No reservation matches the given identifier.' });
  } catch (err: any) {
    console.error('Error in cancellation:', err);
    res.status(500).json({ error: 'Internal server error cancelling booking.' });
  }
});

// 3. AI Assistant Route - Goa Travel Agent & Car Selector Chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required for chat' });
    }

    const client = getGeminiClient();
    if (!client) {
      return res.json({
        text: "I am ready to help! However, the Gemini API Key is currently unconfigured. You can chat with me, but I'll reply with local tips: Keep in mind when driving in Goa that the speed limit is 70 km/h on highways, and we deliver cars to both Mopa & Dabolim airports. Call us on +91 6287168644 to proceed directly!"
      });
    }

    // Format previous conversation context for the Gemni chat sendMessage
    // We can extract user input or send as contents or use chat object. Let's do standard chat.
    // Let's configure system instructions for the ultimate Goan local rental expert.
    const systemInstruction = 
      "You are the senior Goa holiday and booking advisor at 'Go Goa Car Booking' (gogoacarbooking.in). " +
      "You are warm, friendly, carrying true Goan hospitality, and have excellent local knowledge of South and North Goa. " +
      "Your objective is to: \n" +
      "1. Help tourists plan their travel itinerary or sightseeing in Goa. \n" +
      "2. Advise on the best self-drive car based on group size or preference: recommendation logic: \n" +
      "   - Couples/Budget: WagonR, Swift (Manual/Automatic) @ ₹1000 - ₹1500/day \n" +
      "   - Luxury/Compact Smooth: Baleno Auto @ ₹1700/day \n" +
      "   - Family of 5+: Ertiga 7-seater @ ₹2200/day, Innova Crysta ZX @ ₹4500/day \n" +
      "   - Adventure/Beach/Styling: Mahindra Thar 4x4 (Convertible/Hard Top) @ ₹2800 - ₹3200/day \n" +
      "3. Remind users about Goa safety rules: general speed limit is strict (70 km/h on highways, 40 km/h on bridges/cities), lidded helmets/seatbelts are mandatory, and original driving license is absolutely required. \n" +
      "4. Be very concise, professional, and clear. Help them choose. If they decide, advise them to fill out the quick booking form on page or contact via WhatsApp. \n" +
      "Our main contact details: Phone/WhatsApp +91 6287168644. Main Address is beside Mopa Airport Gate, Goa.";

    // Retrieve last message and feed into a simple chat session or models.generateContent
    // Since simple generateContent is less prone to race conditions, let's assemble contents
    const chatContents = messages.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: chatContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({
      text: response.text || "Sorry, I couldn't formulate a response. Please let me know how I can help!"
    });

  } catch (err: any) {
    console.error('Gemini API Error:', err);
    res.status(500).json({ 
      error: 'Failed to consult the Go Goa booking assistant.', 
      details: err?.message || err 
    });
  }
});


// ============== DEV/PROD ROUTING ==============

// Auto-rewrite extension-less custom URLs to serve their corresponding HTML variants
app.use((req, res, next) => {
  if (req.method === 'GET' && !path.extname(req.path)) {
    const cleanPages = ['about', 'thar-rental', 'luxury-rental', 'family-rental', 'fleet', 'services', 'blogs', 'contact', 'terms-and-privacy', 'rental-faq', 'car-details'];
    const requested = req.path.replace(/^\/|\/$/g, '');
    if (cleanPages.includes(requested)) {
      if (process.env.NODE_ENV !== 'production') {
        req.url = `/${requested}.html`;
      } else {
        return res.sendFile(path.join(process.cwd(), 'dist', `${requested}.html`));
      }
    }
  }
  next();
});

async function setupAndStart() {
  if (process.env.NODE_ENV !== 'production') {
    // Development Mode - Use Vite middleware Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'mpa',
    });
    app.use(vite.middlewares);
    console.log('[Go Goa Car Booking] Vite Dev Middleware mounted.');
  } else {
    // Production Mode - Serve pre-bundled static files from /dist
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('[Go Goa Car Booking] Production asset serving enabled.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Go Goa Car Booking] Server running at http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

setupAndStart().catch(err => {
  console.error('Fatal crash on server start:', err);
});
