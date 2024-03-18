import mongoose from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
   try {
        const mongoURL: string = process.env.MONGO_URL || ''; // Assuming process.env.MONGODB_URI is of type string
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected successfully!");
   }
   catch (error) {
       console.log(error);
   }
}
