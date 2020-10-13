// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console

(() => {
    // On the button #run click, do...
    document.getElementById("run").addEventListener("click", () => {
        // Fetch the data on the target URL:
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(xMen => console.log(xMen)) // List superheroes in the console.log
            .catch(() => console.log(error));
    });
})();
