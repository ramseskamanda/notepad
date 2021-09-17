import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const ensureMongoInit = async (): Promise<void> => {
  // if (mongoose.connections.length) return;
  try {
    await mongoose.connect(uri);
  } catch {
    await mongoose.disconnect();
  }
};
