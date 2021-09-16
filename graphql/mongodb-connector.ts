import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const initializeMongoConnector = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
  } catch {
    await mongoose.disconnect();
    throw new Error("Mongo client failed to connect");
  }
};
