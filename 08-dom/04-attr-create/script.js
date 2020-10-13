// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements

(() => {
    let imgSrc = document.getElementById("source").getAttribute("data-image");
    document.getElementById("target").innerHTML = "<img src=" + imgSrc + "></img>";
    document.getElementById("source").parentNode.removeChild(source);
})();
