import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config({})
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());

const corsOptions ={
  origin: ["https://localhost:5121"],
  Credentials:true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT||5001;

app.listen(PORT,()=>{
  connectDB();
console.log(`server is running on port ${PORT}`);
});