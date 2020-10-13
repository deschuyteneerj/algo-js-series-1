// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)

(() => {
    document.getElementById("red").addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });
    document.getElementById("green").addEventListener("click", () => {
        document.body.style.backgroundColor = "green";
    });
    document.getElementById("yellow").addEventListener("click", () => {
        document.body.style.backgroundColor = "yellow";
    });
    document.getElementById("blue").addEventListener("click", () => {
        document.body.style.backgroundColor = "blue";
    });

    /**
    function changeColor(color) {
      switch (color) {
        case "red":
            document.getElementsByTagName("body")[0].style.backgroundColor = "red";
            break;
        case "green":
            document.getElementsByTagName("body")[0].style.backgroundColor = "green";
            break;
        case "yellow":
            document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
            break;
        case "blue":
            document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
            break;
      }
    }
  
    Array.from(document.querySelectorAll("button")).forEach((btn) =>
        btn.addEventListener("click", () => changeColor(btn.id))
    );
  */
})();
