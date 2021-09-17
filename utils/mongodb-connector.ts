import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const ensureMongoInit = async (): Promise<boolean> => {
  // if (mongoose.connections.length) return;
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    return true;
  } catch {
    await mongoose.disconnect();
    return false;
  }
};
