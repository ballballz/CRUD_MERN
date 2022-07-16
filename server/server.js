const connectDB = require('./config/db')
const express = require('express')
const cors = require('cors')
const app = express();
connectDB()
const userRouter = require('./routes/userRouter')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user',userRouter)

app.listen(5000,()=>{
    console.log('Start server on port 5000')
})