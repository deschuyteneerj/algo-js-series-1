// 06-objects/04-from-entries/script.js - 6.4: fromEntries

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    let array = keys.map((el, i) => {
        return [keys[i], values[i]];
    });
    // → [["name, "Skitty"], ["species", "cat"]]
    console.log(array);

    let output = Object.fromEntries(array);
    // → {name: "Skitty", species: "cat"}

    document.getElementById("run").addEventListener("click", function () {
        console.log(output);
    });
})();
