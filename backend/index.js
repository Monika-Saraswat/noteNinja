import express from 'express';
import { app, server } from './socket/socketio.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
dotenv.config();
import authRoutes from './routes/auth.routes.js'
app.use(express.json()) //to parse the incoming requests with JSON payloads(from body of request)
app.use(cookieParser()); // to parse through cookies

const uploadDir = path.join(process.cwd(), 'backend/public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware to serve static files from the backend/public/uploads directory
app.use('/uploads', express.static(uploadDir));

app.get("/",(req,res)=>{
    res.send("hello");
})

app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/noteNinja')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})

server.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})