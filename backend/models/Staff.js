import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["staff"],
    default: "staff",
  },
  position: {
    type: String,
    enum: ["io", "admin", "ci", "comndt", "deputy", "rogistics", "io", "cc"],
  },
  telephone: String,
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
