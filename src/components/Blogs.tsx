import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowLeft, Heart, Share2, Compass, AlertCircle, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: React.ReactNode;
  imageUrl: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
}

export default function Blogs() {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 'mopa-vs-dabolim',
      title: 'Mopa vs Dabolim Airport: Ultimate Guide for Self-Drive Car Handovers in Goa',
      slug: 'mopa-vs-dabolim-car-rental-guide',
      excerpt: 'Stuck deciding whether to fly into New Goa Manohar Airport (Mopa) or Dabolim? Read our comparative terminal analysis on pick-up protocols, cost-efficiency, and highway connectivity.',
      category: 'Airport Handover',
      date: 'May 18, 2026',
      readTime: '6 Min Read',
      author: 'Sandesh Naik (Operations)',
      imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600',
      tags: ['Mopa Airport', 'Dabolim Airport', 'Airport Transit', 'Self Drive'],
      content: (
        <article className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans text-left">
          <p className="font-semibold text-slate-200 text-base leading-relaxed">
            Planning a trip to Goa can sometimes leave you stuck at the very first junction: choosing your landing hub. Since the commissioning of the pristine Manohar International Airport (Mopa, VXD), Goa is served by two major civilian air gateways.
          </p>
          <p>
            While both airports offer terminal-side car delivery, their geographic distances, highway routes, and traffic congestion profiles are completely different. Driving a self-drive car out of Mopa vs. Dabolim demands separate route knowledge.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">1. Geographic Proximity & Ultimate Destinations</h3>
          <p>
            Your airport selection should be directly aligned with where your resort booking lies. Driving an extra 60 kilometers in slow traffic can drain your holiday energy on Day 1.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs text-left text-slate-300 border-collapse border border-slate-800">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800">
                  <th className="p-3 font-bold text-white border-r border-slate-800">Destination Resort Zone</th>
                  <th className="p-3 font-bold text-white border-r border-slate-800">From Mopa Airport (VXD)</th>
                  <th className="p-3 font-bold text-white">From Dabolim Airport (GOI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-850">
                  <td className="p-2.5 font-semibold text-slate-200 border-r border-slate-800">North Goa Beaches (Calangute, Baga, Candolim)</td>
                  <td className="p-2.5 text-emerald-400 border-r border-slate-800">30 km (Approx 45 Mins, via NH-66)</td>
                  <td className="p-2.5 text-rose-450 text-rose-450 text-amber-500">42 km (Approx 1 Hr 15 Mins, via Zuari Bridge)</td>
                </tr>
                <tr className="border-b border-slate-850">
                  <td className="p-2.5 font-semibold text-slate-200 border-r border-slate-800">Extreme North (Arambol, Morjim, Mandrem)</td>
                  <td className="p-2.5 text-emerald-400 font-bold border-r border-slate-800">22 km (Approx 30 Mins, bypass routes)</td>
                  <td className="p-2.5 text-rose-500 border-r border-slate-800">58 km (Approx 1 Hr 40 Mins)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-slate-200 border-r border-slate-800">South Goa Beaches (Colva, Cavelossim, Palolem)</td>
                  <td className="p-2.5 text-red-400 border-r border-slate-800">85 km (Approx 2 Hours 15 Mins)</td>
                  <td className="p-2.5 text-emerald-400 font-bold">25 km to 60 km (Approx 40 Mins to 1.5 Hrs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-black text-white font-display pt-3">2. Terminal Car Pickup Protocols</h3>
          <p>
            At <strong>Manohar Mopa Airport</strong>, car handovers are exceptionally streamlined. Our Go Goa representatives wait in the designated private vehicle parking zones situated directly adjacent to the arrival gates exit. Due to high-tech digital toll readers and spacious lanes, picking up your car takes less than 5 minutes.
          </p>
          <p>
            At <strong>Dabolim International Airport</strong>, the arrival terminal is closely monitored by local airport shuttles and police limits. Handovers are carried out in the multi-level parking deck. Please note that during peak arrival periods (2 PM to 6 PM), there may be slight holding limits.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">3. Road Quality & Driving Experience</h3>
          <p>
            Leaving Mopa places you instantly on the newly created express flyovers connecting to <strong>NH-66</strong> (6-lane highway). The tarmac has excellent visibility, safety barriers, and well-marked signboards.
          </p>
          <p>
            Leaving Dabolim takes you through narrow state corridors first before joining the elevated highway of the Zuari Bridge. Beware of high taxi rush around Cortalim junction.
          </p>

          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex gap-3 my-5">
            <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-white block font-display mb-1">PRO-TIP from the Go Goa Desk:</strong>
              If you land at Mopa Airport but have a hotel in South Goa, consider booking an automatic vehicle like our Baleno Alpha or Swift AMT. The highway stretch across Panaji and Zuari bridges suffers from high commuter traffic during work hours, making manual shifting exhausting.
            </div>
          </div>
        </article>
      )
    },
    {
      id: 'south-goa-explore',
      title: 'South Goa Untranslated: Top 5 Serene Uncrowded Beaches to Explore in 2026',
      slug: 'south-goa-serene-uncrowded-beaches',
      excerpt: 'Ditch the chaotic shacks of Baga and Calangute. We map out the absolute cleanest, calmest, and secret beaches down South where you can drive our self-drive hatchback or SUV.',
      category: 'Travel Guide',
      date: 'May 12, 2026',
      readTime: '8 Min Read',
      author: 'Ashish Jha (Goa Native Writer)',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
      tags: ['South Goa', 'Offbeat Goa', 'Beaches Guide', 'Road Trip'],
      content: (
        <article className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans text-left">
          <p className="font-semibold text-slate-200 text-base leading-relaxed">
            Most people associate Goa with crowded techno beach shacks and chaotic jet-skis. However, if you steer your rental vehicle south of the Zuari River, Goa transforms into a sleepy, scenic paradise.
          </p>
          <p>
            Here are the top 5 pristine, uncrowded beaches in South Goa that are highly accessible with our rental cars, but remain miles away from standard tourist noise.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">1. Cola Beach (The Hidden Lagoon)</h3>
          <p>
            Cola Beach is legendary for its fresh-water lagoon that runs parallel to the Arabian Sea. Surrounded by tall coconut groves, it is accessible via a rugged, unpaved off-road path turning off the main Canacona highway.
          </p>
          <div className="border border-slate-800 p-3 bg-slate-900/60 rounded-xl my-2 text-xs">
            <strong className="text-white">Vehicle Compatibility:</strong> High ground clearance is required. Our <strong className="text-orange-400">Mahindra Thar 4x4</strong> or <strong className="text-orange-400">Maruti Suzuki Brezza</strong> handles this path effortlessly. Small hatchbacks are not recommended due to deep rocky soil cuts.
          </div>

          <h3 className="text-lg font-black text-white font-display pt-3">2. Kakolem Beach (Tiger Beach)</h3>
          <p>
            Kakolem is a dramatic cove beach flanked by tall cliffs. A natural freshwater stream flows directly onto the sandy bed here. It requires climbing down a short rocky staircase from the parking spot, which is private and incredibly peaceful.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">3. Galgibaga Beach (Olive Ridley Nesting Hub)</h3>
          <p>
            Famous of its pine trees instead of palm trees, Galgibaga is the official nesting ground of Olive Ridley sea turtles. Sound systems, beach beds, and high-intensity lights are strictly banned here. The sea here is deep, making it awesome for spectacular morning walks. This beach serves some of the freshest, locally sourced Goan Crab Masala in cozy family-run huts.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">4. Talpona Beach (A Scenic Fisherman Haven)</h3>
          <p>
            Adjacent to the Talpona river estuary, this beach features incredibly flat white sands and safe shallow waves. You will barely see 10 people across a 1 km stretch on any weekday.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">5. Agonda Beach (The Pristine Coastal Strip)</h3>
          <p>
            Agonda is widely regarded by global travel magazines as one of Asia's finest relaxation strips. Its laid-back cafes present organic vegan foods, yoga wellness centers, and serene beach views.
          </p>

          <div className="bg-slate-900 border border-slate-850 p-5 rounded-2xl my-6">
            <h4 className="text-white font-bold mb-2">Driving Rules for South Goa Shrines & Villages:</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              When navigating deep South Goa areas, streets are exceptionally narrow with blind turns centered near local heritage Portuguese villas. Keep your speed below 30 km/h, use gentle horns on blind curves, and do not block pedestrian corridors or church entrances under any circumstances.
            </p>
          </div>
        </article>
      )
    },
    {
      id: 'goa-traffic-limits',
      title: 'Goa Traffic Rules Checklist: Self-drive Speed Limits and No-Parking Fines',
      slug: 'goa-traffic-rules-penalties-checklist',
      excerpt: 'Avoid expensive challans and surprise towing charges. We outline the detailed active speed traps, parking rules, and zero-tolerance laws enforced by Goa Police.',
      category: 'Road Safety',
      date: 'May 05, 2026',
      readTime: '5 Min Read',
      author: 'Go Goa Safety Officer',
      imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=600',
      tags: ['Traffic Rules', 'Speed Limits', 'Goa Police', 'Rental Guidelines'],
      content: (
        <article className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans text-left">
          <p className="font-semibold text-slate-200 text-base leading-relaxed">
            While Goa offers outstanding scenery for driving, the Goa Traffic Police has initiated a digitized zero-tolerance campaign targeting traffic violations. Self-drive rental cars (carrying distinctive black and yellow commercial plates) are prime targets for radar cameras.
          </p>
          <p>
            Review this quick list of rules to ensure your holiday stays stress-free and you do not accumulate traffic penalties that could reduce your refundable deposit.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">1. Deciphering the Speed Limits</h3>
          <p>
            Goa's terrain transitions rapidly from fast highways to congested village intersections. General limitations include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs text-slate-450 pl-2">
            <li><strong>NH-66 / Highway stretches:</strong> 70 km/h is the maximum allowed limit. Keep details in mind around Zuari Bridge.</li>
            <li><strong>Bridges (Atal Sethu, Mandovi & Zuari bridges):</strong> Strictly 50-60 km/h, monitored heavily by digital speed laser systems.</li>
            <li><strong>Town Streets & Beach Connectors (Calangute, Anjuna):</strong> 40 km/h is the lock.</li>
            <li><strong>Ghat sections:</strong> 30 km/h to 40 km/h.</li>
          </ul>

          <h3 className="text-lg font-black text-white font-display pt-3">2. Strict Alcoholic Limits & Breath Analyzer Checks</h3>
          <p>
            Goa has absolute zero tolerance for driving under the influence of alcohol. Police checkposts are active nightly around Calangute, Baga, Candolim, Panaji, and Morjim.
          </p>
          <p className="text-red-400 font-bold">
            Penalty: Imprisonment up to 6 months and/or a dynamic spot fine up to ₹10,000, along with the immediate cancellation of your driving license.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">3. High Threat: Wrong Side Driving on NH-66</h3>
          <p>
            With the development of one-way ramps on the national highway, taking wrong-side shortcuts is heavily checked by police. If caught, you will face an immediate court summons and vehicle deposit impounding.
          </p>

          <h3 className="text-lg font-black text-white font-display pt-3">4. Beaches are strictly NO-DRIVING Zones</h3>
          <p>
            Under High Court directives, driving any motor vehicle on the sandy beds of beaches in Goa is a non-bailable offense. Wet sand can trap your wheels instantenously, leading to expensive mechanical cleanup costs.
          </p>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs flex gap-3.5 my-3">
            <Compass className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-display mb-1">Our Vehicle Return Checklist:</strong>
              When drop-off inspections are carried out, our team scans the central RTO web portal for any digital e-challans generated on the car during your rental block. If clean, your security deposit is refunded 100% instantly!
            </div>
          </div>
        </article>
      )
    }
  ];

  const handleOpenPost = (postId: string) => {
    setActivePostId(postId);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const handleBackToBlogs = () => {
    setActivePostId(null);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  if (activePostId) {
    const post = blogPosts.find(p => p.id === activePostId);
    if (!post) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left">
        
        {/* Back navigation */}
        <button 
          onClick={handleBackToBlogs}
          className="flex items-center gap-2 mb-8 bg-slate-900 border border-slate-800 text-slate-350 hover:text-white hover:bg-slate-850 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-orange-500" />
          <span>Back to Travel Columns</span>
        </button>

        {/* Thumbnail Hero */}
        <div className="h-64 md:h-96 w-full rounded-3xl overflow-hidden relative mb-8">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mt-3 leading-tight tracking-tight font-display">{post.title}</h1>
          </div>
        </div>

        {/* Metadata info */}
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-slate-800 pb-5 mb-6 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-500" /> By {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-500" /> {post.date}</span>
          </div>
          <span className="flex items-center gap-1.5 text-orange-400 font-mono"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>

        {/* Core Article Body */}
        <div className="bg-slate-950 p-2">
          {post.content}
        </div>

        {/* Post footer tags share */}
        <div className="border-t border-slate-850 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(t => (
              <span key={t} className="bg-slate-900 border border-slate-850 text-slate-400 text-[11px] px-2.5 py-1 rounded-lg">#{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors" title="Like article">
              <Heart className="w-4 h-4 text-rose-500" /> <span>Helpful</span>
            </button>
            <button 
              onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Article URL copied for sharing!'); }} 
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              title="Copy link"
            >
              <Share2 className="w-4 h-4 text-orange-500" /> <span>Share</span>
            </button>
          </div>
        </div>

        {/* Quick Newsletter */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-12 text-center">
          <BookOpen className="w-10 h-10 text-orange-500 mx-auto mb-3" />
          <h4 className="text-white font-extrabold font-display text-base">Get Travel Safety Handbooks Free</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
            We periodically publish offline maps, police rules PDF sheets, and tourist alerts. Join 4,000+ happy Goa drivers.
          </p>
          <div className="flex gap-2 max-w-md mx-auto mt-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 text-xs px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white focus:border-orange-500 font-mono"
            />
            <button 
              onClick={() => alert('Successfully joined the Go Goa newsletter!')} 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in text-slate-350 text-left">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2 font-mono">Insider Travel Desk</span>
        <h1 className="text-3xl md:text-5.5xl font-black text-white tracking-tight leading-tight font-display">
          Goa Self-Drive Resource Hub
        </h1>
        <p className="text-sm text-slate-400 mt-3 font-sans leading-relaxed">
          Stay well-informed about airport pickup protocols, safe local driving velocities, and offbeat routes. Click to read the full comprehensive guides.
        </p>
      </div>

      {/* Blogs list grid with clickable cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            onClick={() => handleOpenPost(post.id)}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Image with zoom effect */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-orange-450 border border-orange-500/20 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg text-orange-400">
                  {post.category}
                </span>
              </div>

              {/* Text metadata */}
              <div className="p-6">
                <div className="flex gap-4 items-center text-[11px] text-slate-500 mb-2 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors leading-snug font-display mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read action footer */}
            <div className="px-6 pb-6 pt-4 border-t border-slate-950 flex items-center justify-between text-xs font-bold text-orange-400">
              <span className="group-hover:underline">Read Complete Article</span>
              <span className="text-slate-500">→</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
