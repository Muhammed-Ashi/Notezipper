
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (id)=> {
      console.log( )
    return jwt.sign( {id},process.env.jwt_Secret)
    
}

module.exports=generateToken