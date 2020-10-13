// 11-fetch/03-details/script.js - 11.3: details

(() => {
    // On the button #run click, do...
    document.getElementById("run").addEventListener("click", () => {
        // Get the element "template" to modify it (and later add the values we need):
        // This variable could also be: let template = document.getElementsByTagName("template")[0];
        let template = document.getElementById("tpl-hero");
        // Create a variable to retrieve the index of the superhero I need to display information:
        let xMenInfo = (document.getElementById("hero-id").value);
        // Fetch the data on the target URL:
        fetch("http://127.0.0.1:3000/heroes/" + xMenInfo)
        .then((response)=>{
            return response.json();
        })
        .then ((heroes)=>{
                // The variable clone creates a copy of the node template:
                let clone = template.content.cloneNode(true);
                // Create a clone of the template element with the added values (name, alterEgo, abilities) for the superhero:
                clone.querySelector(".name").innerText = heroes.name;
                clone.querySelector(".alter-ego").innerText = heroes.alterEgo;
                clone.querySelector(".powers").innerText = heroes.abilities;
                // Add a node to the end of the list of children of a specified parent node:
                document.getElementById("target").appendChild(clone);
        });
    });
})();
