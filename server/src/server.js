import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoute)

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})