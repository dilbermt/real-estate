import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

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
