import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB, connectServer } from "./config.js";
import notFoundMiddleware from "./middlewares/notFound.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
import userRouter from "./routes/user.js";
// Server
const app = express();

// Middlewares
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To be enable to make requests from the frontend
app.use(morgan("tiny")); // To log the incoming requests e.g. : GET /api/v1/place 200 - 3.458 ms

// Routes
app.use("/user", userRouter); // Place routes


// Config
app.use(notFoundMiddleware()); // For handling not found routes
app.use(errorHandlerMiddleware()); // For handling errors

// Connection
connectDB(); // Connect to MongoDB
connectServer(app); // Connect to Server