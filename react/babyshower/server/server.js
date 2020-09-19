const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const girl = require("./routes/girl");
const boy = require("./routes/boy");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../babyshower/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "babyshower", "build", "index.html"));
  });
}
app.use("/girl", girl);
app.use("/boy", boy);
app.listen(port, () => {
  console.log(`server started at port${port}`);
});
