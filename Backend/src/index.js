const express = require('express');
const Connection = require('./config/db')
require('dotenv').config();
const PORT = process.env.PORT || 3000; 

const app = express();

app.use('/',(req,res)=>{
    res.send("Working fine");
})

Connection();

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:-${PORT}`);
})