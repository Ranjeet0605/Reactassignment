const express = require("express");
const { createPost, getPost } = require("../Controller/Post");
 const router = express.Router();
 
 router.post("/post",createPost);
 router.get("/getallposts",getPost);
 module.exports = router;