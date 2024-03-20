import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from  "./routes/auth.routes.js";
import messageRoutes from  "./routes/message.routes.js";
import userRoutes from  "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server, io } from './socket/socket.js'; // Importing app, server, and io from socket.js

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
