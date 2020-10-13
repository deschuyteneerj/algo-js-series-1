// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)

(() => {
    let pass = document.getElementById("pass-one");
    let counter = document.getElementById("counter");
    let maxRequired = 10;
    pass.setAttribute("maxLength", maxRequired);
    pass.addEventListener('input', function () {
        counter.textContent = `${pass.value.length}/${maxRequired}`;
    });
})();
