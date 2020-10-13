// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)

(() => {
    document.getElementById("run").addEventListener("click", function () {
        if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {
            document.getElementById("pass-one").style.border = "3px solid red";
            document.getElementById("pass-two").style.border = "3px solid red";

        });
})();
