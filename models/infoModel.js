import mongoose from "mongoose";

const infoSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

var infoModel = mongoose.model("info", infoSchema);
export default infoModel;
