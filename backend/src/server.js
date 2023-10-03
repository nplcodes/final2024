// server.js

import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import commentRoutes from './routes/commentRoutes.js';



const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/issue', issueRoutes);
app.use('/comment', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
