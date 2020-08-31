const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  const item = [
    {
      name: "pavi",
    },
    {
      name: "mitu",
    },
    {
      name: "hari",
    },
  ];
  res.render("home", { item: item });
});
module.exports = router;
