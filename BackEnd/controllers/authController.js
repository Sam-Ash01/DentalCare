import generateTokenAndSetCookie from "../utils/generateToken.js"
import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'

// Register Function // ------------------------------------------------------
export const register = async (req,res) => {
  try {
    const  { 
      fullName,
      email,
      password,
      phone,
      role,
      confirmPassword,
      gender,
      location,
      university,
      yearOfStudy,
      birthDate,
      studentId,
      workDays,
      services,
    } = req.body
    if(password !== confirmPassword){
      return res.status(400).json({error:`Password don't match!`})
    }
    const user = await User.findOne({email})
    if(user){
      return res.status(400).json({error:'User Already Exist'})
    }
    const hashPassword = await bcrypt.hash(password,12)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullName}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullName}`

    const newUser = new User({
      fullName,
      email,
      phone,
      password:hashPassword,
      role,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
      location,
      university,
      yearOfStudy,
      birthDate,
      studentId,
      workDays,
      services,
    })
    
      await newUser.save()
      const token = generateTokenAndSetCookie(newUser._id , newUser.role , res)
      res.status(201).json({id:newUser._id,
        fullName:newUser.fullName,
        email:newUser.email,
        role:newUser.role,
        token})

  } catch (error) {
    console.log('Error In Register',error.message);
    res.status(500).json({error:'Internal Server Error!'})
  }
}

// Login Function // ---------------------------------------------

export const login = async (req , res) => {
  try {
    const { email , password } = req.body
    const user = await User.findOne({email})
    const isPasswordCorrect = await bcrypt.compare( password , user?.password || "" )
    if(!user || !isPasswordCorrect){
      return res.status(400).json({error: 'Incorrect Coordinates!'})
    }
    const token =   generateTokenAndSetCookie(user._id , user.role ,  res)
    res.status(200).json({ 
      _id:user._id,
      fullName:user.fullName,
      email:user.email,
      role:user.role,
      token
    })
  } catch (error) {
    console.log('Error In Login',error.message);
    res.status(500).json({error:'Internal Server Error!'})
  }
}

// Logout function // -------------------------------------

export const logout = async (req , res) => {
  try {
    res.cookie('jwt',"",{maxAge:0})
    res.status(200).json({msg:'Logged Out Successfully!'})
  } catch (error) {
    console.log('Error in Logout Controller!', error.message);
    res.status(500).json({error:'Internal Server Error!'})
  }
}
