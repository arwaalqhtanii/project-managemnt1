import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log("Attempting to connect to the database...");

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
