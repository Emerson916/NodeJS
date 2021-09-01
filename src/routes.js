const routes = require("express").Router();
const postController = require("./controllers/posts")
const userController = require("./controllers/users")
const sessionController = require("./controllers/sessions");
const authMiddeleware = require("./middlewares/auth");

//routes.post("/sessions");

//Rotas públicas
routes.post("/sessions", sessionController.store);
routes.post("/users", userController.store);

routes.use(authMiddeleware)

//Rotas privadas
routes.get("/posts", postController.index);

module.exports = routes;