// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts()
            .then((i) => {
                i.forEach((post) => {
                    lib.getComments(post.id)
                        .then((j) => {
                            post.comments = j;
                            console.log(post);
                        });
                });
            })
    });
})();
