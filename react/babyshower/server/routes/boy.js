const router = require("express").Router();
let comp1 = require("../models/value1.model");
router.route("/").get((req, res) => {
  comp1
    .find()
    .then((value) => res.json(value))
    .catch((err) => res.statusCode(400).json("error" + err));
});
router.route("/add").post((req, res) => {
  const boycount = req.body.boycount;
  const newvalue = new comp1({ boycount });
  newvalue
    .save()
    .then(() => res.json("value added"))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/:id").get((req, res) => {
  comp1
    .findById(req.params.id)
    .then((value) => res.json(value))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/:id").delete((req, res) => {
  comp1
    .findByIdAndDelete(req.params.id)
    .then((value) => res.json("deleted"))
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/update/:id").post((req, res) => {
  comp1
    .findById(req.params.id)
    .then((value) => {
      value.boycount = req.body.boycount;
      value
        .save()
        .then(res.json("value updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("error" + err));
});
module.exports = router;
