const express = require('express')
const router = express.Router()
const { register,getData,getDataID,updateUser,deleteUser } = require('../controllers/userController')

router.post('/register',register)
router.get('/getdata',getData)
router.get('/getdata/:id',getDataID)
router.patch('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports = router