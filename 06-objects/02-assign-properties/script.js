//06-objects/02-assign-properties/script.js - 6.2: assign properties

(() => {
    const computers = [
        { id: "0001", available: false, user: "leny", os: "macOS" },
        { id: "0002", available: false, user: "Nicolas" },
        { id: "0003" },
        { id: "0004", os: "Windows" },
        { id: "0005" },
        { id: "0006", os: "macOS" },
        { id: "0007" },
        { id: "0008" },
        { id: "0009", available: false, user: "Anthony" },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    for (let i = 0; i < computers.length; i++) {
        if (computers[i].available === undefined) {
            computers[i].available = defaultProps.available;
        }
        if (computers[i].os === undefined) {
            computers[i].os = defaultProps.os;
        }
        if (computers[i].user === undefined) {
            computers[i].user = defaultProps.user;
        }
    }
    document.getElementById("run").addEventListener("click", function () {
        console.log(computers);
    });

    /**
    let temporary = {};

    document.getElementById("run").addEventListener("click", function () {
        for (let i = 0; i < computers.length; i++) {
            //pour l'exemple object = {id: "0002", available: false, user: "Nicolas"}
            //temp est un object vide que je 'rempli' avec defaultProps (const defaultProps = {available: true,os: "linux",user: null,};
            // j'assigne defaultProps sur mon object vide pour l' "initialiser" proprement à chaque passage dans la boucle)
            Object.assign(temporary, defaultProps);
            // j'assigne object sur temp. object va remplacer dans temp toutes les properties qu'il possède. A ce moment temp vaut: {id: "0002", available: false, user: "Nicolas", os: "linux"}
            Object.assign(temporary, computers[i]);
            // j'assigne temp sur object pour écrire dans l'object de mon tableau le résultat de la fusion qui se trouve dans temps
            Object.assign(computers[i], temporary);
        }
        console.log(computers);
    });
    */
})();
