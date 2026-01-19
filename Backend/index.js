import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.routes.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';
import authRoutes from './routes/auth.routh.js';
dotenv.config({})
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());

const corsOptions ={
  origin: ["http://localhost:5173"],
  credentials:true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT||5001;

//api's

app.use('/api/users',userRoutes);
app.use('/api/company',companyRoutes);
app.use('/api/job',jobRoutes);
app.use('/api/application',applicationRoutes);
app.use('/api/auth',authRoutes);
app.listen(PORT,()=>{
  connectDB();
console.log(`server is running on port ${PORT}`);
});