// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)

(() => {
    document.getElementById("run").addEventListener("click", function () {
        if (document.getElementById("pass-one").value !== document.getElementById('pass-two').value) {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
        }
    });
})();
