const postSchema = require("../Model/Post");

// create post 
exports.createPost = async(req,res)=>{
    try{
    const {caption,imageUrl} = req.body;
    const newPost = new postSchema({caption,imageUrl});
      await newPost.save();
      res.status(200).json(newPost);
    }
    catch(error){
       console.log(error);
    }
};
// get the post 
exports.getPost = async(req,res)=>{
    try{
      const posts = await postSchema.find();
      res.status(200).json(posts);
    }
    catch(error){
      res.status(500).json({message:"Error fetching posts",error});
    }
}