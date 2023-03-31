const express = require('express')
const app = express();
const  {DB_Connection} = require('./config/db')
const userRouter = require('./Routes/userRouter')
const noteRouter = require('./Routes/noteRouter')
require('dotenv').config()


//connect with mongodb
DB_Connection()
app.use (express.json())
app.use('/api/user',userRouter)
app.use('/api/notes',noteRouter)



app.listen(5000,console.log('server started successfully',process.env.PORT))