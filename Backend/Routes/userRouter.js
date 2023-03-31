const express = require ('express')
const router = express.Router()
const {registerHelper, authUser,updateProfile} = require('../controllers/userControllers')
 const protect = require('../middilewares/authmiddilewares')


router.route('/').post(registerHelper)
router.route('/login').post(authUser)
router.route('/profile').post(protect,updateProfile)

module.exports=router