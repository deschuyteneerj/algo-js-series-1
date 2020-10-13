// 05-arrays/08-array-includes/script.js - 5.8: presence in an array

(() => {
    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {
        if (fruits.includes("apple")) {
            console.log("There is an apple in the array.");
        }
    });

    /**
    document.getElementById("run").addEventListener("click", function () {
        if (fruits.indexOf("apple") != -1) {
            console.log("There is an apple in the array.");
        }
    });
    */
})()
