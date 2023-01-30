const express = require('express')
const app = express();
const  {DB_Connection} = require('./config/db')
app.get('/fetch',(req,res)=>{console.log
("request is working")})
DB_Connection()
 


app.listen(5000,console.log('server started successfully'))