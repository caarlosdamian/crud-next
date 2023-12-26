import console from 'console';
import mongoose from 'mongoose';

const connectMongoDb = async () => {
  try {
    console.log(process.env.MONGODB_URI)
   await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected To Mongodb');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
