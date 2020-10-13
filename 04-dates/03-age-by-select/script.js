// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getUTCDate();

        let age = y - +document.getElementById("dob-year").value;
        let birthMonth = +document.getElementById("dob-month").value;
        let birthDay = +document.getElementById("dob-day").value;

        console.log(y, age, m, birthMonth, d, birthDay);

        if ((m < birthMonth) || ((m == birthMonth) && (d < birthDay))) {
            age -= 1
        }

        alert("You are " + age + " years old.");
    })

    /**Joann
    document.getElementById("run").addEventListener("click", function() {
        let year = document.getElementById("dob-year");
        let month = document.getElementById("dob-month");
        let day = document.getElementById("dob-day");
        let enterDate = new Date(Number.parseInt(year.options[year.selectedIndex].value),
            Number.parseInt(month.options[month.selectedIndex].value -1),
            Number.parseInt(day.options[day.selectedIndex].value),23,59,59);
        alert(`You are ${Age(enterDate)} years old`);
        console.log(enterDate);
    });
     
    function Age(dob) {
        var dif = Date.now() - dob;
        var theDate = new Date(dif);
        return Math.abs(theDate.getUTCFullYear() - 1970);
      }
    */
})();
