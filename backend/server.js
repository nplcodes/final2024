// server.js

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import postRoutes from './routes/postRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import cors from 'cors'
import staffRoutes from './routes/staffRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import codeRequestRoutes from './routes/codeRequestRoutes.js'







const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());


app.use('/auth', authRoutes);
app.use('/issue', issueRoutes);
app.use('/post', postRoutes);
app.use('/notification', notificationRoutes);
app.use('/appointment', appointmentRoutes);
app.use("/api/school", staffRoutes);
app.use("/api/school", studentRoutes);
app.use('/api/code', codeRequestRoutes); // Use the new route





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
