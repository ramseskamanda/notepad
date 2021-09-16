import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const initializeMongoConnector = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
  } catch {
    await mongoose.disconnect();
  }
};
