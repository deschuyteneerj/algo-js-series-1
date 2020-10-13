// 11-fetch/04-add/script.js - 11.4: ajouter un élément

(() => {
    // Create an new object for the new superhero:
    let newSuper = new Object();
    // On the button #run click, do...
    document.getElementById("run").addEventListener("click", () => {
        // if the input fields are not correctly filled, add a super hero or alert it:
        if (document.getElementById("hero-name").value && document.getElementById("hero-alter-ego").value && document.getElementById("hero-powers").value) {
            fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then((heroes) => {
                //Assign each value from the input to the corresponding key of the JSON array
                newSuper.id = Object.keys(heroes).length+1;
                newSuper.name = document.getElementById("hero-name").value;
                newSuper.alterEgo = document.getElementById("hero-alter-ego").value;
                newSuper.abilities = document.getElementById("hero-powers").value;
                console.log(newSuper);
            })
            .then(() => {
                // Add a new superhero on JSON
                let xhr = new XMLHttpRequest();
                // Initialize a newly-created request on the URL:
                xhr.open("POST", "http://localhost:3000/heroes", true);
                //Send the proper header information along with the request:
                xhr.setRequestHeader("Content-type", "application/JSON");
                // Put the newSuper object in the right format indented:
                let heroes = JSON.stringify(newSuper, null, 4);
                // Send to the JSON file:
                xhr.send(heroes);
                console.log(heroes);
                })
        }
        else {
            alert("You did not complete every input field.")
        }
    });
})();
