// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
    document.getElementById("run").addEventListener("click", () => {
        document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    })
    /**
    const background = document.querySelector("body");
    const btn = document.getElementById("run");

    btn.addEventListener('click', () => {
        let ranNumber1 = Math.floor(Math.random() * 256);
        let ranNumber2 = Math.floor(Math.random() * 256);
        let ranNumber3 = Math.floor(Math.random() * 256);
        let randomRGB = "rgb(" + ranNumber1 + "," + ranNumber2 + "," + ranNumber3 + ")";
        background.style.backgroundColor = randomRGB;
    });
    */
})();
