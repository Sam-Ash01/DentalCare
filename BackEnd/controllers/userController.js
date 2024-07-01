import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

export const getAllClients = async ( req , res ) => {
  try {
    const loggedInUserId = req.user._id
    
    const filteredUsers = await User.find({_id:{ $ne:loggedInUserId }}).select('-password')
    const justClients = filteredUsers.filter(user=>user.role ==='client')
    // console.log(justClients,"sfsdf");
    res.status(200).json({clients: justClients})

  } catch (error) {
    console.log('Error in getAllClients :' , error.message);
    res.status(500).json({error: 'Internal Server Error!'})
  }
}
export const getAllDoctors = async ( req , res ) => {
  try {
    const loggedInUserId = req.user._id
    
    const filteredUsers = await User.find({_id:{ $ne:loggedInUserId }}).select('-password')
    const justDoctors = filteredUsers.filter(user => user.role ==='doctor')
    // console.log(justDoctors,"sfsdf");
    res.status(200).json({doctors: justDoctors})

  } catch (error) {
    console.log('Error in getAllDoctors :' , error.message);
    res.status(500).json({error: 'Internal Server Error!'})
  }
}

export const getContacts = async (req, res) => {
  try {
    const userId = req.user._id;

    const conversations = await Conversation.find({
      participants: userId
    })
     .populate({
        path: 'msgs',
        options: { sort: { createdAt: -1 } },
        perDocumentLimit: 1
      })
     .populate('participants', '_id username profilePic fullName');

    const contacts = conversations.reduce((acc, conversation) => {
      const otherParticipants = conversation.participants.filter(participant => participant._id.toString()!== userId);
      otherParticipants.forEach(participant => {
        const lastMsg = conversation.msgs[0];
        acc.push({
          contactId: participant._id,
          fullName: participant.fullName,
          profilePic: participant.profilePic,
          lastMsg: lastMsg? {
            msg: lastMsg.msg,
            isSeen: lastMsg.isSeen,
            createdAt: lastMsg.createdAt
          } : null
        });
      });
      return acc;
    }, []);

    res.status(200).json({ contacts });
  } catch (error) {
    console.log('Error in getContacts Controller', error.message);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
}
