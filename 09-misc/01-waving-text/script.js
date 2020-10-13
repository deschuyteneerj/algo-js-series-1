// 09-misc/01-waving-text/script.js - 9.1: waving text

(() => {
    // Select the target element:
    let target = document.getElementById("target");
    // Put the target text into a variable:
    let initialText = target.innerHTML;
    // Split the content of the variable initialText into another variable text:
    text = initialText.split("");
    // Empty the text of the tag to make it available for the result tu be pushed in:
    target.innerHTML = "";
    // Loop through each character:
    for (let i=0; i<text.length; i++) {
        // Create a span for each character:
        let span = document.createElement("span");
        //Put the letter in a span:
        span.innerHTML = text[i];
        // Set the new fontSize to the character into the span:
        span.style.fontSize = Math.trunc((Math.random() * 50) + 10)+"px";
        // Add the result to the target:
        target.appendChild(span);
    }
    
    /**Olivia
    let i = document.getElementById("target").innerHTML.length;
    let J = document.getElementById("target").innerHTML.length;
    let span = document.getElementById("target").innerHTML.split("");

    document.getElementById("target").innerHTML = "";

    for (let k = 0; k < span.length; k++){
        let spanI = document.createElement("SPAN");
        spanI.getAttribute("id");
        spanI.setAttribute("id", `span-${k}`);
        spanI.innerHTML = span[k];
        spanI.style.fontSize = "1.5em";
        document.getElementById("target").appendChild(spanI);
    }
    
    function makeWaves(){
        document.getElementById(`span-${(i - 3) % J}`).style.fontSize = "1.5em";
        document.getElementById(`span-${(i - 2) % J}`).style.fontSize = "1.6em";
        document.getElementById(`span-${(i - 1) % J}`).style.fontSize = "1.7em";
        document.getElementById(`span-${i % J}`).style.fontSize = "1.8em";
        document.getElementById(`span-${(i + 1) % J}`).style.fontSize = "1.7em";
        document.getElementById(`span-${(i + 2) % J}`).style.fontSize = "1.6em";
        document.getElementById(`span-${(i + 3) % J}`).style.fontSize = "1.5em";
        i++;
        if (i === 2 * J){
            i = J;
        }
        setTimeout(makeWaves, 40);
    }
    makeWaves();
    */
})();
