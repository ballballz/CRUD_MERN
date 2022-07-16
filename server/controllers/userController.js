const User = require('../models/userSchema')

const register = async (req,res) => {
    const { name,email,age,mobile,work,address,des } = req.body

    console.log(req.body)

    if(!name || !email || !age || !mobile || !work || !address || !des){
        res.status(404).json('please fill the data')
    }

    try {

        const user = await User.findOne({email})

        if(user){
            res.status(404).json('this is email is already present')
        }else{
            const adduser = await User.create({
                name,email,age,mobile,work,address,desc:des
            })

            res.status(201).json(adduser)
        }

    } catch (error) {
        res.status(404).json(error)
    }
}

const getData = async (req,res) => {

    try {
        const userData = await User.find()
        res.status(200).json(userData)
    } catch (error) {
        res.status(404).json(error)
    }
}

const getDataID = async(req,res) => {
    try {
        const { id } = req.params
        const data = await User.findById({_id:id}) 
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error)
    }
}

const updateUser = async(req,res) => {
    try {
        const { id } = req.params
        const update_data = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(update_data)
        
    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteUser = async(req,res) => {
    try {
        const { id } = req.params
        const delete_user = await User.findByIdAndDelete({_id:id})
        res.status(200).json(delete_user)

    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { register,getData,getDataID,updateUser,deleteUser }