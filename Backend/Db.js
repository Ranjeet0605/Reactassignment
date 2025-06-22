const mongoose = require("mongoose");
const connection = async(req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://r6306344:WeIXpjf2Tn0yrDju@cluster0.iucwe.mongodb.net/Instagram").then(()=>{
            console.log("Database is connected");
        })
    }catch(error){
      (error);
    }
}
module.exports =connection;