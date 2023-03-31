const user = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/genereateToken')




const registerHelper = asyncHandler(async (req, res, next) => {
  
  const { name, email, password, picMessage } = req.body
  console.log(req.body)

  const userExists = await user.findOne({ email:email })
      console.log(userExists,"esxi")
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  } 

  const User = await user.create(
    {
      name:req.body.name,
      password:req.body.password,
      email:req.body.email,
      pic:req.body.picMessage,
      isAdmin:false,
      
    }
  )
  

  if (User) {
    res.status(200).json({
      _id : User._id,
      name : User.name,
      email: User.email,
      pic : User.pic, 
      isAdmin : User.Admin
    })
  }else {
    res.status(400)
    throw new Error("Error Occured!")
  }
})



const authUser = asyncHandler(async (req, res, next) => {
  console.log('authentication login')
  const {  email, password } = req.body
   
const User = await user.findOne({email})
         if (User && (await User.matchpassword(password))){

      
              res.status(200).json({
            _id : User._id,
            name : User.name,
            email: User.email,
            pic : User.pic, 
            isAdmin : User.Admin,
            token : generateToken(User._id)
          })
       
         }else {
          res.status(400)
          throw new Error(' invalied username and password ')
         }

})
 
const updateProfile =asyncHandler (async(req,res,next)=> {
  console.log("are you reach there")
       const User = await user.findById(req.user.id)
       if (User) {
        console.log(req.body,"profilescreen")
           User.name = req.body.name || User.name
           User.email = req.body.email || User.email
           User.pic = req.body.pic || User.pic

           if (req.body.password) {
            User.password=req.body.password
           }

           const UpdatedUser = await User.save()

           res.json({
            _id : UpdatedUser._id,
            name : UpdatedUser.name,
            email : UpdatedUser.email,
            pic   : UpdatedUser.pic,
            token : generateToken(UpdatedUser._id)
           })
       }else {
        res.status(404)
        throw new Error("User not Found")
       }

}) 
module.exports = { registerHelper ,authUser, updateProfile }