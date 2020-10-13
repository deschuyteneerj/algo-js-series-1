// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        let numbersSort = document.getElementById("numbers").value.split(", ");

        numbersSort.forEach((element) => {
            +element;
        });

        numbersSort.sort(function (a, b) {
            return a - b;
        });

        document.getElementById("numbers").value = numbersSort;
    });
})();
