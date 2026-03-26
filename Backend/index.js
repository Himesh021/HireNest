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

const allowedOrigins = [
  "https://hirenest-9bnu.onrender.com",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    // and explicitly allowed browser origins.
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Content-Length", "X-Requested-With"],
};

// Register CORS first so even parser/route errors still include CORS headers.
app.use(cors({
  origin: true,   // 🔥 allow all origins dynamically
  credentials: true
}));

// Handle preflight requests explicitly before other routes
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (!origin) {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    return res.status(200).end();
  }
  next();
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());

const PORT = process.env.PORT||5001;

//api's

app.use('/api/users',userRoutes);
app.use('/api/company',companyRoutes);
app.use('/api/job',jobRoutes);
app.use('/api/application',applicationRoutes);
app.use('/api/auth',authRoutes);

// Global error handler to avoid opaque 500s in clients.
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  
  // Set CORS headers even for error responses
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({
    message: err?.message || "Internal server error",
    success: false,
  });
});

// ---------code for deployment-------
if(process.env.NODE_ENV === "production"){
  const dirpath = resolve();
  app.use(express.static('../Frontend/dist'));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
    } else {
      res.sendFile(path.resolve(dirpath, '../Frontend/dist', 'index.html'));
    }
  });
}
app.listen(PORT,()=>{
  connectDB();
console.log(`server is running on port ${PORT}`);
});
