
// studentRoutes.js
import express from "express";
import studentController from "../controllers/studentController.js";

const router = express.Router();

router.post("/student/register", studentController.registerStudent);
router.put("/student/update/:id", studentController.updateStudent);
router.delete("/student/delete/:id", studentController.deleteStudent);
router.get("/student/all", studentController.getAllStudents);


export default router;

