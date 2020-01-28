/* Server Config */
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;

const app = express();

const DB = require("./models");

/* Middleware */
app.use(bodyParser.json());

/* API Routes */
app.get("/api/v1/Users", (request, response) => {
  DB.User.find({}, (err, foundUsers) => {
    if (err) {
      return response
        .status(400)
        .json({ message: "Something went wrong!", err: err });
    }
    response.status(200).json({ foundUsers });
  });
});

app.post("/api/v1/Users", (request, response) => {
  DB.User.create(request.body, (err, createdUser) => {
    if (err) {
      return response
        .status(500)
        .json({ message: "Something went wrong.", err: err });
    }
    const responseObj = {
      status: 200,
      data: createdUser,
      requestedAt: new Date().toLocaleString()
    };
    response.status(200).json(responseObj);
  });
});

app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));
