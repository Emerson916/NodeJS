const routes = require("express").Router();
const postController = require("./Controllers/posts")

routes.post("/sessions");

routes.post("/sessions", sessionController.store);
routes.get("/post", postController.index);
routes.post("/users", userController.store);

module.exports = routes;