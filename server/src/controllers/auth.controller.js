import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req,res)=>{
    const {fullname , email , password} = req.body

    try {
        if(!fullname || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        
        if(password.length < 6){
            return res.status(400).json({message: "Password must be atleast 6 characters"})
        }
        
        // check if email is valid: regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format"})
        }

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({message: "Email alreadt exists"})
        }
        
        const hashedPassword = await bcrypt.hash(password,10)
        
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        })
        
        if(newUser){
            generateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilePic
            })

            // todo: Send a welcome email to user
        }else{
            return res.status(400).json({message: "Invalid User data"})
        }
    } catch (error) {
        console.log('Error and Signup controller', error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export const login = async (req,res)=>{
    res.send("Login endpoint")
}

export const logout = async (req,res)=>{
    res.send("Logout endpoint")
}