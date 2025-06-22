const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    like:{
        type:Number,
        default:0,
    },
    Comment:[
       {
        username:String,
        text:String,
        createdAt:{
            type:Date,
            default:Date.now,

        }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },

});
module.exports = mongoose.model("Post",postSchema);