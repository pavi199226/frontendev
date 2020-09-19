const router = require("express").Router();
let comp = require("../models/value.model");
router.route("/").get((req, res) => {
  comp
    .find()
    .then((value) => res.json(value))
    .catch((err) => res.statusCode(400).json("error" + err));
});
router.route("/add").post((req, res) => {
  const girlcount = req.body.girlcount;
  const newvalue = new comp({ girlcount });
  newvalue
    .save()
    .then(() => res.json("value added"))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/:id").get((req, res) => {
  comp
    .findById(req.params.id)
    .then((value) => res.json(value))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/:id").delete((req, res) => {
  comp
    .findByIdAndDelete(req.params.id)
    .then((value) => res.json("deleted"))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/update/:id").post((req, res) => {
  comp
    .findById(req.params.id)
    .then((value) => {
      value.girlcount = req.body.girlcount;
      value
        .save()
        .then(res.json("value updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("error" + err));
});
module.exports = router;
