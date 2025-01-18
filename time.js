document.addEventListener('DOMContentLoaded', () => {
    //const { format } = require('date-fns');
    const now = new Date();

    let events = [
        {
            "name": "Vision Casting",
            "department": "Church",
            "date": new Date('02-09-2025'),
            "time": ""
        },
        {
            "name": "Worship seminar",
            "department": "Worship team",
            "date": new Date('03-22-2025'),
            "time": ""
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
            "date": new Date('04-26-2025'),
            "time": ""
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
            "date": new Date('07-12-2025'),
            "time": ""
        },
        {
            "name": "All day @ Church",
            "department": "Intercessors",
            "date": new Date('07-25-2025'),
            "time": ""
        },
        {
            "name": "Concert",
            "department": "Worship Team",
            "date": new Date('09-06-2025'),
            "time": ""
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
            "date": new Date('09-20-2025'),
            "time": ""
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
        // ,
        // {
        //     "name": "",
        //     "department": "",
        //     "date": new Date(),
        //     "time": ""
        // },
        // {
        //     "name": "",
        //     "department": "",
        //     "date": new Date(),
        //     "time": ""
        // }
    ]
    var nextEvent = {}
    var nextEvents = []

    month = now.getMonth()+1
    if (month < 10) {
        month = "0" + month
    }
    today = now.getDate() + "-" + month + "-" + now.getFullYear() 
    today = new Date(today)


    for (const event of events) {
        if (event.date > now) {
            nextEvents.push(event)  
        }
    }
    nextEvent = nextEvents[0];


    var diffDays = Math.floor((nextEvent.date - now) / (1000 * 60 * 60 * 24));
    var hours = 23 - now.getHours()
    var minutes = 60 - now.getMinutes()


    //document.getElementById("days")[1].innerHTML = diffDays
    //
    document.getElementById('days').innerText = diffDays;
    document.getElementById('hours').innerText = hours;
    document.getElementById('mins').innerText = minutes;

    var eventName = nextEvent.name
    var eventDate = String(nextEvent.date).substring(0,15)

   // console.log("event", eventDate.substring(0,15));
    

    document.getElementById('eventName').innerText = eventName;
    document.getElementById('eventDate').innerText = eventDate;

    document.getElementById('eventName1').innerText = eventName;
    document.getElementById('eventDate1').innerText = eventDate;

    document.getElementById('eventName2').innerText = eventName;
    document.getElementById('eventDate2').innerText = eventDate;


    
  });