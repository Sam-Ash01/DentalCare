import Conversation from "../models/conversationModel.js";
import Msg from "../models/messageModel.js";

export const sendMsg = async (req , res) => {
  try {
    const {msg} = req.body
    const {id:receiverId} = req.params
    const senderId = req.user._id
    // console.log(msg,'msg',receiverId,'id',senderId,'sender');
    let conversation = await Conversation.findOne({
      participants:{ $all : [senderId , receiverId]}
    })
    if(!conversation){
      conversation = await Conversation.create({
        participants: [senderId , receiverId]
      })
    }
    const newMsg = new Msg({
      senderId,
      receiverId,
      msg
    })
    if(newMsg){
      conversation.msgs.push(newMsg._id)
    }
    res.status(201).json({msg : newMsg})
    // Socket Io Functionality  
    await Promise.all([ conversation.save(), newMsg.save()])

  } catch (error) {
    console.log('Error in sendMsg Controller' , error.message);
    res.status(500).json({error:'Internal Server Error!'})
  }
} 

export const getMsgs = async (req,res) => {
  
  try {
    const {id:userToChatId} = req.params
    const senderId = req.user._id
    const conversation = await Conversation.findOne({
      participants:{ $all : [senderId , userToChatId]}
    }).populate('msgs')
    res.status(200).json({msgs:conversation.msgs})
    
  } catch (error) {
    console.log('Error in getMsg Controller' , error.message);
    res.status(500).json({error:'Internal Server Error!'})
  }
}
