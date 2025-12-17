document.addEventListener("DOMContentLoaded", function () {

    const now = new Date();
  
    // 🔒 Cross-browser safe dates (NO string parsing)
    const events = [
      { name: "Vision Casting", department: "Church", date: new Date(2025, 1, 9, 15, 0) },
      { name: "Worship seminar", department: "Worship team", date: new Date(2025, 2, 22, 9, 0) },
      { name: "Brothers breakfast", department: "Mens Fellowship", date: new Date(2025, 3, 5, 0, 0) },
      { name: "Recovery And Restoration Service", department: "Evangelism", date: new Date(2025, 3, 6, 0, 0) },
      { name: "Good Friday Celebration", department: "Church", date: new Date(2025, 3, 18, 9, 0) },
      { name: "Easter Sunday", department: "Church", date: new Date(2025, 3, 20, 9, 0) },
      { name: "Marriage Counselling Seminar", department: "Intercessors", date: new Date(2025, 3, 26, 9, 0) },
      { name: "Roosterbrood & Braai vleis", department: "Womens ministry", date: new Date(2025, 4, 4, 0, 0) },
      { name: "Pamphet Drive & Open Air", department: "Evangelism", date: new Date(2025, 5, 7, 0, 0) },
      { name: "Coffee Bar", department: "Youth Fellowship", date: new Date(2025, 6, 5, 0, 0) },
      { name: "Stay awake", department: "Worship Team", date: new Date(2025, 6, 12, 22, 0) },
      { name: "All day @ Church", department: "Intercessors", date: new Date(2025, 6, 26, 9, 0) },
      { name: "Concert", department: "Worship Team", date: new Date(2025, 8, 6, 18, 0) },
      { name: "Combined Service with Youth", department: "Evangelism", date: new Date(2025, 8, 12, 0, 0) },
      { name: "Prayer day - Come pray for your family", department: "Intercessors", date: new Date(2025, 8, 20, 9, 0) },
      { name: "Heritage day Celebration", department: "Church", date: new Date(2025, 8, 24, 0, 0) },
      { name: "Breast Cancer Awareness", department: "Womens Ministry", date: new Date(2025, 9, 18, 0, 0) },
      { name: "Banquet", department: "Church", date: new Date(2025, 10, 8, 0, 0) },
      { name: "Carols By Candle Light", department: "Church", date: new Date(2025, 11, 14, 0, 0) },
      { name: "Christmas Service", department: "Church", date: new Date(2025, 11, 25, 9, 0) },
      { name: "Year End Service", department: "Church", date: new Date(2025, 11, 31, 22, 0) }
    ];
  
    // 🔎 Get next upcoming event
    const nextEvent = events
      .filter(e => e.date > now)
      .sort((a, b) => a.date - b.date)[0];
  
    if (!nextEvent) return;
  
    // ⏳ Countdown function (WITH SECONDS)
    function updateCountdown() {
      const current = new Date();
      let diff = nextEvent.date - current;
  
      if (diff <= 0) {
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("mins").textContent = 0;
        document.getElementById("secs").textContent = 0;
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff %= (1000 * 60 * 60 * 24);
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff %= (1000 * 60 * 60);
  
      const minutes = Math.floor(diff / (1000 * 60));
      diff %= (1000 * 60);
  
      const seconds = Math.floor(diff / 1000);
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("mins").textContent = minutes;
      document.getElementById("secs").textContent = seconds;
    }
  
    // 🗓️ Display event name and date
    function formatDate(date) {
      return date.toLocaleDateString("en-ZA", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  
    document.getElementById("eventName").textContent = nextEvent.name;
    document.getElementById("eventDate").textContent = formatDate(nextEvent.date);
  
    document.getElementById("eventName1").textContent = nextEvent.name;
    document.getElementById("eventDate1").textContent = formatDate(nextEvent.date);
  
    document.getElementById("eventName2").textContent = nextEvent.name;
    document.getElementById("eventDate2").textContent = formatDate(nextEvent.date);
  
    // ⏱️ Initial call + update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
  });
  