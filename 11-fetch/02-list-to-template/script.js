// 11-fetch/02-list-to-template/script.js - 11.2: liste vers template

(() => {
    // On the button #run click, do...
    document.getElementById("run").addEventListener("click", () => {
        // Get the element "template" to modify it (and later add the values we need):
        // This variable could also be: let template = document.getElementsByTagName("template")[0];
        let template = document.getElementById("tpl-hero");
        // Fetch the data on the target URL:
        fetch("http://127.0.0.1:3000/heroes")
        .then((response)=>{
            return response.json();
        })
        .then ((heroes)=>{
            // Loop for each superhero:
            for (let i=0; i<heroes.length; i++) {
                // The variable clone creates a copy of the node template:
                let clone = template.content.cloneNode(true);
                // Create a clone of the template element with the added values (name, alterEgo, abilities) for the "index = i" superhero:
                clone.querySelector(".name").innerText = heroes[i].name;
                clone.querySelector(".alter-ego").innerText = heroes[i].alterEgo;
                clone.querySelector(".powers").innerText = heroes[i].abilities;
                // Add a node to the end of the list of children of a specified parent node:
                document.getElementById("target").appendChild(clone);
            }
        });
    });
})();
