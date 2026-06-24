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


    // mongodb+srv://sahil:<db_password>@cluster1.54zgd.mongodb.net/?appName=cluster1
    // mongodb://127.0.0.1:27017/myweekendmovieapp
    await mongoose.connect("mongodb+srv://sahil:user@cluster1.54zgd.mongodb.net/MyWeekendMoviesApp?appName=cluster1")
        .then(() => console.log("✅ Connected to local MongoDB"))
        .catch((err) => console.log("❌ Error:", err));

};


export default connectToDatabase;