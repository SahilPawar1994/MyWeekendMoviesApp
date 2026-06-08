"use server";

import mongoose from "mongoose";

const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);
    try {
        const mongoDbUri = process.env.MONGO_DB_URI;
        if (!mongoDbUri) {
            throw new Error("MONGO_DB_URI is not defined in environment variables");
        }
        await mongoose.connect(mongoDbUri);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

export default connectToDatabase;