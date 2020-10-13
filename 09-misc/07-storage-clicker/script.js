// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker

(() => {
    // Select the target:
    let target = document.getElementById("target");
    // Select the increment button:
    let addButton = document.getElementById("increment");
    // Store your number on the session (if you leave the page, you lose data, you don't if you refresh) of display 0 if nothing is saved:
    // I could use the localStorage but it was easier for me to check with sessionStorage if everything went well.
    let total = Number.parseInt(sessionStorage.getItem("total")) || 0;
    // Put the number of clicks in the target:
    target.innerHTML = total;
    // Event on the button click:
    addButton.addEventListener("click", () => {
        // Increment the count:
        total++;
        // Store the value into the localStorage:
        sessionStorage.setItem("total", total);
        // Put the number of clicks in the target:
        target.innerHTML = total;
    });
})();
