const mongoose = require("mongoose");
const schema = mongoose.schema;
const compschema = new mongoose.Schema({
  girlcount: {
    type: Number,
  },
});
const comp = mongoose.model("Component", compschema);
module.exports = comp;
