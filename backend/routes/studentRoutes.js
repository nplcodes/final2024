// studentRoutes.js
import express from "express";
import studentController from "../controllers/studentController.js";

const router = express.Router();

router.post("/student/register", studentController.registerStudent);

export default router;
