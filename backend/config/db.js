import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectMongoDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log('Mongodb connected successfully');
        
    } catch (error) {
        console.log("mongoose connection error:" ,error)
        process.exit(1);
    }
};
export default connectMongoDB;
