const express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

require("dotenv").config();
var Message = mongoose.model("Message", {
  name: String,
  message: String,
});

const app = express();
var io = require("socket.io")(http);
var http = require("http").Server(app);
app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection established");
});
app.get("/welcome", (req, res) => {
  res.send("welcome");
});
var server = http.listen(3001, () => {
  console.log("server is running on port", server.address().port);
});
