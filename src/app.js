const express = require("express");
require("./database");
const routes = require("./routes");
const cors = require("cors")

const app = express();

app.use(cors());

//Dizemos para o express que ele pode aceitar JSON
app.use(express.json());

app.use(routes);

module.exports = app;