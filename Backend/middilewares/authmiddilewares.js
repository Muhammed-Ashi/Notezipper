const jwt = require("jsonwebtoken")
const asyncHandler = require ("express-async-handler")
const user = require ('../models/userModel')
require('dotenv').config()

const protect = asyncHandler (async (req,res,next) => {
    console.log('protect from creation ')
    let token;
    console.log('protect')
    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(" ")[1]
                   console.log(token,"token form jwt ")
             //decodes token id     
             const decoded = jwt.verify(token,process.env.jwt_Secret)
             console.log(decoded,"deco")
             
             console.log(decoded,"deco")
             
              req.user = await user.findById(decoded.id).select("-password")
              console.log(req.user,"next broken")
                next()
        } catch (error) {
             res.status(401)
             console.log(error,"from jwt")
             throw new Error("Not autorized , token failed")
        }
    }
     if (!token) {
        res.status(401)
        throw new Error( "Not authorized , No token")
     }
})

module.exports= protect