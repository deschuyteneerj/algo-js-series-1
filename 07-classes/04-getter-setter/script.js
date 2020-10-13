// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            console.log(this.firstname + " " + this.lastname);
        }

        set name(firstlast) {
            const names = firstlast.split(" ");
            this.firstname = names[0];
            this.lastname = names[1];

        }
    }

    document.getElementById("run").addEventListener("click", function () {
        let someone = new Person("Jonathan", "Deschuyteneer");
        someone.name;
        someone.name = "Jeff Tuche";
        console.log(someone);
    });
})();
