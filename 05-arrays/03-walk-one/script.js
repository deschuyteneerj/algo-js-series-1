// 05-arrays/01-get-element/script.js - 5.1: walk through the list

(() => {
    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapefruit",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    });
})();
