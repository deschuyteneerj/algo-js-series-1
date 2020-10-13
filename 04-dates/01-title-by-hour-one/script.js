// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let d = new Date();
    let time = d.getHours();
    if (time < 18) {
        document.getElementById("target").innerHTML = "Hello";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening";
    }
})();
