document.addEventListener('DOMContentLoaded', () => {
    //const { format } = require('date-fns');
    const now = new Date();

    let events = [
        {
            "name": "Vision Casting",
            "department": "Church",
            "date": new Date('02-09-2025 15:00'),
            "time": "15:00"
        },
        {
            "name": "Worship seminar",
            "department": "Worship team",
            "date": new Date('03-22-2025 09:00'),
            "time": "09:00"
        },
        {
            "name": "Brothers breakfast",
            "department": "Mens Fellowship",
            "date": new Date('04-05-2025'),
            "time": ""
        },
        {
            "name": "Recovery And Restoration Service",
            "department": "Evangelism",
            "date": new Date('04-06-2025'),
            "time": ""
        },
        {
            "name": "Good Friday Celebration",
            "department": "Church",
            "date": new Date('04-18-2025'),
            "time": "09:00"
        },
        {
            "name": "Easter Sunday",
            "department": "Church",
            "date": new Date('04-20-2025 09:00'),
            "time": "09:00"
        },
        {
            "name": "Marriage Counselling Seminar",
            "department": "Intercessors",
            "date": new Date('04-26-2025 09:00'),
            "time": "09:00"
        },
        {
            "name": "Roosterbrood & Braai vleis",
            "department": " Womens ministry",
            "date": new Date('05-04-2025'),
            "time": ""
        },
        {
            "name": "Pamphet Drive & Open Air",
            "department": "Evangelism",
            "date": new Date('06-07-2025'),
            "time": ""
        },
        {
            "name": "Coffee Bar",
            "department": "Youth Fellowship",
            "date": new Date('07-05-2025'),
            "time": ""
        },
        {
            "name": "Stay awake",
            "department": "Worship Team",
            "date": new Date('07-12-2025 22:00'),
            "time": "22:00"
        },
        {
            "name": "All day @ Church",
            "department": "Intercessors",
            "date": new Date('07-26-2025 09:00'),
            "time": "09:00"
        },
        {
            "name": "Concert",
            "department": "Worship Team",
            "date": new Date('09-06-2025 18:00'),
            "time": "18:00"
        },
        {
            "name": "Combined Service with Youth",
            "department": "Evangelism",
            "date": new Date('09-12-2025'),
            "time": ""
        },
        {
            "name": "Prayer day - Come pray for your family",
            "department": "Intercerssors",
            "date": new Date('09-20-2025 09:00'),
            "time": "09:00"
        },
        {
            "name": "Heritage day Celebration",
            "department": "Church",
            "date": new Date('09-24-2025'),
            "time": ""
        },
        {
            "name": "Breast Cancer Awareness",
            "department": "Womens Ministry",
            "date": new Date('10-18-2025'),
            "time": ""
        },
        {
            "name": "Banquet",
            "department": "Church",
            "date": new Date('11-08-2025'),
            "time": ""
        },
        {
            "name": "Carols By Candle Light",
            "department": "Church",
            "date": new Date('12-14-2025'),
            "time": ""
        }
        ,
        {
            "name": "Christmas Service",
            "department": "Church",
            "date": new Date('12-25-2025 09:00'),
            "time": ""
        },
        {
            "name": "Year End Service",
            "department": "Church",
            "date": new Date('12-31-2025 22:00'),
            "time": ""
        }
    ]
    var nextEvent = {}
    var nextEvents = []
    for (const event of events) {
        if (event.date > now) {
            nextEvents.push(event)  
        }
    }
    nextEvent = nextEvents[0];
    console.log('Events', events );

    var minutes = 60 - now.getMinutes() + nextEvent.date.getMinutes()
    var min = nextEvent.date - now
    min = Math.ceil(min / 60000) 
    newHr = Math.floor(min/60)
    diffDays = Math.floor(newHr / 24)
    hours = (newHr % 24 -1 )
    if (minutes => 60) {
        minutes = minutes % 60
        hours += 1
    }
    if (hours => 24) {
        hours = hours % 24
       // diffDays += 1
    }

    //Count down
    document.getElementById('days').innerText = diffDays;
    document.getElementById('hours').innerText = hours;
    document.getElementById('mins').innerText = minutes;

    var eventName = nextEvent.name
    var eventDate = String(nextEvent.date).substring(0,15)

    //Next event
    document.getElementById('eventName').innerText = eventName;
    document.getElementById('eventDate').innerText = eventDate;

    document.getElementById('eventName1').innerText = eventName;
    document.getElementById('eventDate1').innerText = eventDate;

    document.getElementById('eventName2').innerText = eventName;
    document.getElementById('eventDate2').innerText = eventDate;
    
  });