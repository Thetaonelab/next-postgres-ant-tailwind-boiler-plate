// utils/dbConnect.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

const options: any = {
};

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, options);
    }
  } catch (error: any) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default dbConnect;
