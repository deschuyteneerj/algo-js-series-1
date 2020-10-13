// 08-dom/05-hover-image/script.js - 8.5: image hover

(() => {
    //keep the first picture in memory before modify it to be able to get it back on mouseout.
    const oldPic = document.querySelector("img").getAttribute("src");

    document.querySelector("img").addEventListener("mouseover", function () {
        document.querySelector("img").setAttribute("src", document.querySelector("img").getAttribute("data-hover"));
    });

    document.querySelector("img").addEventListener("mouseout", function () {
        document.querySelector("img").setAttribute("src", oldPic);
    });
})();
