// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker

(() => {
    let button1Value = parseInt(document.querySelectorAll("button")[0].getAttribute("data-min"));
    let button2Value = parseInt(document.querySelectorAll("button")[1].getAttribute("data-min"));
    let button3Value = parseInt(document.querySelectorAll("button")[2].getAttribute("data-min"));
    let button4Value = parseInt(document.querySelectorAll("button")[3].getAttribute("data-min"));

    // Check if the digit is between 0 and 9 to add a 0 in front of the number -> 00 to 09:
    function digitsBetween0And9(x) {
        if (x <= 9) {
            return "0" + x;
        }
        return x;
    }
    
    // Event on button click:
    document.querySelectorAll("button")[0].addEventListener("click", () => {
        // Check if button value is under the data max required:
        if (button1Value < parseInt(document.querySelectorAll("button")[0].getAttribute("data-max"))) {
            // If condition is met:
            button1Value++;
            // Apply the function to check if the number is between 0 and 9 and display it:
            document.querySelectorAll("button")[0].innerHTML = digitsBetween0And9(button1Value);
            // Put the selected value in the displayed phone number above the buttons:
            document.getElementById("target").innerHTML = `+${document.querySelectorAll("button")[0].innerHTML}${document.querySelectorAll("button")[1].innerHTML}${document.querySelectorAll("button")[2].innerHTML}${document.querySelectorAll("button")[3].innerHTML}`
        }
    });

    // Comments for the first addEventListener are the same for the 3 others:
    document.querySelectorAll("button")[1].addEventListener("click", () => {
        if (button2Value < parseInt(document.querySelectorAll("button")[1].getAttribute("data-max"))) {
            button2Value++;
            document.querySelectorAll("button")[1].innerHTML = digitsBetween0And9(button2Value);
            document.getElementById("target").innerHTML = `+${document.querySelectorAll("button")[0].innerHTML}${document.querySelectorAll("button")[1].innerHTML}${document.querySelectorAll("button")[2].innerHTML}${document.querySelectorAll("button")[3].innerHTML}`
        }
    });

    document.querySelectorAll("button")[2].addEventListener("click", () => {
        if (button3Value < parseInt(document.querySelectorAll("button")[2].getAttribute("data-max"))) {
            button3Value++;
            document.querySelectorAll("button")[2].innerHTML = digitsBetween0And9(button3Value);
            document.getElementById("target").innerHTML = `+${document.querySelectorAll("button")[0].innerHTML}${document.querySelectorAll("button")[1].innerHTML}${document.querySelectorAll("button")[2].innerHTML}${document.querySelectorAll("button")[3].innerHTML}`
        }
    });

    document.querySelectorAll("button")[3].addEventListener("click", () => {
        if (button4Value < parseInt(document.querySelectorAll("button")[3].getAttribute("data-max"))) {
            button4Value++;
            document.querySelectorAll("button")[3].innerHTML = digitsBetween0And9(button4Value);
            document.getElementById("target").innerHTML = `+${document.querySelectorAll("button")[0].innerHTML}${document.querySelectorAll("button")[1].innerHTML}${document.querySelectorAll("button")[2].innerHTML}${document.querySelectorAll("button")[3].innerHTML}`
        }
    });
})();