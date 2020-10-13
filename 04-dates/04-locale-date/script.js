// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // get a new date (locale machine date time)
    let time = new Date();
    let date = time.toLocaleString('en-UK', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    document.getElementById('target').innerHTML = date;

    /**Olivia
    let date = new Date();
    let y = date.getFullYear();
    let mon = date.getMonth();
    let d = date.getUTCDate();
    let day = date.getDay();
    let h = +date.getHours();
    let m = +date.getMinutes(); 

    switch(mon){
        case (0):
            mon = "January";
            break;
        case (1):
            mon = "February";
            break;
        case (2): 
            mon = "March";
            break;
        case (3):
            mon = "April";
            break;
        case (4):
            mon = "May";
            break;
        case (5):
            mon = "June";
            break;
        case (6):
            mon = "July";
            break;
        case (7):
            mon = "Augustus";
            break;
        case (8):
            mon = "September";
            break;
        case (9):
            mon = "October";
            break;
        case (10):
            mon = "November";
            break;
        case (11):
            mon = "December";
            break;
    }

    switch(day){
        case (1):
            day = "Monday";
            break;
        case (2): 
            day = "Tuesday";
            break;
        case (3):
            day = "Wednesday";
            break;
        case (4):
            day = "Thursday";
            break;
        case (5):
            day = "Friday";
            break;
        case (6):
            day = "Saturday";
            break;
        case (7):
            day = "Sunday";
            break;
    }

    if (h < 10){
        h = `0${h}`
    }

    if (m < 10){
        m = `0${m}`
    }

    document.getElementById("target").innerHTML = `${day} ${d} ${mon} ${y}, ${h}h${m}.`
     */
})();
