/**
 * ==========================================================================
 * GO GOA CAR BOOKING - PREMIUM NATIVE INTERACTIONS ENGINE
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
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
    }
  });
});
