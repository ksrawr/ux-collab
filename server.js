const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;

const app = express();

const DB = require("./models");

app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));
