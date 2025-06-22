const mongoose = require("mongoose");
const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Enter the name "],
        maxLength:[30,"Your name should not more than 3o char"],
        minLength:[2, "Your name should not less than 4 char"],
        
    }
})