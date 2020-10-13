// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, persons) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(persons);
            }
        });
    });
})();
