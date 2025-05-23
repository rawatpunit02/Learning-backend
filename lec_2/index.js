import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import dbConnect from "./db/db.js"


dbConnect();






/*
import express from "express"

const app=express();
(async()=>{
 try {
   await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("Error",error)
    throw error
   })
   app.listen(process.env.PORT,()=>{
    console.log(`app is  listing at ${process.env.PORT}`);
   })
 } catch (error) {
    console.log("Error",error)
    throw error
 }
})()
 */