const express = require("express");
const creds = require("./config");
const app = express();
const port = process.env.PORT || 5000;
const home = require("./routes/home");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};
app.get("/users", (req, res) => {
  res.send(Object.values(users));
});
app.set("view engine", "ejs");
app.use(home);
app.listen(port, () => console.log("listening" + port));
