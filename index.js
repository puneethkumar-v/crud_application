const express = require("express");
require("dotenv").config();
// import express from "express";
// const Tasks = require("./routes/tasks");
// import Tasks from "./routes/tasks.js";
const tasks = require("./routes/router");
const connectDB = require("./db/connect");
const app = express();
const port = 3000;
app.use(express.json());
// app.use(express.static("public"));
app.use("/api/v1/tasks/", tasks);
// app.get("/", (req, res) => {
//   res.send("This is This is cool amazing and do this hello Hello World");
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
