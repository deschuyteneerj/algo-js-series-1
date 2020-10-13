// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let d = new Date();
    let time = d.getHours() * 60 + d.getMinutes();
    if (time < 1050) {
        document.getElementById("target").innerHTML = "Hello";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening";
    }

    /**
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();

    if (hour < 17 || (hour === 17 && minute < 30)) {
        document.getElementById("target").innerHTML = "Hello";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening";
    }
    */
})();
