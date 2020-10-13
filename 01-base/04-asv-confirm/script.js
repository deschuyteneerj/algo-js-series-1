// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log(
        "%c ",
        "padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;"
    );
    console.log("Hello Woods programmer");

    do {
        let age = window.prompt("How old are you?");
        let gender = window.prompt("Which gender?");
        let town = window.prompt("Where do you live?");
        myConfirm = confirm("You are " + age + " old. You are a " + gender + ". And you live in " + town + ".");
    } while (myConfirm != true);
})();
