const routes = require("express").Router();
const postController = require("./Controllers/posts")

routes.get("/post", postController.index);

module.exports = routes;