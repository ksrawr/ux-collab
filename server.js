const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;

const app = express();

app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));
