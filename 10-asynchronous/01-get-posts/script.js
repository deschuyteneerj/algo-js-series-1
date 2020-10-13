// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(callback);
        function callback(error, articles) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(articles);
            }
        }
    });
})();
