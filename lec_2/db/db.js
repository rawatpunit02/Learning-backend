import dotenv from 'dotenv'; //import .env fill so than environment variables will be available in all other modules via process.env. 
dotenv.config();
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

const dbConnect=async()=>{    // always use async because database present in another continent
    try {
       const connectionInstances=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connected")
        console.log(`${connectionInstances.connection.name}`)

    } catch (error) {
        console.log('MongoDB connection error',error);
        process.exit(1); //is a Node.js command that immediately stops the application and exits with a non-zero status code (in this case, 1), which means an error occurred.
    }
}

export default dbConnect;