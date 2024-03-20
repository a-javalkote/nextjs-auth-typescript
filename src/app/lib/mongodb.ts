import mongoose from "mongoose";
import { decrypt } from "./security";
export const connectMongoDB = async (): Promise<void> => {
   try {
        const mongoURL: string = process.env.MONGO_URL || ''; // Assuming process.env.MONGODB_URI is of type string
        const decryptmongoURL =  decrypt(mongoURL);
        await mongoose.connect(decryptmongoURL);
        console.log("MongoDB connected successfully!");
   }
   catch (error) {
       console.log(error);
   }
}
