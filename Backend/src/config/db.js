const mongoose = require("mongoose");
require('dotenv').config();

const Connection = async () => {
    try { 
        await mongoose.connect(process.env.mongoURL);
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

module.exports = Connection;
