// db/connectToMongoDB.js

import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI); // Change this to your MongoDB URI
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        // Add appropriate error handling here
    }
};

export default connectToMongoDB;
