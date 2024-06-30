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