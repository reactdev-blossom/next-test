import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_MONGO_STORE || "";

if (!MONGO_URI) {
  throw new Error("Please define the NEXT_MONGO_STORE environment variable");
}

let isConnected = false;

const dbConnect = async (): Promise<void> => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    console.log("Establishing new MongoDB connection...");
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Could not connect to MongoDB");
  }
};
export default dbConnect;
