// server.js

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import postRoutes from './routes/postRoutes.js';
import availabilityRoutes from './routes/availabilityRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';






const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/issue', issueRoutes);
app.use('/comment', commentRoutes);
app.use('/post', postRoutes);
app.use('/staff', availabilityRoutes);
app.use('/appointment', appointmentRoutes);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
