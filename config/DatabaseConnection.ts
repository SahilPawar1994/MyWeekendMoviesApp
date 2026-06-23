"use server";

import mongoose from "mongoose";

const connectToDatabase = async () => {
    // mongoose.set("strictQuery", true);
    // try {
    //     const mongoDbUri = process.env.MONGO_DB_URI;
    //     if (!mongoDbUri) {
    //         throw new Error("MONGO_DB_URI is not defined in environment variables");
    //     }
    //     await mongoose.connect(mongoDbUri);
    //     console.log("Connected to MongoDB successfully");
    // } catch (error) {
    //     console.error("Error connecting to MongoDB:", error);
    //     throw error;
    // }


    await mongoose.connect("mongodb://127.0.0.1:27017/myweekendmovieapp")
        .then(() => console.log("✅ Connected to local MongoDB"))
        .catch((err) => console.log("❌ Error:", err));

};


export default connectToDatabase;