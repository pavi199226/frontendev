const mongoose = require("mongoose");
const schema = mongoose.schema;
const compschema1 = new mongoose.Schema({
  boycount: {
    type: Number,
  },
});
const comp1 = mongoose.model("Component1", compschema1);
module.exports = comp1;
