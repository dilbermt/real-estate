import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
// configure dotenv
dotenv.config();

const app = express();

// middleware to parse incoming json data in the request
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_STRING)
  .then((db) => {
    console.log("database connected", db.connection.host);
    app.listen(5000, () => {
      console.log("server running on 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
