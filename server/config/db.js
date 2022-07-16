const mongoose = require('mongoose')


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