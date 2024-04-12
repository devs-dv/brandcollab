import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try { 
        await mongoose.connect(process.env.mongoURL);
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
