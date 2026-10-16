import express from 'express'
import { login, logout, signup, updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middlewares/auth.middleware.js'
import { arcjetProtection } from '../middlewares/arcjet.middleware.js'

const Router = express.Router()

Router.use(arcjetProtection)

Router.post("/signup", signup)
Router.post("/login",login)
Router.post("/logout",logout)
Router.put("/update-profile",protectRoute,updateProfile)
Router.get('/check',protectRoute,(req,res)=>res.status(200).json(req.user))

export default Router