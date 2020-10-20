// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    const inputs = document.querySelectorAll("input");

    // Generate a number between the mix and max values from the input:
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Check if the digit is between 0 and 9 to add a 0 in front of the number -> 00 to 09:
    function digitsBetween0And9(x) {
        // To ensure the number is an integer not a string:
        x = parseInt(x);
        if (x <= 9) {
            return "0" + x;
        }
        return x;
    }

    // For each "input" button:
    document.querySelectorAll("input").forEach((input) => {
        // Event on button click:
        input.parentElement.querySelector("button").addEventListener("click", () => {
            // Generate the random input to display:
            input.value = randInt(parseInt(input.getAttribute("data-min")), parseInt(input.getAttribute("data-max")));
            // Display the random input into the target:
            document.getElementById("target").innerHTML = `+${inputs[0].value}${digitsBetween0And9(inputs[1].value)}${digitsBetween0And9(inputs[2].value)}${digitsBetween0And9(inputs[3].value)}`
        });
    });
})();