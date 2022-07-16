const mongoose = require('mongoose')

const DB = 'mongodb+srv://eieiball:06807411706abC@cluster0.66apl.mongodb.net/merncrud?retryWrites=true&w=majority'

// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>console.log('connection start')).catch((error)=>console.log(error.message))

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB)
        console.log("connection start")
    }catch (error) {
        console.log(error)
    }
}

module.exports = connectDB