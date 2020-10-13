// 11-fetch/05-delete/script.js - 11.5: supprimer un élément

(() => {
    // On the button #run click, do...
    document.getElementById("run").addEventListener("click", () => {
        // Create a variable to retrieve the index of the superhero I need to delete information:
        let xMenInfo = (document.getElementById("hero-id").value);
        // Delete a superhero on JSON
        let xhr = new XMLHttpRequest();
        // Initialize a newly-created request on the URL I want to delete:
        xhr.open("DELETE", "http://localhost:3000/heroes/"+xMenInfo, true);
        xhr.send(null);
        /**
        readyState 	Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        status
            200: "OK"
            403: "Forbidden"
            404: "Page not found"

        onreadystatechange: 
        An EventHandler that is called whenever the readyState attribute changes.
        The callback is called from the user interface thread.
        The XMLHttpRequest.onreadystatechange property contains the event handler to be called when the readystatechange event is fired, 
        that is every time the readyState property of the XMLHttpRequest changes.
        */
        xhr.onreadystatechange = function () {
            // The readyState property holds the status of the XMLHttpRequest.
            // The onreadystatechange property defines a function to be executed when the readyState changes.
            if(xhr.readyState === 4 && xhr.status === 200) {
                // Fetch the data on the target URL:
                fetch('http://localhost:3000/heroes')
                .then(response => response.json())
                .then(heroes => {
                    console.log(heroes);
                });
            }
          }; 
    });
})();
