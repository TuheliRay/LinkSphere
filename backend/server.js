import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import Message from "./models/Message.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes (protected with Clerk)
app.get("/messages", ClerkExpressRequireAuth(), async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

// Socket.io for real-time chat
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", async (msg) => {
    const newMsg = new Message({
      senderId: msg.senderId,
      text: msg.text,
    });
    await newMsg.save();

    io.emit("receiveMessage", newMsg); // broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
