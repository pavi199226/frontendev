const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const home = require("./routes/home");

app.get("/", (req, res) => {
  res.send("home");
});
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
