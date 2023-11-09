// server.js

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import postRoutes from './routes/postRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import cors from 'cors'
import multer from 'multer';





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



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
