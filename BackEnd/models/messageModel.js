import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  msg:{
    type:String,
    required:true
  }
},{timestamps:true})

const Msg = mongoose.model('Msg' , messageSchema)

export default Msg