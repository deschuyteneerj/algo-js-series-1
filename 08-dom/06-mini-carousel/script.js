// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel

(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let counter = 0;

    function nextPic() {
        counter += 1;
        //if counter number is greater than (gallery.length-1) so come back to the first picture (index[0]).
        if (counter > gallery.length - 1) {
            counter = 0;
        }
        document.querySelector("img").src = gallery[counter];
    }

    document.getElementById("next").addEventListener("click", function () {
        nextPic();
    });
})();
