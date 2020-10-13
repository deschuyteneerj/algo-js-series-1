// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


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
        // Set a delay to each letter appearance:
        setTimeout(function() {
            // Create a span for each character:
            let span = document.createElement("span");
            //Put the letter in a span:
            span.innerHTML = text[i];
            // Add the result to the target:
            target.appendChild(span);
        // Iterates each i through the loops with 50 milliseconds delay:
        }, i*50);
    }

    /**
    // Select the target element:
    let target = document.getElementById("target");
    // Put the target text into a variable:
    let initialText = target.innerHTML;
    // Split the content of the variable initialText into another variable text:
    target.innerHTML = "";
    // Set a count to 0:
    let i = 0;
    function typeWriter() {
        // Set a limit to the count (the limit is the last letter of the initialText sentence):
        if (i < initialText.length) {
            // Add a letter to the empty target each time the loop go through:
            target.innerHTML += initialText.charAt(i);
            // Increment count till last letter of the sentence
            i++;
        // Set a timeout for each iteration of the loop:
        setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
    */
})();
