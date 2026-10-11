import express from 'express'

const Router = express.Router()


Router.get("/signup",(req,res)=>{
    res.send("Signup endpoint")
})
Router.get("/login",(req,res)=>{
    res.send("Login endpoint")
})
Router.get("/logout",(req,res)=>{
    res.send("Logout endpoint")
})

export default Router