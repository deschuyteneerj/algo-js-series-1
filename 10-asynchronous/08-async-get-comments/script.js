// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        let articles = await window.lib.getPosts();
        await Promise.all(articles.map(async (article) => {
            let comments = await window.lib.getComments(article.id);
            article.comments = comments;
        }));
        console.log(articles);
    });
})();
