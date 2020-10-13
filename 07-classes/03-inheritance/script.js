// 07-classes/03-inheritance/script.js - 7.3: inheritance

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        static greeting = "RonRon";

        constructor(name) {
            super();
            this.name = name;
        }
    }
    class Dog extends Animal {
        static greeting = "Grrrrr";

        constructor(name) {
            super();
            this.name = name;
        }
    }

    document.getElementById("run").addEventListener("click", function () {
        let cat = new Cat("Luna");
        let dog = new Dog("Grisou");
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
})();
