// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    function minimum(randomArr) {
        let min = randomArr[0];
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] < min) {
                min = randomArr[i];
            }
        }
        return min;
    }

    function maximum(randomArr) {
        let max = randomArr[0];
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] > max) {
                max = randomArr[i];
            }
        }
        return max;
    }

    function sum(randomArr) {
        let count = 0;
        for (let i = 0; i < randomArr.length; i++) {
            count += randomArr[i];
        }
        return count;
    }

    function average(randomArr) {
        return sum(randomArr) / randomArr.length;
    }

    function numbers() {
        let randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

        for (let i = 0; i < randomArr.length; i++) {
            document.getElementById(`n-${i + 1}`).innerText = randomArr[i];
        }

        document.getElementById("min").innerHTML = minimum(randomArr);
        document.getElementById("max").innerHTML = maximum(randomArr);
        document.getElementById("sum").innerHTML = sum(randomArr);
        document.getElementById("average").innerHTML = average(randomArr);
    }

    document.getElementById("run").addEventListener("click", function () {
        numbers();
    });
})();
