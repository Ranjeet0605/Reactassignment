console.log("hi how are your");
const express = require("express");
const cors = require("cors");
const app =express();
app.use(express.json());
app.use(cors());
const PostRoutes = require("./Router/PostRoutes");
const connection = require("./Db");
app.use("/api/v1",PostRoutes)

connection();
  app.listen(4000,()=>{
    console.log("localhost is running on 4000");
  })