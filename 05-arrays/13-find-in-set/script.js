// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", function () {
        console.log("There are " + people.size + " people in the array.");
        if (people.has("Alexandre")) {
            console.log("Alexandre is in the array.");
        }
    });
})();
