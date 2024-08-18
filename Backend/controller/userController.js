const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel=require("../model/user")
require("dotenv").config()

const SignUp = async(req, res) => {
    try {
        const { email, password} = req.body
        let user = await userModel.findOne({ email: email })
        if (user) {
            return res.status(409).json("email already exist")
        }
        const hashed=await bcrypt.hash(password, 10)
         user = await userModel.create({ password: hashed, email })
        res.status(201).json("User registered succuessfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const LogIn = async(req, res) => {
    try {
        const { email, password} = req.body
        const user = await userModel.findOne({ email: email })
      
        if (!user) {
            return res.status(404).json("user is not found")
        }
        const compare = await bcrypt.compare(password, user.password)
        if (compare == false) {
            return res.status(401).json("login failed")
        }
        const token = jwt.sign({
            payload: {
                userId: user._id
            }
        }, process.env.JWT_SECRET
        )
        res.cookie('token', token, { httpOnly: true,secure:false ,maxAge: 10 * 24 * 60 * 60 * 1000 });
        res.status(200).json({ token,message:"login successfully"})
        
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports= {SignUp, LogIn}