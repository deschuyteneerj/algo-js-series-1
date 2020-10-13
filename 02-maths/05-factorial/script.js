// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        function factorial(n) {
            if (n === 1) {
                return n;
            } else {
                n *= factorial(n - 1);
                return n;
            }
        }

        let numberFactorial = document.getElementById("number").value;
        alert(numberFactorial + "! = " + factorial(numberFactorial));
    });
})();
