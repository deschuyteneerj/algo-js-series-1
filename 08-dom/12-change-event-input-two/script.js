// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)

(() => {
    //Examples working: 12azeaze / azeaze12 / aze12aze (or more letters and more numbers...)
    let required = new RegExp("^(?=(.*[a-zA-Z]))(?=(.*[0-9]){2}).{8,}");

    document.getElementById("pass-one").addEventListener('input', function () {
        //test the regex with the input pass-one
        if (required.test(document.getElementById("pass-one").value)) {
            document.getElementById("validity").innerHTML = "OK";
        }
        else {
            document.getElementById("validity").innerHTML = "Not OK";
        }
    });
})();
