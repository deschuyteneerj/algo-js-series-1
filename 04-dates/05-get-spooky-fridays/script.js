// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
    function getSpookyFridaysIn(yr) {
        let spookyMonths = [];
        let month13 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        for (let month = 0; month < 12; month++) {
            let d = new Date(yr, month, 13);
            if (d.getDay() == 5) {
                spookyMonths.push(month13[d.getMonth()]);
            }
        }
        return spookyMonths;
    }

    document.getElementById("run").addEventListener("click", function () {
        let year13 = parseInt(year.value);
        alert(`In ${year13}, Friday 13th happens in : ${getSpookyFridaysIn(year13)}`);
    });
})();
