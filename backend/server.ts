import express from 'express';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.ts';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req: Request, res: Response) => {
  res.send("API is running");
});

// mongodb connection
const connectDB = async (): Promise<void> => {
  const uri = config.mongoUri;
  if (!uri) {
    console.error("[ ERROR ] MONGO_URI is not defined in environment variable");
    process.exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connection Successful");
  } catch (error) {
    const err = error as Error;
    console.error("[ ERROR ] MongoDB Connection Failed", err.message);
    process.exit(1);
  }
}

connectDB();

// start server
const PORT = config.port;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (env: ${config.nodeEnv})`)
});

// gracefully shutdown
const gracefulShutdown = (signal: string) => {
  console.log(`Received ${signal}. Shutting down...`);
  server.close(async () => {
    try {
      await mongoose.connection.close(false);
      console.log('MongoDB connection closed.');
      process.exit(0);
    } catch (err) {
      console.error('Error during shutdown:', err);
      process.exit(1);
    }
  });
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));