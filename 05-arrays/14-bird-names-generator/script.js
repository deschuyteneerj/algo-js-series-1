// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function () {
        let randomBird = birds[Math.trunc(Math.random() * birds.length)];
        let adj = [...adjectives];
        let randomAdjective = adj[Math.trunc(Math.random() * adj.length)];

        if (randomBird.fem == true) {
            document.getElementById("target").innerHTML = `La ${randomBird.name} ${randomAdjective}e`;
        }
        else {
            document.getElementById("target").innerHTML = `Le ${randomBird.name} ${randomAdjective}`;
        }
    });

})();
