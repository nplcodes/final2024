// StudentModel.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  telephone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    enum: ["Computer Science", "PPs", "Languages", "Law"],
  },
  level: {
    type: String,
    enum: ["Level 1", "Level 2", "Level 3", "Level 4"],
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
