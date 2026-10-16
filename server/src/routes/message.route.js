import express from 'express'
import { getAllContacts, getChatPartners, getMessagesByUserId, sendMessage } from '../controllers/message.controller.js'
import { protectRoute } from '../middlewares/auth.middleware.js'
import { arcjetProtection } from '../middlewares/arcjet.middleware.js'

const Router = express.Router()

Router.use(arcjetProtection,protectRoute)

Router.get('/contacts',getAllContacts)
Router.get('/chats',getChatPartners)
Router.get('/:id',getMessagesByUserId)
Router.post("/send/:id",sendMessage)

export default Router