

module.exports = {
    index(req, res) {
        const posts = [{
            author: {
                name: "Fulano",
            },
            crated_at: "10/10/2021",
            title: "Este é um post sobre js",
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            gist: "https://githuv.com.br/",
            categories: [
                "JS", "Back-end", "Express"
            ],
            coments: [
                {
                    author: {
                        name: "ciclano",
                    },
                    created_at: "11/10/2021",
                    description: "Realmente Js é muito legal"
                }
            ]
        }];
    },
    find(req, res) {

    },
    store(req, res) {

    },
    update(req, res) {

    },
    delete(req, res) {

    }
}

