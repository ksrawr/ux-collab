/*——————————————————————————— Server Config ———————————————————————————*/
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;

const app = express();
const path = require("path");

const DB = require("./models");

/*————————————————————————————— Middleware ————————————————————————————*/
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

/*————————————————————————————— API Routes ————————————————————————————*/
app.get("/api/v1/Subscribers", (request, response) => {
  DB.Subscriber.find({}, (err, foundUsers) => {
    if (err) {
      return response
        .status(400)
        .json({ message: "Something went wrong!", err: err });
    }
    response.status(200).json({ foundUsers });
  });
});

app.post("/api/v1/Subscribers", (request, response) => {
  DB.Subscriber.create(request.body, (err, createdUser) => {
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

/*———————————————————————————— HTML Routes ————————————————————————————*/
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/admin", (request, response) => {
  response.sendFile(__dirname + "/views/admin.html");
});

/*———————————————————————————— Start Server ———————————————————————————*/
app.listen(PORT, () => console.log(`Server listening at ${PORT}...`));
