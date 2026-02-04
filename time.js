document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     📅 EVENTS (GROUPED SOURCE)
     All events start at 09:00
  ========================= */
  const groupedEvents = [

    // =========================
    // JANUARY 2026
    // =========================

    // Daniel Fast (Jan 5–25)
    ...Array.from({ length: 21 }, (_, i) => ({
      date: new Date(2026, 0, 5 + i),
      events: [{
        name: `Daniel Fast – Day ${i + 1}`,
        department: "Church",
        date: new Date(2026, 0, 5 + i, 9, 0)
      }]
    })),

    // Men's Conference (Jan 13–16)
    ...Array.from({ length: 4 }, (_, i) => ({
      date: new Date(2026, 0, 13 + i),
      events: [{
        name: `Men’s Conference – Day ${i + 1}`,
        department: "Men’s Fellowship",
        date: new Date(2026, 0, 13 + i, 9, 0)
      }]
    })),

    {
      date: new Date(2026, 0, 18),
      events: [{
        name: "Women’s Ministry Opening",
        department: "Women’s Ministry",
        date: new Date(2026, 0, 18, 9, 0)
      }]
    },

    // =========================
    // FEBRUARY 2026
    // =========================
    {
      date: new Date(2026, 1, 1),
      events: [{
        name: "Brothers Breakfast",
        department: "Men’s Fellowship",
        date: new Date(2026, 1, 1, 9, 0)
      },{
        name: "Young adult's Workshop",
        department: "Young adults",
        date: new Date(2026, 1, 28, 9, 0)
      }]
    },

    // =========================
    // MARCH 2026
    // =========================
    {
      date: new Date(2026, 2, 15, 0,),
      events: [
      {
        name: "Women’s Ministry Q&A",
        department: "Women’s Ministry",
        date: new Date(2026, 2, 15, 9, 0)
      }]
    },

    // =========================
    // APRIL 2026
    // =========================
    ...Array.from({ length: 3 }, (_, i) => ({
      date: new Date(2026, 3, 3 + i),
      events: [{
        name: "Holy Weekend",
        department: "Church",
        date: new Date(2026, 3, 3 + i, 9, 0)
      }]
    })),

    {
      date: new Date(2026, 3, 25),
      events: [{
        name: "M&D Conference",
        department: "Intercessors",
        date: new Date(2026, 3, 25, 9, 0)
      }]
    },

    // =========================
    // MAY 2026
    // =========================
    {
      date: new Date(2026, 4, 10),
      events: [{
        name: "Mother’s Day Service",
        department: "Church",
        date: new Date(2026, 4, 10, 9, 0)
      }]
    },

    // =========================
    // JUNE 2026
    // =========================
    {
      date: new Date(2026, 5, 14),
      events: [{
        name: "FD Practice",
        department: "Women’s Ministry",
        date: new Date(2026, 5, 14, 9, 0)
      }]
    },
    {
      date: new Date(2026, 5, 21),
      events: [{
        name: "FD Event",
        department: "Women’s Ministry",
        date: new Date(2026, 5, 21, 9, 0)
      }]
    },

    // =========================
    // JULY 2026
    // =========================
    {
      date: new Date(2026, 6, 19),
      events: [{
        name: "WM Practice",
        department: "Women’s Ministry",
        date: new Date(2026, 6, 19, 9, 0)
      }]
    },

    // =========================
    // AUGUST 2026
    // =========================
    {
      date: new Date(2026, 7, 1),
      events: [{
        name: "Women’s Month",
        department: "Women’s Ministry",
        date: new Date(2026, 7, 1, 9, 0)
      }]
    },

    // =========================
    // SEPTEMBER 2026
    // =========================
    {
      date: new Date(2026, 8, 19),
      events: [{
        name: "Family Prayer Day",
        department: "Intercessors",
        date: new Date(2026, 8, 19, 9, 0)
      }]
    },

    // =========================
    // OCTOBER 2026
    // =========================
    {
      date: new Date(2026, 9, 1),
      events: [{
        name: "Men’s Month",
        department: "Men’s Fellowship",
        date: new Date(2026, 9, 1, 9, 0)
      }]
    },
    {
      date: new Date(2026, 9, 17),
      events: [{
        name: "Cancer Wellness Day",
        department: "Women’s Ministry",
        date: new Date(2026, 9, 17, 9, 0)
      }]
    },

    // =========================
    // NOVEMBER 2026
    // =========================
    {
      date: new Date(2026, 10, 22),
      events: [{
        name: "Women’s Ministry Closing",
        department: "Women’s Ministry",
        date: new Date(2026, 10, 22, 9, 0)
      }]
    },

    // =========================
    // DECEMBER 2026
    // =========================
    {
      date: new Date(2026, 11, 25),
      events: [{
        name: "Christmas Service",
        department: "Church",
        date: new Date(2026, 11, 25, 9, 0)
      }]
    },
    {
      date: new Date(2026, 11, 31),
      events: [{
        name: "New Year’s Eve Service",
        department: "Church",
        date: new Date(2026, 11, 31, 9, 0)
      }]
    }
  ];

  /* =========================
     🔎 FLATTEN & GET FUTURE EVENTS
  ========================= */
  const now = new Date();

  const allEvents = groupedEvents
    .flatMap(day => day.events)
    .map(e => ({ ...e, date: new Date(e.date.setHours(9, 0, 0, 0)) }))
    .filter(e => e.date > now)
    .sort((a, b) => a.date - b.date);

  if (!allEvents.length) return;

  const nextEvent = allEvents[0];

  /* =========================
     🗓️ DATE FORMATTER
  ========================= */
  function formatDate(date) {
  return date.toLocaleString("en-ZA", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}


  /* =========================
     ⭐ NEXT EVENT DISPLAY
  ========================= */
  ["", "1", "2"].forEach(suffix => {
    const nameEl = document.getElementById(`eventName${suffix}`);
    const dateEl = document.getElementById(`eventDate${suffix}`);

    if (nameEl) nameEl.textContent = nextEvent.name;
    if (dateEl) dateEl.textContent = formatDate(nextEvent.date);
  });

  /* =========================
     📋 EVENTS LIST (GROUPED BY DATE)
  ========================= */
  const eventsListEl = document.getElementById("eventsList");

  if (eventsListEl) {
    eventsListEl.innerHTML = "";

    const groupedByDate = {};

    allEvents.forEach(event => {
      const key = event.date.toISOString().split("T")[0];
      if (!groupedByDate[key]) {
        groupedByDate[key] = {
          date: event.date,
          events: []
        };
      }
      groupedByDate[key].events.push(event);
    });

    Object.values(groupedByDate)
      .sort((a, b) => a.date - b.date)
      .forEach(group => {
        const header = document.createElement("li");
        header.className = "event-date-header";
        header.textContent = formatDate(group.date);
        eventsListEl.appendChild(header);

        group.events.forEach(event => {
          const li = document.createElement("li");
          li.className = "event-item";
          li.innerHTML = `
            <strong>${event.name}</strong><br>
            <small>${event.department}</small>
          `;
          eventsListEl.appendChild(li);
        });
      });
  }

  /* =========================
     ⏳ COUNTDOWN
  ========================= */
  function updateCountdown() {
    let diff = nextEvent.date - new Date();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("mins").textContent = String(minutes).padStart(2, "0");
    document.getElementById("secs").textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

});
