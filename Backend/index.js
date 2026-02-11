import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path, { resolve } from 'path';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.routes.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config({})
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());

const corsOptions ={
  origin: ["https://hirenest-9bnu.onrender.com"],
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

// ---------code for deployment-------
if(process.env.NODE_ENV === "production"){
  const dirpath = resolve();
  app.use(express.static('./Frontend/dist'));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
    } else {
      res.sendFile(path.resolve(dirpath, './Frontend/dist', 'index.html'));
    }
  });
}
app.listen(PORT,()=>{
  connectDB();
console.log(`server is running on port ${PORT}`);
});