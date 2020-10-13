// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(callbackPost);

        function callbackPost(error, articles) {
            articles.forEach((article) => {
                lib.getComments(article.id, callbackComments);

                function callbackComments(error, comment) {
                    article.comments = comment;
                    console.log(article);
                }
            });
        }
    });
})();
