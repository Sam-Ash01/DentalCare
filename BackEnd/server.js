import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './db/connectDb.js'
// Routes // --------------------------------
import autRoutes from './routes/authRoutes.js'
import msgRoutes from './routes/msgRoutes.js'
import userRoutes from './routes/userRoutes.js'
import appoRoutes from './routes/appoRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/auth',autRoutes)
app.use('/api/msgs',msgRoutes)
app.use('/api/users',userRoutes)
app.use('/api/appo',appoRoutes)


app.listen(PORT , () => {
  connectDB(),
console.log(`Server Is running on Port : ${PORT}`)
})