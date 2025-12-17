document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       📅 EVENTS (GROUPED)
    ========================= */
    const groupedEvents = [
        // =========================
  // DECEMBER 2025
  // =========================
  {
    date: new Date(2025, 11, 25),
    events: [
      {
        name: "Christmas Service",
        department: "Church",
        date: new Date(2025, 11, 25, 9, 0)
      }
    ]
  },
  {
    date: new Date(2025, 11, 31),
    events: [
      {
        name: "Year End Service",
        department: "Church",
        date: new Date(2025, 11, 31, 22, 0)
      }
    ]
  },
  
      // Daniel Fast – Day 1 to 26 (06:00)
      ...Array.from({ length: 26 }, (_, i) => ({
        date: new Date(2026, 0, 5 + i),
        events: [{
          name: `Fasting Day ${i + 1}`,
          department: "Church",
          date: new Date(2026, 0, 5 + i, 6, 0)
        }]
      })),
  
      // Men's Conference – Day 1 to 4 (09:00)
      ...Array.from({ length: 4 }, (_, i) => ({
        date: new Date(2026, 0, 13 + i),
        events: [{
          name: `Men’s Conference – Day ${i + 1}`,
          department: "Men’s Fellowship",
          date: new Date(2026, 0, 13 + i, 9, 0)
        }]
      })),
  
      {
        date: new Date(2026, 1, 1),
        events: [{
          name: "Brothers Breakfast",
          department: "Men’s Fellowship",
          date: new Date(2026, 1, 1, 9, 0)
        }]
      },
  
      {
        date: new Date(2026, 11, 25),
        events: [{
          name: "Christmas Service",
          department: "Church",
          date: new Date(2026, 11, 25, 9, 0)
        }]
      }
  
    ];
  
    /* =========================
       🔎 FLATTEN & FIND NEXT EVENT
    ========================= */
    const now = new Date();
  
    const allEvents = groupedEvents
      .flatMap(day => day.events)
      .filter(e => e.date > now)
      .sort((a, b) => a.date - b.date);
  
    if (!allEvents.length) return;
  
    const nextEvent = allEvents[0];
  
    /* =========================
       🗓️ DISPLAY EVENT INFO
    ========================= */
    function formatDate(date) {
      return date.toLocaleDateString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  
    ["", "1", "2"].forEach(suffix => {
      const nameEl = document.getElementById(`eventName${suffix}`);
      const dateEl = document.getElementById(`eventDate${suffix}`);
  
      if (nameEl) nameEl.textContent = nextEvent.name;
      if (dateEl) dateEl.textContent = formatDate(nextEvent.date);
    });
  
    /* =========================
       ⏳ COUNTDOWN (D/H/M/S)
    ========================= */
    function updateCountdown() {
      const now = new Date();
      let diff = nextEvent.date - now;
  
      if (diff <= 0) diff = 0;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff %= (1000 * 60 * 60 * 24);
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff %= (1000 * 60 * 60);
  
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("mins").textContent = String(minutes).padStart(2, "0");
      document.getElementById("secs").textContent = String(seconds).padStart(2, "0");
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
  });
  