// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
    let me = {
        firstname: "Jonathan",
        lastname: "Deschuyteneer",
        age: "34",
        city: "Nivelles",
        country: "Belgique"
    };

    document.getElementById("run").addEventListener("click", function () {
        console.log(me);
    });
})();
