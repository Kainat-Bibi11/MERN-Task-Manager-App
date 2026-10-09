const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db')
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors')

app.get('/',(req,res)=>{
    res.send('Hello from the server')
})

app.use(cors())
app.use(bodyParser.json());
app.use('/tasks', TaskRouter)


const PORT = process.env.PORT || 5050;


app.listen(PORT , ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})



